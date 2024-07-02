import DigiButton from "./DigiButton.vue"


const Components = [
  DigiButton
]
const install = function (Vue, opts = {}) {
  Components.forEach(component => {
    Vue.component(component.name, component)
  })
 }

export default {
  install,
}
