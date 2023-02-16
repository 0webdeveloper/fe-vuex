import Vue from 'vue'
import Vuex from 'vuex'
import shopStore from './modules/shopStore';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shopStore
  }
})
