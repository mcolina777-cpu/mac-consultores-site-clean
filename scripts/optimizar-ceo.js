const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgPath = path.join(process.cwd(), 'public', 'assets', 'mac', 'ceo.png');
const webpPath = path.join(process.cwd(), 'public', 'assets', 'mac', 'ceo.webp');

async function optimizeCEO() {
  if (fs.existsSync(imgPath)) {
    const buffer = await fs.promises.readFile(imgPath);
    
    // Optimize PNG
    // Using palette: true (quantization) significantly reduces PNG size for photos
    await sharp(buffer)
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toFile(imgPath);
    
    // Generate WebP
    await sharp(buffer)
      .webp({ quality: 75 })
      .toFile(webpPath);
    
    console.log(`Optimized ceo.png and generated ceo.webp`);
  } else {
    console.log(`File not found: ${imgPath}`);
  }
}

optimizeCEO().catch(console.error);
