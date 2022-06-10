const fs = require('fs');
// 文件夹的操作
/**创建文件夹 */
// fs.mkdir('logs',err=>{
//   if(err) throw err;
//   console.log("创建文件成功");
// });
/**文件夹名字修改 */
// fs.rename('./logs','log',()=>{
//   console.log("文件名字修改成功！");
// })
/**删除文件夹 */
// fs.rmdir('./log',()=>{
//   console.log('文件夹删除成功');
// });
/**文件夹的读取*/
// fs.readdir("./logs",(err,result)=>{
//   console.log(result)
// });

// 文件的操作
/**文件的创建 */
// fs.writeFile('./logs/log.log','hello\nworld',err=>{
//   console.log("done.");
// });
// /**文件内容添加*/
// fs.appendFile('./logs/log.log','在文件的最后添加内容',err=>{
//   console.log('在文件的最后添加内容失败',err);
// });
/**文件读 */
// fs.readFile('./logs/log.log',(err,content)=>{
//   if(err) throw err;
//   console.log(content);// utf-8也是为了解决乱码的问题
// });
// fs.readFile('./logs/log.log','utf-8',(err,content)=>{
//   if(err) throw err;
//   console.log(content);// utf-8也是为了解决乱码的问题
// });
// fs.readFile('./logs/log.log',(err,content)=>{
//   if(err) throw err;
//   console.log(content.toString()); // 解决乱码的问题
// });
/**文件的删除 */
// fs.unlink('./logs/log.log',err=>{
//   console.log('文件删除了！！！');
// });

// 同步 读取
const url = './logs/log.log'
const content = fs.readFileSync(url);
console.log('同步读取=',content.toString());

// 异步  操作 参考node的fs的文档