const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(process.cwd(), 'public', 'assets', 'img');
const webpDir = path.join(process.cwd(), 'public', 'assets', 'img-webp');

const images = [
  { file: 'OFICINA_1_1.jpeg', webp: 'OFICINA_1_1.webp' },
  { file: 'OFICINA-4-SIN-ICONO.jpeg', webp: 'OFICINA-4-SIN-ICONO.webp' }
];

async function optimizeImages() {
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true });
  }

  for (const img of images) {
    const jpegPath = path.join(imgDir, img.file);
    const webpPath = path.join(webpDir, img.webp);

    if (fs.existsSync(jpegPath)) {
      const buffer = await fs.promises.readFile(jpegPath);
      
      // Optimize JPEG
      await sharp(buffer)
        .jpeg({ quality: 60, mozjpeg: true })
        .toFile(jpegPath);
      
      // Generate WebP
      await sharp(buffer)
        .webp({ quality: 65 })
        .toFile(webpPath);
      
      console.log(`Optimized ${img.file} and generated ${img.webp}`);
    } else {
      console.log(`File not found: ${jpegPath}`);
    }
  }
}

optimizeImages().catch(console.error);
