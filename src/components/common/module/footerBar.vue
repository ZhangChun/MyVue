<template>
	<div class="footer">
		<ul>
			<router-link tag="li" active-class='active' to="/index">
				<i class="iconfont icon-home_uncheck"></i>
				<p>首页</p>
			</router-link>
			<router-link tag="li" active-class='active' to="/recommend">
				<i class="iconfont icon-recommend_uncheck"></i>
				<p>推荐</p>
			</router-link>
			<router-link tag="li" active-class='active' to="/search">
				<i class="iconfont icon-search_uncheck1"></i>
				<p>搜索</p>
			</router-link>
			<router-link tag="li" active-class='active' to="/user">
				<i class="iconfont icon-Personalcenter_unch"></i>
				<p>个人中心</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'FooterBar',
		data() {
			return {
				msg: ''
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	ul {
		background-color: #fff;
		list-style-type: none;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		height: 45px;
		margin: 0;
		padding: 0;
		border-top: 1px solid #e6e6e6;
		li {
			flex: 1;
			color: #333333;
			font-size: 12px;
			p {
				font-size: 12px;
			}
		}
	}
	
	li.active {
		i.iconfont,
		p {
			color: #e02c17;
		}
	}
	
	.footer {
		position: fixed;
		width: 100%;
		bottom: 0;
	}
</style>