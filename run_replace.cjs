const fs = require('fs');
const path = require('path');
const file = 'public/esper/js/m3aphwwzw.clbc3scn.mjs';
let content = fs.readFileSync(file, 'utf8');

// Replace `/popular` with `/esper/popular` using backticks
const oldStr = 'h6FpGpKZO:`/popular`';
const newStr = 'h6FpGpKZO:`/esper/popular`';

if (content.includes(oldStr)) {
    content = content.split(oldStr).join(newStr);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully replaced in', file);
} else {
    console.log('String not found in', file);
}
