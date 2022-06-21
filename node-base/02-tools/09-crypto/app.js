// crypto是加密的东西

const crypto = require('crypto');

const password = '123abc';
// md5 加密方式  hex是16进制的意思
const hash = crypto.createHash('sha1').update(password).digest('hex');
const hash1 = crypto.createHash('md5').update(password).digest('hex');

console.log(hash);
console.log(hash1);