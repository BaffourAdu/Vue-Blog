<template>
  <div id="app">
   <!-- <Test msg="Hello Over Foober"/>-->
    <users/>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
  </div>
</template>


<script>
import Test from './components/Test'
import Users from './components/Users'

export default {
  name: 'App',
  components: {
    Test, Users
  }
}
</script>

<!--
<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
-->

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
