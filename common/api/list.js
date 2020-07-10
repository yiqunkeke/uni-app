// 列表模块api

// 获取label
// export const get_label = (data) => {
// 	// 若希望使用 promise 的方式调用这个方法，则需要返回一个promise
// 	return new Promise((resolve, reject) => {
// 		uniCloud.callFunction({
// 			name: 'get_label',
// 			data
// 		}).then(res => {		
// 			if(res.result.code === 200) {
// 				resolve(res.result)
// 			} else {
// 				reject(res.result)
// 			}
// 		}).catch(err=>{
// 			reject(err)
// 		})
// 	})
// }

// 获取文章
// export const get_list = () => {
// 	return new Promise((resolve, reject) => {
// 		resolve({
// 			data: '请求成功'
// 		})
// 	})
// }

// 来看一下上面两段代码，可以看到，每次请求中依然需要写return new Promise 这样的代码----麻烦 
// 所以我们可以把 return new Promise(...)统一处理，因为每个函数中的这段return new Promise(...)都是一样的
// 所以我们新建一个 http.js或者request.js 来封装我们的promise网络请求

import $http from '../../utils/http.js';

export const get_label = (data) => {
	return $http({
		url: 'get_label',
		data
	})
}

export const get_list = (data) => {
	return $http({
		url: 'get_list',
		data
	})
}

// 再来理一下，如果在当前list.js中增加一个api接口，同时需要在 index.js入口中 import 和 export 处也维护才行。---麻烦 
// 所以我们需要index.js 中能够批量导出
