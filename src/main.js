import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyComponents from '@/components/UI';

Vue.config.productionTip = false;

MyComponents.forEach(component => {
  Vue.component(component.name, component);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
