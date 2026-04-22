const fs = require('fs');
const file = 'public/esper/js/m3aphwwzw.clbc3scn.mjs';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/h6FpGpKZO:([\'\"\`])\/popular\1/g, 'h6FpGpKZO:$1/esper/popular$1');
fs.writeFileSync(file, content);
console.log('Done');
