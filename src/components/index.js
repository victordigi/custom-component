import DigiButton from "./DigiButton.vue"

export {
  DigiButton,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('DigiButton', DigiButton)
}