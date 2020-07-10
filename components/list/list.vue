<template>
	<view class="list">
		<swiper class="list-swiper" :current="activeIndex" @change="change">
			<swiper-item v-for="(item, index) in tab" :key="index">
				<slot></slot>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			tab: {
				type: Array,
				default() {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			change(e) {
				const { current } = e.detail;
				// console.log(this.tab[current].name);
				this.$emit('change', current);
			}
		}
	}
</script>

<style lang="scss">
	.list {
		height: 100%;
		.list-swiper {
			height: 100%;
		}
	}
</style>
