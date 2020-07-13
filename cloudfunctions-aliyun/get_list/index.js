'use strict';
// 获取数据库的引用
const db = uniCloud.database();
exports.main = async (event, context) => {
  // const list = await db.collection('article')
  // .field({
	 //  // true 表示--只返回这个字段
	 //  // false 表示---不返回这个字段
	 //  content: false
  // })
  // .get();
  
  // 接收分类，通过分类去筛选数据
  const { name } = event;
  // 聚合：更精细化的去处理数据  求和，分组,指定返回哪些字段
  let matchObj = {};
  if(name !== '全部') {
	  matchObj = {
	  		  classify: name
	  }
  } 
  
  const list = await db.collection('article')
  .aggregate()
  .match(matchObj)
  .project({
  	  content: false
  })
  .end()
  
  //返回数据给客户端
  return {
	  code: 200,
	  msg: '数据请求成功',
	  data: list.data
  }
};
