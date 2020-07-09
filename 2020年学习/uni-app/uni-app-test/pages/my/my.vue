<template>
	<view>
		我的
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log('我的');
		},
		// 点击 tab 时触发
		onTabItemTap(e) {
			console.log('我的被点击了', e)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
