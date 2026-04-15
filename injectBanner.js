const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    let filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      filelist = walkSync(filePath, filelist);
    } else {
      if (filePath.endsWith('.tsx') && !filePath.includes('Contact.tsx')) {
        filelist.push(filePath);
      }
    }
  });
  return filelist;
}

const files = walkSync(path.join(process.cwd(), 'src', 'pages'));

for(let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('CustomTripBanner')) continue;
  
  let depth = file.split('src')[1].split(path.sep).length - 2;
  let importPath = depth === 1 ? '../components/CustomTripBanner' : '../../components/CustomTripBanner';
  if(depth === 3) importPath = '../../../components/CustomTripBanner';
  
  content = content.replace(/(import .* from .*;)/, "$1\nimport CustomTripBanner from '" + importPath + "';");
  
  if (content.includes('</main>')) {
    content = content.replace('</main>', '  <CustomTripBanner />\n    </main>');
  } else if (content.includes('</Section>\n    </div>')) {
    content = content.replace('</Section>\n    </div>', '</Section>\n      <CustomTripBanner />\n    </div>');
  } else if (content.includes('</Section>\n  );')) {
    content = content.replace('</Section>\n  );', '</Section>\n      <CustomTripBanner />\n  );');
  } else {
      content = content.replace(/<\/div>\n\s*\);\n\}/, '  <CustomTripBanner />\n    </div>\n  );\n}');
  }
  
  fs.writeFileSync(file, content);
  console.log('Updated', file);
}
