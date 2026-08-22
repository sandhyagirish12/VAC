import json

def handler(request):
    try:
        data = request.form
    except Exception:
        data = {}
    name = data.get('name') or request.args.get('name')
    email = data.get('email') or request.args.get('email')
    message = data.get('message') or request.args.get('message')
    # In a real deploy you'd validate and send an email or persist the lead.
    if not name or not email or not message:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Missing fields'})
        }
    return {
        'statusCode': 200,
        'body': json.dumps({'status': 'ok'})
    }
