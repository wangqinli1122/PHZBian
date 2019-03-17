import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addr: {
      pro: '',
      city: '',
      dis: '',
      lng: '',
      lat: ''
    }
  },
  mutations: {
    changeAddr (state, addr) {
      state.addr = addr
      try {
        localStorage.lng = addr.lng
        localStorage.lat = addr.lat
      } catch (e) {}
    }
  }
})
