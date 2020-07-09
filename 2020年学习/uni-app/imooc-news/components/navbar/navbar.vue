<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏： 微信小程序中存在状态栏-->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容-->
			<view class="navbar-content" :style="{height:navBarHeight + 'px', width: windowWidth + 'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<text class="iconfont icon-search"></text>
					</view>
					<view class="navbar-search_text">uni-app、vue</view>
				</view>
			</view>
		</view>
		<!-- 由于导航栏固定，所以添加一个元素，设置其高度是顶部固定元素的高度，否则会覆盖下面的内容 -->
		<view :style="{height:statusBarHeight + navBarHeight + 'px'}"></view>
 </view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375
			}
		},
		async created() {
			// 获取手机系统信息-https://uniapp.dcloud.io/api/system/info?id=getsysteminfo
			await uni.getSystemInfo({
			    success: res => {
					this.statusBarHeight = res.statusBarHeight;  // 设置状态栏高度
					this.windowWidth = res.windowWidth; // 设置导航栏内容宽度
			    }
			});

			// 获取胶囊的位置-https://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = await uni.getMenuButtonBoundingClientRect();
			this.windowWidth = menuButtonInfo.left;
			this.navBarHeight = (menuButtonInfo.bottom - this.statusBarHeight) + (menuButtonInfo.top - this.statusBarHeight);  // (胶囊底部高度 - 状态栏高度) + (胶囊顶部高度-状态栏高度)
			// #endif
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';
	.navbar {
		.navbar-fixed {
			width: 100%;
			background-color: $mk-base-color;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 45px;
				padding: 0 15px;
				box-sizing: border-box;
				.navbar-search {
					width: 100%;
					display: flex;
					align-items: center;
					padding: 0 10px;
					height: 30px;
					background: #fff;
					border-radius: 30px;
					.navbar-search_icon {
						// width: 10px;
						// height: 10px;
						// border: 1px solid red;
						margin-right: 10px;
						color: #999;
					}
					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
