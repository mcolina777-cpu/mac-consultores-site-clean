const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(process.cwd(), 'public', 'assets', 'img');
const webpDir = path.join(process.cwd(), 'public', 'assets', 'img-webp');

const images = [
  { file: 'OFICINA_1.jpg', webp: 'OFICINA_1.webp' },
  { file: 'OFICINA_2.jpg', webp: 'OFICINA_2.webp' },
  { file: 'OFICINA_3.jpg', webp: 'OFICINA_3.webp' }
];

async function optimizeNews() {
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true });
  }

  for (const img of images) {
    const jpegPath = path.join(imgDir, img.file);
    const webpPath = path.join(webpDir, img.webp);

    if (fs.existsSync(jpegPath)) {
      const buffer = await fs.promises.readFile(jpegPath);
      
      // Optimize JPEG (quality ~65)
      await sharp(buffer)
        .jpeg({ quality: 65, mozjpeg: true })
        .toFile(jpegPath);
      
      // Generate WebP (quality ~70)
      await sharp(buffer)
        .webp({ quality: 70 })
        .toFile(webpPath);
      
      console.log(`Optimized ${img.file} and generated ${img.webp}`);
    } else {
      console.log(`File not found: ${jpegPath}`);
    }
  }
}

optimizeNews().catch(console.error);
