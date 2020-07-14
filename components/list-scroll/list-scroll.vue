<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadmore">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			loadmore() {
				// console.log('触发上拉')
				this.$emit('loadmore');
			}
		}
	}
</script>

<style lang="scss">
	.scroll {
		display: flex;
		flex-direction: column;
		
		height: 100%;
		// border: 1px solid #4CD964;
		.list-scroll {
			display: flex;
			flex-direction: column;
			
			height: 100%;
		}
	}
</style>
