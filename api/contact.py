import html
import json
import os
import smtplib
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError


RECIPIENT = 'sandhyagirish12@gmail.com'


class handler(BaseHTTPRequestHandler):
    def send_json(self, status_code, payload):
        body = json.dumps(payload).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)


    def do_POST(self):
        try:
            length = int(self.headers.get('Content-Length', '0'))
            data = json.loads(self.rfile.read(length).decode('utf-8'))
        except (ValueError, json.JSONDecodeError, UnicodeDecodeError):
            data = {}
        if not isinstance(data, dict):
            data = {}

        name = data.get('name')
        phone = data.get('phone')
        email = data.get('email')
        appointment_date = data.get('appointment_date')
        message = data.get('message')

        if not all([name, phone, email, appointment_date, message]):
            return self.send_json(400, {'error': 'Please complete all fields.'})

        sender_email = os.environ.get('GMAIL_USER')
        app_password = os.environ.get('GMAIL_APP_PASSWORD', '').replace(' ', '')
        make_webhook = os.environ.get('MAKE_WEBHOOK_URL')
        if not sender_email or not app_password or not make_webhook:
            return self.send_json(503, {'error': 'Email and Make webhook delivery are not configured yet.'})

        webhook_data = json.dumps({
            'name': name,
            'phone': phone,
            'email': email,
            'appointment_date': appointment_date,
            'message': message,
            'source': 'Veya free skin confidence consultation',
        }).encode('utf-8')
        webhook_request = Request(
            make_webhook,
            data=webhook_data,
            headers={'Content-Type': 'application/json'},
            method='POST',
        )
        try:
            with urlopen(webhook_request, timeout=10) as webhook_response:
                if webhook_response.status >= 400:
                    return self.send_json(502, {'error': 'Make rejected the appointment request.'})
        except HTTPError:
            return self.send_json(502, {'error': 'Make rejected the appointment request.'})
        except URLError:
            return self.send_json(502, {'error': 'Make webhook could not be reached.'})

        safe = {key: html.escape(str(value)) for key, value in {
            'name': name,
            'phone': phone,
            'email': email,
            'appointment_date': appointment_date,
            'message': message,
        }.items()}
        email_message = EmailMessage()
        email_message['Subject'] = f'New Veya appointment request from {name}'
        email_message['From'] = sender_email
        email_message['To'] = RECIPIENT
        email_message['Reply-To'] = email
        email_message.set_content(
            f'New appointment request\n\n'
            f'Name: {name}\n'
            f'Phone: {phone}\n'
            f'Email: {email}\n'
            f'Preferred date: {appointment_date}\n\n'
            f'Message:\n{message}'
        )
        email_message.add_alternative(
            f'<h2>New appointment request</h2>'
            f'<p><strong>Name:</strong> {safe["name"]}</p>'
            f'<p><strong>Phone:</strong> {safe["phone"]}</p>'
            f'<p><strong>Email:</strong> {safe["email"]}</p>'
            f'<p><strong>Preferred date:</strong> {safe["appointment_date"]}</p>'
            f'<p><strong>Message:</strong><br>{safe["message"]}</p>',
            subtype='html',
        )

        try:
            with smtplib.SMTP_SSL('smtp.gmail.com', 465, timeout=10) as smtp:
                smtp.login(sender_email, app_password)
                smtp.send_message(email_message)
        except smtplib.SMTPAuthenticationError:
            return self.send_json(502, {'error': 'Gmail authentication failed. Use a Google App Password, not your normal password.'})
        except (smtplib.SMTPException, OSError):
            return self.send_json(502, {'error': 'Gmail could not send the appointment request.'})
        except Exception:
            return self.send_json(502, {'error': 'Unable to send the appointment request.'})

        return self.send_json(200, {'status': 'ok'})
