import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',   //在路由内加入路由的name,名字可以自定义
      path: '/',    
      components:{
        main:PostList  //跳转到PostList组件
      }
  },
   {
      name:'post_content',   //在路由内加入路由的name,名字可以自定义
      path: '/topic/:id&author=:name',    //传递了参数id
      components:{
        main:Article,  //跳转到Article 组件
        slidebar:SlideBar
      }
   },
   {
      name:'user_info',   //在路由内加入路由的name,名字可以自定义
      path: '/userinfo/:name',    //传递了参数name
      components:{
        main:UserInfo   // //跳转到PostList组件
      }
   }
  ]
})