import Vue from 'vue'
import App from './App'
import api from './common/api'
Vue.config.productionTip = false
Vue.prototype.$api = api; // 把api挂载到vue实例的原型属性上，就可以通过 this.$api来访问

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
