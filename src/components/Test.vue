<template>
  <div class="test">
     <MainNav/>

      <h1>{{ title }}</h1>
      <span id="slogan">{{ slogan }}</span>

      <p v-if="showFirstName">{{ user.first_name }}</p>
      <p v-text="user.last_name"></p>

      <hr>

      <ul>
          <li v-for="item in items">{{item.title}}</li>
      </ul>
      <hr>

      <input type="text" v-model="title">
        <br>
      <button v-on:click="greet('Hello World!')">Say Greeting</button>
        <br>
     <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr>
        <input type="text" placeholder="First Name" v-model="user.first_name">
        <input type="text" placeholder="Last Name" v-model="user.last_name">
        <hr>
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
  </div>
</template>


<script>
import MainNav from './MainNav'

export default {
  name:'Test',
  props: {
      msg: {
          type:String,
          default:'Foobar'
      }
  },
  data () {
     return{
          title: "Welcome To My Blog",
          slogan:"Building The future with Technology",
          user:{
              first_name:'Baffour',
              last_name: 'Adu-Boampong'
          },
          showFirstName:false,
          items: [
              {title:"item One"},
              {title:"Item Two"},
              {title:"Item Three"}
          ]
     }
  },
    components: {
    MainNav
  },
  methods: {
      greet: function (greeting) {
          alert(greeting);
      },
      pressKey:function (e) {
          console.log(e.target.value);
      },
      enterHit : function () {
          console.log('You hit Enter');
      }
  },
  computed: {
      fullName: function () {
          return this.user.first_name + ' ' + this.user.last_name;
      }
  }
}
</script>

<style scoped>
h1{
    font-weight: bold;
}
#slogan{
    font-style: italic;
}
li {
    list-style-type: none;
}
</style>
