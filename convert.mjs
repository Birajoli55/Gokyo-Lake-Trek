import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const webpPath = fullPath.replace(new RegExp(`${ext}$`), '.webp');
        
        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          
          // Delete original file after successful conversion
          fs.unlinkSync(fullPath);
          console.log(`✓ Converted and removed original: ${file}`);
        } catch (err) {
          console.error(`✗ Error converting ${file}:`, err);
        }
      }
    }
  }
}

async function run() {
  console.log('Starting image conversion to WebP...');
  await processDirectory(publicDir);
  console.log('Conversion complete!');
}

run();
