<template>
	<view class="home">
		<!-- 自定义导航栏  -->
		<navbar></navbar>
		<tab :list="tabList" @tab="tab"></tab>
		<list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="column"></list-card>
			<list-card mode="image"></list-card>
		</list-scroll>

	</view>
</template>

<script>
	/*  知识点1： easycom ---https://uniapp.dcloud.io/collocation/pages?id=easycom
		1. 这里不用import引入，也不需要在components内注册navbar组件。template里就可以直接用
		2. easyCom--可以不用引用、注册，直接在页面中使用组件
		3. 传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。
		4. easycom将其精简为一步。 只要组件安装在项目的components目录下，并符合components/组件名称/组件名称.vue目录结构。
		5. easycom是自动开启的，不需要手动开启 
		6. 不管components目录下安装了多少组件，easycom打包后会自动剔除没有使用的组件，对组件库的使用尤为友好
	*/
	export default {
		data() {
			return {
				title: 'Hello',
				tabList: []
			}
		},
		onLoad() {
			this.getLabel();
		},
		methods: {
			getLabel() {
				// 获取云函数--uniCloud.callFunction()
				// uniCloud.callFunction({
				// 	name: 'get_label'
				// }).then(res => {
				// 	// console.log(res);
				// 	const {result} = res;
				// 	this.tabList = result.data;
				// 	// console.log(this.tabList);
				// })

				// 封装数据请求:
				// 1. 原因:在项目中,请求云函数或者接口非常多,如果每个数据请求都需要写上面一大串代码,非常不利于项目维护
				// 所以需要对云函数或者网络请求做封装
				// 2.并且,我们通常只需要关注成功的返回,则需要把失败的返回交给一个库统一去处理
				// 我们需要一个统一的地方去维护所有的云函数,包括传参
				// 最终可以通过 this.$api.get_label({}).then(res=>{})这种方式来请求数据-----直观

				// console.log(this.$api);
				// 获取label
				this.$api.get_label().then(res => {
					// console.log(res);
					const {
						data
					} = res;
					this.tabList = data;
				})
				// 获取list
				this.$api.get_list().then(res => {
					// console.log(res);
				});
			},
			tab({
				data,
				index
			}) {
				console.log({
					data,
					index
				});
			}
		}
	}
</script>

<style lang="scss">
	/*
		flex:  flex-grow flex-shrink flex-basis
		默认：     0           1         auto
		
		flex: none === 0  0  auto  不放大，不缩小
		flex: auto === 1  1  auto  放大，缩小
		flex: 1 === flex-grow: 1
	*/
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
