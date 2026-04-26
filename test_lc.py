import requests, json
query = '''
query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    questionFrontendId
    title
    content
    difficulty
  }
}
'''
variables = {'titleSlug': 'add-two-numbers'}
payload = {'query': query, 'variables': variables}
headers = {'Content-Type': 'application/json', 'Referer': 'https://leetcode.com/'}
r = requests.post('https://leetcode.com/graphql', json=payload, headers=headers)
print(r.json())
