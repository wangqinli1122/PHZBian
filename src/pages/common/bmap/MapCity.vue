<template>
  <div id="map"></div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'MapCity',
  data () {
    return {
      addr: {
        pro: '',
        city: '',
        dis: '',
        lng: 116.40387397,
        lat: 39.91488908
      }
    }
  },
  methods: {
    getLocation () {
      let map = new BMap.Map('map')
      let point = new BMap.Point(this.addr.lng, this.addr.lat)
      map.centerAndZoom(point, 10)
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((r) => {
        if (r.point) {
          this.addr.lng = r.longitude
          this.addr.lat = r.latitude
          this.addr.pro = r.address.province
          this.addr.city = r.address.city
          this.addr.dis = r.address.district
          this.bus.$emit('getAddr', this.addr)
          let markers = new BMap.Marker(r.point)
          map.addOverlay(markers)
          map.panTo(r.point)
          map.centerAndZoom(r.point, 16)
        }
      }, { enableHighAccuracy: true })
    }
  },
  mounted () {
    this.getLocation()
  }
}
</script>

<style lang="stylus" scoped>
  #map
    max-width: 640px
    margin: 0 auto
    display: none
</style>
