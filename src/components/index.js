import DigiButton from "./DigiButton.vue"

// const install = (app) => {
//     app.component(DigiButton.name, DigiButton);
// };

// export default {
//     install,
// };
DigiButton.install = function (Vue) {
  Vue.component("digi-button", DigiButton);
};
export { DigiButton };
// const Components = [
//   DigiButton
// ]
// const install = function (App) {
//   Components.forEach(component => {
//     App.component(component.name, component)
//   })
//  }

// export default {
//   install,
// }

// module.exports = {
//     install: function (Vue, options) {
//         Vue.component('DigiButton', DigiButton);
//     }
// };