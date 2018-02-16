// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Blogs from './components/Blogs'
import Admin from './components/Admin'
import AddPost from './components/AddPost'
import ViewPost from './components/ViewPost'
import AllPosts from './components/AllPosts'




Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)


const router = new VueRouter ({
  mode:'history',
  base: __dirname,
  routes:[
    {path:'/', component: Blogs},
    {path: '/admin', component: Admin},
    {path: '/admin/posts', component: AllPosts},
    {path: '/new/post', component: AddPost},
    {path: '/post/:id', component: ViewPost}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template:`
  <div id="app">
     <router-view></router-view>
  </div>`
}).$mount('#app')
