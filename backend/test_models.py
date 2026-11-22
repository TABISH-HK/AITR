import httpx
key = open(r'D:\Agent BASED SYSTEM\ITR-System\backend\.env').read().splitlines()[0].split('=')[1].strip()
headers = {'Authorization': f'Bearer {key}', 'Content-Type': 'application/json'}

candidates = [
    'google/gemma-3-12b-it',
    'mistralai/mistral-large-4-1t-a52b',
    'z-ai/glm-5.3-flash',
    'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning',
    'nvidia/nemotron-3.5-lightning-30b-a3b',
]

for model in candidates:
    payload = {
        'model': model,
        'messages': [{'role': 'user', 'content': 'Extract name from: "Taxpayer: Tabish Hasan". Return JSON: {"name": "..."}'}],
        'max_tokens': 150
    }
    try:
        r = httpx.post('https://integrate.api.nvidia.com/v1/chat/completions', headers=headers, json=payload, timeout=20)
        data = r.json()
        choice = data.get('choices', [{}])[0]
        content = choice.get('message', {}).get('content')
        print(f"{model} => Status: {r.status_code}, Content: {repr(content)}")
    except Exception as e:
        print(f"{model} => Error: {e}")
