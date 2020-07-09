'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('user')
  //event为客户端上传的参数
  //context包含了调用信息和运行状态，获取每次调用的上下文
  console.log('event : ' + event)
  //返回数据给客户端
  // return event
  
  let res = collection.add({
	  name: 'uni-app'
  })
  
  console.log(`数据插入:`)
  console.log(JSON.stringify(res))
  return {
	  code: 200,
	  msg: `${event.name}的年龄是${event.age}`
  }
};
