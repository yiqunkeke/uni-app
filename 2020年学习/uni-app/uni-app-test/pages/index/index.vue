<template>
	<!-- 
	  1. 模板语法 
	  2. 数据绑定
	  3. 条件判断
	  4. 列表渲染
	  5. 基础组件的使用
	  6. 自定义组件的使用
	  7. 基础API的用法 
	  8. 条件编译
	  9. 页面布局
	 -->
	<view>
		<!-- 使用 v-bind 指令，表示class是一个动态值 ，v-on指令绑定事件 -->
		
		<!-- 数据绑定: {{}} -->
		<view @click="open">{{title}}</view>
		
		<!-- 条件判断：v-if 指令-用于条件性的渲染内容 -->
		<view v-if="show">
			我是动态内容
		</view>
		
		<!-- 列表渲染： 通过数组来渲染列表 v-for指令 -->
		<!-- item：被迭代的数组元素的别名 -->
		<!-- index: 下标别名 -->
		<view v-for="(item, index) in arr">
			{{index + 1}}.{{item}}
		</view>
		<!-- 对象渲染 -->
		<view v-for="(value, key) in obj">
			{{key}}:{{value}}
		</view>
		
		<!-- 基础组件的使用 -->
		<view>
			<!-- view 组件是块元素，相当于div标签 -->
			<!-- text 组件是行内元素，相当于 span标签 -->
			<!-- 更多基础组件，见 uni-app官网 -->
			<view hover-class="active">view</view>
			<text>uni-app</text>
			<text>vue</text>
			<text>html</text>
			<!-- scroll-view组件 -->
			<scroll-view scroll-y="true" class="height" @scroll="scroll">
				<view v-for="item in 100"> {{item}}</view>
			</scroll-view>
			<!-- 表单组件 button，input 等等 -->
			<button type="default" @click="input">点击</button>
			<input type="text" :value="value" />
			<!-- 作业：自己把官网上的组件动手实验 -->
		</view>
		
		<!-- 自定义组件 -->
		<view>
			<btn color='blue' @change="change">
				我是一个按钮
			</btn>
		</view>
		
		<!-- 条件编译：模板中 -->
		<view>
			<!-- 在 H5或者app中显示 -->
			<!-- 在某一个平台中不显示，则使用 ifndef 进行排除 -->
			<!-- #ifdef H5 || APP-PLUS -->
			<btn color='blue' @change="change">
				我是一个按钮
			</btn>
			<!-- #endif -->

		</view>
		
		<!-- 引入外部样式 -->
		<view class="border">
			borderClass
		</view>
		
	</view>
	
 </template>

<script>
	import btn from '@/components/btn/btn.vue'
	export default {
		components: {
			btn
		},
		// 初始化数据方法
		
		// 不建议？保留上次的变量值，不会被初始化
		// data: {},	
		data() {
			return {
				title: 'hello uni-app',
				className: 'active',
				show: true,
				arr: ['uni-app', 'vue', 'html'],
				obj: {
					name: 'LiMing',
					age: 18,
					type: 'eat'
				},
				value: 'hello input'
			}
		},
		// 页面生命周期
		// onLoad 页面加载时，会触发
		onLoad() {
			console.log('首页')
			setTimeout(() => {
				// 在微信小程序中，修改值：
				// this.setData({
				// 	title: '我是被修改的值'
				// })
				
				// 在 uni-app 中
				this.title = '我是被修改后的值'
			}, 2000)
			
			// 基础API的用法
			//  api,更多api查看uni-app官网 
			uni.getSystemInfo({
				success(){},
				fail() {},
				complete(res) {
					console.log(res);
				}
			})
			
			// js 中条件编译
			// #ifdef H5
			// #endif
		},
		// onLoad 监听页面初次渲染完成 
		onReady() {
			// 如果渲染快，会在页面进入动画完成前触发
			console.log('标签已经渲染完成')
		},
		// 监听页面显示
		onShow() {
			console.log('page onShow')
		},
		// 监听页面隐藏
		onHide() {
			console.log('page onHide')
		},
		// 监听页面卸载
		onUnload() {
			console.log('page onUnload')
		},
		// 点击 tab 时触发
		onTabItemTap(e) {
			console.log('首页被点击了', e)
		},
		methods: {
			open() {
				console.log('clicked!');
				this.title = '我被点击了';
				this.show = false;
			},
			scroll(e) {
				console.log(e);
			},
			input() {
				this.value = 'hello vue'
			},
			change(val) {
				console.log('我是页面的事件，我的颜色是', val)
			}
		}
	}
</script>

<style>
	.active {
		color: red;
	}
	.height {
		height: 200px;
		border: 1px solid red;
	}
	/* 没有 body，换成 page */
	/* body {} */
	
	/* 样式中条件编译 */
	/* #ifdef H5 */
    /* page {
		background-color: #007AFF;
	} */
	/* #endif */
</style>
