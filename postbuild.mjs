import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const htmlPath = path.join(distDir, 'index.html');
const assetsDir = path.join(distDir, 'assets');

function inlineCriticalCss() {
  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found in dist. Make sure to run build first.');
    return;
  }

  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const files = fs.readdirSync(assetsDir);

  // Find the main CSS file (index-*.css)
  const mainCssFile = files.find(f => f.startsWith('index-') && f.endsWith('.css'));

  if (mainCssFile) {
    const cssPath = path.join(assetsDir, mainCssFile);
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    // Remove the link tag that requests this CSS file
    const linkRegex = new RegExp(`<link rel="stylesheet" crossorigin href="/assets/${mainCssFile}">`, 'g');
    htmlContent = htmlContent.replace(linkRegex, '');

    // Also try to match without crossorigin just in case
    const linkRegexAlt = new RegExp(`<link rel="stylesheet" href="/assets/${mainCssFile}">`, 'g');
    htmlContent = htmlContent.replace(linkRegexAlt, '');

    // Inject the CSS directly into the <head>
    const styleTag = `<style>\n${cssContent}\n</style>\n</head>`;
    htmlContent = htmlContent.replace('</head>', styleTag);

    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    
    // Optionally delete the injected CSS file to save space, but keeping it is safer if other pages need it
    // fs.unlinkSync(cssPath);
    
    console.log(`✓ Successfully inlined ${mainCssFile} into index.html to eliminate render-blocking network requests.`);
  } else {
    console.log('Main CSS file not found in assets.');
  }
}

inlineCriticalCss();
