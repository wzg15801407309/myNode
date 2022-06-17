const fs = require('fs');
const zlib = require('zlib')

const gzip =zlib.createGzip(); // 文件压缩

//读
const readStream = fs.createReadStream('./log.txt');
// 写
const writeStream = fs.createWriteStream('./logs.txt');
readStream.pipe(writeStream); // 像复制一个文件一样


console.log("********");
const writeStreamGzip = fs.createWriteStream('./logs.gzip');
readStream.pipe(gzip).pipe(writeStreamGzip);;
