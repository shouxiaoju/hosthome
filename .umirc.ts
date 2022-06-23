import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', 
      component: '@/layouts/index' ,
      routes: [
        { path: '/', component: '@/pages/home/index' },
        { path: '/home', component: '@/pages/home/index' ,},
        { path: '/order', component: '@/pages/order/index' },
        { path: '/user', component: '@/pages/user/index' },
        {path: '/searchlist', component: '@/pages/home/search/index'},
        {path: '/listplay', component: '@/pages/home/list/index'},
      ]
    },
    
    
  ],
  fastRefresh: {},
  antd:{
    mobile:false
  },
  dva: {}
});
