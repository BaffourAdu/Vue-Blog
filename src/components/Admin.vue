<template>
  <div class="adminDashboard">
    <div class="container">

        <MainNav/>

        <h1>Admin</h1>
    </div>
  </div>
</template>


<script>
import MainNav from './MainNav'

export default {
  name:'adminDashboard',
  data () {
      return {
      }
  },
    components: {
    MainNav
  }
}
</script>

<style scoped>

</style>
