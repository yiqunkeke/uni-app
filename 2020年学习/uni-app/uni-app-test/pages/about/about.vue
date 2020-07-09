<template>
	<view>
		关于
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log('关于');
		},
		// 点击 tab 时触发
		onTabItemTap(e) {
			console.log('关于被点击了', e)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
// 使用 scss 预编译，需要在工具-插件安装-中找到scss并导入hx中，就可以直接写 scss 语法了
// 否则会报错

</style>
