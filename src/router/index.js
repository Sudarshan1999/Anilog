import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UploadImage from '@/components/UploadImage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/uploadImage',
      name: 'uploadImage',
      component: UploadImage
    }
  ]
})
