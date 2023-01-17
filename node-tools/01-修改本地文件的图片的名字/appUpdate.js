/**
 * 业务逻辑：
 * 1、读取pic下的所有的文件
 * 2、计算出名称的长度
 * 3、
 */



const fs = require('fs');
const { clearScreenDown } = require('readline');
let loadPath = '/Users/zhuqin.wei/Documents/pic';
let tempStr = '0000000000';//用来填数字前的零
let picArray = [];
// 获取所有的图片
fs.readdir(loadPath, (err, files) => {
  files.forEach(file => {
    if (file != '.DS_Store') {
      picArray.push(file);
    }
  });
  setPicnName(picArray);

  // for (let i = 0; i < leng; i++) {
  //   let currVal = files[i] ;
  //   let typeStr = "."+files[i].split('.')[1];
  //   console.log(currVal);

  //   // if(currVal != '.DS_Store'){
  //   //   let zerNum = nameLen + 1 - (leng-i).toString().length;
  //   //   let currName = tempStr.substring(0,zerNum)+(leng-i)+typeStr;
  //   //   console.log(currName,files.indexOf(currName));
  //   // }
  //   // if(currVal != '.DS_Store'){
  //   //   let zerNum = nameLen + 1 - i.toString().length;
  //   //   let currName = tempStr.substring(0,zerNum)+i+typeStr;
  //   //   if(currName !== currVal){
  //   //     fs.rename(loadPath+'/'+currVal,loadPath+'/'+currName,err=>{
  //   //       if(!err){
  //   //         console.log('修改成功！');
  //   //       }
  //   //     });
  //   //     console.log(currName,files[i],currName == files[i]);
  //   //   }

  //   // }
  // }
});

const setPicnName = (arr) => {
  const leng = arr.length;
  // 图片名称的长度
  const nameLen = arr.length.toString().length + 1;
  console.log('name的长度：', nameLen, leng);
  let left = 1;
  let newNameList = [];
  const arrMap = new Map();

  while (left <= leng) {
    let zerNum = nameLen - left.toString().length;
    let newName = tempStr.substring(0, zerNum) + left.toString();
    newNameList.push(newName);
    let picNameArr = arr[left - 1].split('.');
    arrMap.set(picNameArr[0], arr[left - 1]);
    left++;
  }
  // 找到需要修改的id
  const needToModifyID = [];
  newNameList.forEach(ele => {
    if (!arrMap.has(ele)) {
      // 没有的ID
      needToModifyID.push(ele);
    }
  });
  // 找到需要修改的图片
  const needToModifyPic = [];
  for (const [key, value] of arrMap) {
    if (newNameList.indexOf(key) < 0) {
      needToModifyPic.push(value);
    }
  }
  // 修改图片名称
  needToModifyID.forEach((picid, index) => {
    let picType = needToModifyPic[index].split('.')[1];
    let newpath = loadPath + '/' + picid + '.' + picType;
    fs.rename(loadPath + '/' + needToModifyPic[index], newpath, err => {
      if (!err) {
        console.log('修改成功！');
      }
    });
  });
}