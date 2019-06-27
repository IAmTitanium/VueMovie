import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import VueTypedJs from 'vue-typed-js';
import logoVue from './components/banner';
import Movie from './components/movie';
import comingVue from './components/coming';
import movieList from "@/components/movielist";
import Top from './components/top';

Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(VueTypedJs)

let router = new VueRouter({
    routes:[
      {
        path:'/',
        component: logoVue,
      },
      {
        path:'/movie',
        component:Movie,
        children:[
          {
            path:'coming',
            component:comingVue,
          },
          {
            path:'movieList',
            component:movieList
          },
          {
            path:'top',
            component: Top
          }
        ]
      },
    ]
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
