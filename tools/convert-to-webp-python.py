import os
from PIL import Image

input_dir = 'assets/img'
output_dir = 'assets/img-webp'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

count = 0
for filename in os.listdir(input_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        filepath = os.path.join(input_dir, filename)
        name, _ = os.path.splitext(filename)
        out_path = os.path.join(output_dir, f"{name}.webp")
        
        if os.path.exists(out_path):
            continue
            
        try:
            with Image.open(filepath) as img:
                img.save(out_path, 'WEBP', quality=85, method=6)
                count += 1
                print(f"Converted {filename}")
        except Exception as e:
            print(f"Failed {filename}: {e}")

print(f"Done. Converted {count} images.")
