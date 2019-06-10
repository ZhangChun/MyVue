<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <toTop />
    <FooterBar v-if="isShows" />
  </div>
</template>

<script>
	import FooterBar from '@/components/common/module/footerBar';
	import toTop from '@/components/common/module/toTop';
	export default {
	  name: 'App',
	  components:{
	  	FooterBar,
	  	toTop
	  },
	  data(){
	  	return{
	  		isShows:true
	  	}
	  },
		mounted() {
			console.log("$route", this.$route)
		},
		watch: {
			$route(to, from) {
				console.log("to", to);
				if (
					to.name == 'index' ||
					to.name == 'user' ||
					to.name == 'recommend' ||
					to.name == 'search'
				) {
//					this.$store.dispatch('showFooter')
						this.isShows = true;
				} else {
						this.isShows = false;
//					this.$store.dispatch('hideFooter')
				}
			}
		}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
