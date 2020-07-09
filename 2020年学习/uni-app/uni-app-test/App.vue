<script>
	// 应用生命周期：定义在 App.vue中
	// 页面生命周期
	// 组件生命周期
	export default {
		// onLaunch 只能在 App.vue 中写，在其他组件中写 onLaunch 无效
		// 应用初始化完成触发，全局只触发一次
		onLaunch: function() {
			// 可以做一些用户登录、项目初始化
			console.log('App Launch')
		},
		// 当应用启动时，或者从后台进入前台时触发
		onShow: function() {
			console.log('App Show')
		},
		// 当应用从前台进入后台时触发
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
