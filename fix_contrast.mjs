import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'src');

function fixContrast(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixContrast(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      // Fix 1: Subheadings text contrast (Very robust)
      if (content.includes('text-brand-600')) {
        // Change any text-brand-600 to text-brand-800 to ensure high contrast
        content = content.replace(/\btext-brand-600\b/g, 'text-brand-800');
        changed = true;
      }

      // Fix 2: Button hover contrast (Very robust)
      if (content.includes('hover:bg-brand-500')) {
        content = content.replace(/\bhover:bg-brand-500\b/g, 'hover:bg-brand-800');
        changed = true;
      }

      // Fix 3: Navbar Close Button aria-label
      if (fullPath.includes('Navbar.tsx') && content.includes('<X className="w-5 h-5" />')) {
         content = content.replace(/<button([^>]*?)onClick=\{\(\) => setIsOpen\(false\)\}([^>]*?)>\s*<X className="w-5 h-5" \/>\s*<\/button>/g, 
         '<button$1onClick={() => setIsOpen(false)}$2 aria-label="Close menu">\n                <X className="w-5 h-5" />\n              </button>');
         changed = true;
      }

      // Fix 4: Footer aria labels vs discernible names
      if (fullPath.includes('Footer.tsx') && content.includes('bg-stone-900')) {
         content = content.replace(/<a href="#" aria-label="(.*?)" className="(.*?)">\s*<([a-zA-Z]+)(.*?)\/>\s*<\/a>/g, 
         '<a href="#" aria-label="$1" className="$2">\n              <$3$4/>\n              <span className="sr-only">$1</span>\n            </a>');
         changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf-8');
      }
    }
  }
}

console.log('Fixing contrast and accessibility issues...');
fixContrast(srcDir);
console.log('Finished fixing contrast and accessibility!');
