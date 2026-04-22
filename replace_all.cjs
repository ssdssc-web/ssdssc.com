const fs = require('fs');
const path = require('path');
const dir = 'public/esper/js';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.mjs')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('/popular')) {
       let newContent = content.replace(/h6FpGpKZO:([\'\"\`])\/popular\1/g, 'h6FpGpKZO:$1/esper/popular$1');
       if (newContent !== content) {
          fs.writeFileSync(filePath, newContent);
          console.log('Replaced in', file);
       }
    }
  }
}
console.log('All done');
