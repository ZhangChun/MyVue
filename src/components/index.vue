<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="detail">
    	<h2>欢迎使用Vue2.0</h2>
    </router-link>
    <p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p>
    <p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p>
    <p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p>
    <p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p><p>123456</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
