const http = require('http');
const https= require('https');
const cheerio = require('cheerio');

const filterData = data =>{
  // console.log('filterData',data);
  const $ = cheerio.load(data);
  $('.gl-item .item-desc').each((index,el)=>{
    console.log(index,$(el).text());
  })
  /** 拿回来的数据是一个html 最好的方式就是转化为虚拟的dom来操作 插件 cheerio npm */
}
const server = http.createServer((req,res)=>{
  let data = '';
  https.get('https://lists.meizu.com',result=>{
    result.on('data',chunk=>{
      data+=chunk;
    });
    result.on('end',()=>{
      filterData(data);
    });

  });
});
server.listen('8080',()=>{
  console.log('http://localhost:8080/');
});
// 这个就是简单的爬虫