import json, requests, time

def fetch_lc(slug):
    query = '''
    query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        title
        content
        difficulty
      }
    }
    '''
    payload = {'query': query, 'variables': {'titleSlug': slug}}
    headers = {'Content-Type': 'application/json', 'Referer': 'https://leetcode.com/'}
    r = requests.post('https://leetcode.com/graphql', json=payload, headers=headers)
    return r.json()

data = json.load(open('extracted_dsa_data.json', encoding='utf-8'))
lc = [p for p in data if 'leetcode.com/problems/' in p['link']]
print(f"Total LC: {len(lc)}")

for i in range(5):
    slug = lc[i]['link'].split('/problems/')[1].strip('/')
    res = fetch_lc(slug)
    print(i, slug, "Success" if 'data' in res and res['data']['question'] else "Failed")
    time.sleep(0.5)
