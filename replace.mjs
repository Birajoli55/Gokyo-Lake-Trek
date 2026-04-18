import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.ts', '.tsx', '.js', '.jsx', '.css'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Replace .png, .jpg, .jpeg with .webp globally, ignore case
        const regex = /\.png|\.jpg|\.jpeg/gi;
        
        if (regex.test(content)) {
          content = content.replace(regex, '.webp');
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated references in ${file}`);
        }
      }
    }
  }
}

async function run() {
  console.log('Starting text replacement in src...');
  await processDirectory(srcDir);
  console.log('Text replacement complete!');
}

run();
