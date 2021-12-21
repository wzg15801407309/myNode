const logger = require('../utils/log');

const querystring = require('querystring');
const query = 'is=2&name=tongy&from=北京';
const query2 ='id:2/name:tongy/from:北京';
const queryEscape ='is%3D2%26name%3Dtongy%26from%3D%E5%8C%97%E4%BA%AC';
const queryObj = { is: '2', name: 'tongy', from: '北京' };
// logger.debug(querystring.parse(query));
// logger.debug(querystring.escape(query));
// logger.debug(querystring.unescape(query));
// logger.debug(querystring.stringify(queryObj,':','/'));
// logger.debug(querystring.parse(query2,'/',':'));
const newQuery = querystring.stringify(queryObj,null,null,{
  encodeURIComponent(string){
    return querystring.unescape(string);
  }
});
logger.debug(newQuery);