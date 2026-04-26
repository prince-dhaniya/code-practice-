import json
import re
import os
import uuid

def parse_bookmarks(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    problems = []
    topic_stack = []
    
    # Regex patterns
    h3_pattern = re.compile(r'<H3[^>]*>(.*?)</H3>', re.IGNORECASE)
    a_pattern = re.compile(r'<A[^>]*HREF="([^"]*)".*?>(.*?)</A>', re.IGNORECASE)
    
    for line in lines:
        line = line.strip()
        
        # Check if we are opening a new category
        h3_match = h3_pattern.search(line)
        if h3_match:
            topic_stack.append(h3_match.group(1).strip())
            continue
            
        # Check if we are closing a category
        if '</DL>' in line.upper():
            if topic_stack:
                topic_stack.pop()
            continue
            
        # Check if we have a link
        a_match = a_pattern.search(line)
        if a_match:
            link = a_match.group(1).strip()
            name = a_match.group(2).strip()
            
            # Skip non-problem links if possible or just use them
            topic = topic_stack[-1] if topic_stack else 'General'
            
            problems.append({
                'Problem Name': name,
                'Topic/Category': topic,
                'Difficulty Level': 'Unknown',  # Not provided in standard netscape bookmark
                'Original Practice Link': link
            })
            
    return problems

data = parse_bookmarks(r'c:\Users\UseR\Downloads\DSA SHEET.html')
print(f'Extracted {len(data)} problems.')

# Add IDs to data
for item in data:
    item['id'] = str(uuid.uuid4())

# Write JSON
with open('extracted_dsa_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)

# Generate SQL Seed
with open('seed.sql', 'w', encoding='utf-8') as sql_file:
    sql_file.write("-- Seed file for problems table\n")
    for row in data:
        name = row['Problem Name'].replace("'", "''")
        topic = row['Topic/Category'].replace("'", "''")
        difficulty = row['Difficulty Level'].replace("'", "''")
        link = row['Original Practice Link'].replace("'", "''")
        prob_id = row['id']
        sql_file.write(f"INSERT INTO problems (id, title, topic, difficulty, link, is_completed) VALUES ('{prob_id}', '{name}', '{topic}', '{difficulty}', '{link}', false);\n")
