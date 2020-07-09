<template>
	<view class="btn-box" :style="{color: color}" @click="onClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: '#000000'
			}
		},
		data() {
			return {
				
			};
		},
		// 在实例初始化之后，数据观测（data observer）和 event/watcher 事件配置之前被调用
		beforeCreate() {},
		// 实例建立完成之后立即调用，挂载阶段还没开始
		created() {},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		beforeDestroy(){},
		destroyed() {},
		methods: {
			onClick() {
				console.log('我被点击了')
				this.$emit('change', this.color)
			}
		}
	}
</script>

<style>
	.btn-box {
		width: 100px;
		height: 20px;
		border: 1px solid #007AFF;
		text-align: center;
	}

</style>
