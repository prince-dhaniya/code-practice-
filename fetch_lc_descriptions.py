import asyncio, aiohttp, json
import os

CACHE_FILE = 'lc_cache.json'

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
        pass
    return slug, None

async def main():
    with open('extracted_dsa_data.json', encoding='utf-8') as f:
        data = json.load(f)
        
    lc_links = [p['link'] for p in data if isinstance(p.get('link'), str) and 'leetcode.com/problems/' in p['link']]
    
    cache = {}
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            cache = json.load(f)
            
    tasks = []
    async with aiohttp.ClientSession() as session:
        for link in lc_links:
            slug = link.split('/problems/')[1].split('/')[0].strip()
            if slug not in cache:
                tasks.append(fetch_lc(session, slug))
        
        if not tasks:
            print("✅ All LeetCode descriptions are already cached!")
            return
            
        print(f"⏳ Fetching {len(tasks)} new descriptions from LeetCode GraphQL...")
        
        # Batching to avoid hammering the API completely
        batch_size = 50
        for i in range(0, len(tasks), batch_size):
            batch = tasks[i:i+batch_size]
            results = await asyncio.gather(*batch)
            for s, content in results:
                if content:
                    cache[s] = content
            print(f"  ... Fetched {min(i+batch_size, len(tasks))}/{len(tasks)}")
            
            # small delay between batches
            await asyncio.sleep(0.5)

    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Saved {len(cache)} descriptions to {CACHE_FILE}")

if __name__ == "__main__":
    asyncio.run(main())
