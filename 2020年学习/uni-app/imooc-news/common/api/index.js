// import { get_label, get_list } from './list.js' // 列表模块 api
// // api
// export default {
// 	get_label,
// 	get_list
// }

// 再来理一下，如果在当前list.js中增加一个api接口，同时需要在 index.js入口中 import 和 export 处也维护才行。---麻烦 
// 所以我们需要index.js 中能够批量导出
// require.context函数--实现自动化导入模块，在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块
// require.context函数接受三个参数
// --directory {String} -读取文件的路径
// --useSubdirectories {Boolean} -是否遍历文件的子目录
// --regExp {RegExp} -匹配文件的正则

const requireApi = require.context(
	// api 目录的相对路径
	'.',
	false,
	/.js$/
)
let module = {}
// console.log(requireApi.keys());
requireApi.keys().forEach((key, index) => {
	if(key==='./index.js') return 
	// console.log(key)
	Object.assign(module,requireApi(key))
})
console.log(1,module)
export default module

// 这样之后，我们只需要在对应模块的js文件中，增加云函数就可以，而不需要在 index.js中再做额外的添加