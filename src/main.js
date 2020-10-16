import Vue from 'vue'
import App from './App.vue'
import router from './router' //./表示同级
import store from './store'
import ElementUI from 'element-ui'; //直接从node_modules下引入
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts' //全局使用  //../表示上一级
import axios from 'axios'

Vue.use(ElementUI); //使用use是根据第三方插件自身的规则来决定的，下面echart就不用use用向原型中添加属性
Vue.prototype.$echarts = echarts //在原型中添加全局定义属性，$echarts（echarts可自定义）
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
