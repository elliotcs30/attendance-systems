import { onUnmounted, onMounted, ref } from 'vue'

export function useGeolocation() {
  const coords = ref({ 
    // 鈦坦地址: 台北市南港區園區街3之1號11樓之1號
    latitude: 25.058535, longitude: 121.611882
  }) 
  const isSupported = 'navigator' in window && 'geolocation' in navigator

  let watcher = null
  onMounted(() => {
    if (isSupported)
      watcher = navigator.geolocation.watchPosition(
        position => (coords.value = position.coords)
      )
  })
  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher)
  })

  return { coords, isSupported }
}