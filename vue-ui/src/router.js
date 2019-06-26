import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BABEL_ENV,
  linkActiveClass:'active',
  routes: [
      {
      path: '/',
      name: 'login',
      component: Login
     },
     {
       path:'/home',
       name:'home',
       component:Home,
       children:[
         {
           path:'list',
           name:'list',
           component:()=> import(/* webpackChunkName: "list" */ './views/List.vue')
         },
         {
          path:'user',
          name:'user',
           // which is lazy-loaded when the route is visited.
          component:()=> import(/* webpackChunkName: "User" */ './views/User.vue')
        }
       ]
     },
     {
       path:'/add',
       name:'add',
       component:Add
     }
  ]
})
