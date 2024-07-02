// import DigiButton from "./DigiButton.vue"

// export {
  //   DigiButton,
  // }
  import DigiButton from "./DigiButton.vue"
// import BaseButton from ‘./BaseButton/index.vue’
// import BaseCheckbox from ‘./BaseCheckbox/index.vue’
// import BaseInput from ‘./BaseInput/index.vue’

const Components = [
  DigiButton
]
const install = function (Vue, opts = {}) {
 Components.forEach(component => {
   Vue.component(component.name, component)
 })
}
export default {
 install
}