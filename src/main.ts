import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/base.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入全局样式
import './assets/css/index.css'
import './assets/css/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI);

// Vue.filter("formatTime", function(value:Number): string | Number{
//   let sec:string | Number = parseInt(value / 1000);//分
//   let min:string | Number = parseInt(sec / 60);//秒
//   sec = sec % 60;
//   sec = sec < 10 ? '0' + sec : sec;
//   value = min + ':' + sec;
//   return value
// };



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
