import Vue from 'vue'
import Vuex from 'vuex'
import BMap from 'BMap'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addr: {
      pro: '',
      city: '',
      dis: '',
      lng: '',
      lat: ''
    },
    showIcon: false,
    isCollectShow: true
  },
  mutations: {
    getLocation (state) {
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((r) => {
        if (r.point) {
          state.addr.lng = r.longitude
          state.addr.lat = r.latitude
          state.addr.pro = r.address.province
          state.addr.city = r.address.city
          state.addr.dis = r.address.district
          state.addr.pro = state.addr.pro.slice(0, state.addr.pro.length - 1)
          state.addr.city = state.addr.city.slice(0, state.addr.city.length - 1)
          try {
            localStorage.lng = state.addr.lng
            localStorage.lat = state.addr.lat
          } catch (e) {}
        }
      }, { enableHighAccuracy: true })
    },
    changeShowIcon (state, bool) {
      state.showIcon = bool
    },
    changeShowCollect (state, bool) {
      state.isCollectShow = bool
    }
  }
})
