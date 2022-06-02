<template>
  <nav>
    <!--對應到router裡的路徑-->
    <router-link to="/"><img src="./assets/dog.jpg" height="100" width="100" v-if="t"></router-link>
    <router-link to="/about" v-if="t" @click="hi">About|</router-link>
    <router-link to="/echarts/pie" v-if="t">Test|</router-link>
    <router-link to="/uploadimage" v-if="t">Upload</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default{
  data(){
    return{
      t: true
    }
  },
  methods:{
    hi(){
      this.t = false
    }
  }
}
</script>
