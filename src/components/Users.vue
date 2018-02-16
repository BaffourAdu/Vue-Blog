<template>
  <div class="users">
      <MainNav/>
      <h1>users</h1>
      <form v-on:submit="addUser">
          <input type="text" placeholder="Enter Name" v-model="newUser.name">
          <br>
          <input type="email" v-model="newUser.email" placeholder="Enter your Email">
          <br>
          <input type="submit" value="Submit">
      </form>
      <ul>
          <li v-for="user in users">{{user.name}} : {{user.email}}</li>
      </ul>
  </div>
</template> 

 
<script>
import MainNav from './MainNav'

export default {
  name:'users',
  data () {
     return{
         newUser: {},
         users: []
     }
  },
  methods: {
      addUser: function (e) {
          //console.log('add');
          this.users.push({
              name: this.newUser.name,
              email:this.newUser.email,
              cotacted:false
          });
          e.preventDefault();
      }
      
  },
    components: {
    MainNav
  },
  created: function () {
          this.$http.get("https://jsonplaceholder.typicode.com/users")
            .then(function(response){
                //console.log(response.data);
                this.users = response.data
            });
      } 
}
</script>

<style scoped>
    li {
        list-style-type: none;
    }
</style>
