<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x="true">
			<view class="tab-scroll__box">
				<view 
					v-for="(item, index) in list" 
					:key="index" 
					class="tab-scroll__item" 
					:class="{active: activeIndex === index}"
					@click="clickTab(item, index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		methods: {
			clickTab(item, index) {
				// console.log(item, index);
				this.activeIndex = index;
				this.$emit('tab', {
					data: item,
					index: index
				});
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		width: 100%;
		border:1px solid #f5f5f5;
		background: #fff;
		box-sizing: border-box;
		.tab-scroll {
			 .tab-scroll__box {
			 	display: flex;
			 	align-items: center;
			 	height: 45px;
			 	flex-wrap: nowrap; //scroll-view元素添加此行代码，意思是规定段落中的文本不进行换行
			 	.tab-scroll__item {
			 		flex-shrink: 0; // 不让元素被挤压
					padding: 0 10px;
					color: #333;
					font-size: 14px;
					&.active {
						color: $mk-base-color;
					}
			 	}
			 }
		}
	}
</style>
