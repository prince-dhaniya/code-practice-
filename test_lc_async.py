import asyncio, aiohttp, json

async def fetch_lc(session, slug):
    query = '''
    query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        content
      }
    }
    '''
    try:
        async with session.post('https://leetcode.com/graphql', 
                                json={'query': query, 'variables': {'titleSlug': slug}},
                                headers={'Content-Type': 'application/json', 'Referer': 'https://leetcode.com/'}) as response:
            res = await response.json()
            if 'data' in res and res['data']['question']:
                return slug, res['data']['question']['content']
    except Exception as e:
        return slug, None
    return slug, None

async def main():
    data = json.load(open('extracted_dsa_data.json', encoding='utf-8'))
    lc = [p for p in data if 'leetcode.com/problems/' in p['link']]
    
    async with aiohttp.ClientSession() as session:
        # Test just the first 10
        tasks = []
        for p in lc[:10]:
            slug = p['link'].split('/problems/')[1].split('/')[0].strip()
            tasks.append(fetch_lc(session, slug))
        
        results = await asyncio.gather(*tasks)
        for s, c in results:
            print(s, "Success" if c else "Failed")

asyncio.run(main())
