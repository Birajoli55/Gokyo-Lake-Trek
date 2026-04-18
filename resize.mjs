import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

const targets = [
  {
    file: 'Gokyo-Lake-1726987182.webp',
    width: 800, // Reduced from 1080
    quality: 75
  },
  {
    file: 'HimalayanPanorama.webp',
    width: 1200, // Reduced from higher res
    quality: 75
  },
  {
    file: 'logo.webp',
    width: 400, // Reduced from 1536
    quality: 80
  },
  {
    file: 'gokyo-lakes-and-mt-cholatse-adobe-stock-4058.webp',
    width: 1200, // Hero image size
    quality: 75
  },
  {
    file: 'day18.webp',
    width: 1000,
    quality: 75
  },
  {
    file: 'machhermo.webp',
    width: 1000,
    quality: 75
  }
];

async function processImages() {
  console.log('Cleaning up temporary files...');
  const existingFiles = fs.readdirSync(publicDir);
  for (const f of existingFiles) {
    if (f.startsWith('temp-') || f.endsWith('.tmp')) {
      try { fs.unlinkSync(path.join(publicDir, f)); } catch(e) {}
    }
  }

  console.log('Starting image resize and compression (Bypassing Locks)...');
  
  for (const task of targets) {
    const fullPath = path.join(publicDir, task.file);
    
    if (fs.existsSync(fullPath)) {
      try {
        console.log(`Processing ${task.file}...`);
        
        // Output to a brand new filename to bypass Vite's EBUSY lock on the original file
        const ext = path.extname(task.file);
        const base = path.basename(task.file, ext);
        const newFileName = `${base}-opt${ext}`;
        const newPath = path.join(publicDir, newFileName);
        
        await sharp(fullPath)
          .resize({ width: task.width, withoutEnlargement: true })
          .webp({ quality: task.quality })
          .toFile(newPath);
          
        console.log(`✓ Optimized: ${newFileName} (Resized to max ${task.width}px width)`);
        
        // Try to delete the old file. If Vite has it locked, just ignore it.
        try {
          fs.unlinkSync(fullPath);
        } catch (e) {
          // Ignore EBUSY
        }
        
        // Update all references in the source code to point to the new filename
        updateReferences(task.file, newFileName, srcDir);
        
      } catch (error) {
        console.error(`✗ Error processing ${task.file}:`, error);
      }
    } else {
      console.log(`- Skipped ${task.file} (Not found)`);
    }
  }
  
  console.log('Finished image optimization!');
}

function updateReferences(oldName, newName, dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateReferences(oldName, newName, fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes(oldName)) {
        content = content.replace(new RegExp(oldName, 'g'), newName);
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`  Updated reference in ${path.relative(__dirname, fullPath)}`);
      }
    }
  }
}

// Also update index.html just in case
updateReferences(targets[2].file, `${path.basename(targets[2].file, '.webp')}-opt.webp`, __dirname);

processImages();
