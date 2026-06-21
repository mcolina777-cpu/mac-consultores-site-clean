import re
import urllib.request
import urllib.error
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

links = set(re.findall(r'href=["\'](http[s]?://[^"\']+)["\']', content))
for link in links:
    try:
        req = urllib.request.Request(link, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, context=ctx, timeout=5)
        print(f"OK: {link}")
    except urllib.error.HTTPError as e:
        print(f"ERROR {e.code}: {link}")
    except Exception as e:
        print(f"FAIL: {link} - {str(e)}")
