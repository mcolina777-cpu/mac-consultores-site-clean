import re
import json
import os

base_dir = "/Users/macbook/Desktop/MAC CONSULTORES JURIDICOS & ASOCIADOS/Mac-Consultores"

with open(os.path.join(base_dir, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

keys_in_html = re.findall(r'data-i18n="([^"]+)"', html)
print(f"Found {len(keys_in_html)} data-i18n keys in index.html")

# Let's see which json files we have
json_files = ["home.json", "common.json"] # The ones likely used for home page

keys_in_json = set()
for jf in json_files:
    try:
        with open(os.path.join(base_dir, jf), "r", encoding="utf-8") as f:
            data = json.load(f)
            # Flatten json keys for comparison:
            def flatten(d, prefix=''):
                for k, v in d.items():
                    if isinstance(v, dict):
                        flatten(v, prefix + k + '.')
                    else:
                        keys_in_json.add(prefix + k)
            flatten(data)
    except Exception as e:
        print(f"Error reading {jf}: {e}")

missing = [k for k in keys_in_html if k not in keys_in_json]
if missing:
    print(f"Keys missing in JSON: {missing}")
else:
    print("All data-i18n keys from index.html found in JSON.")

