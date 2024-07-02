// import DigiButton from "./DigiButton.vue"


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

let DigiButton = require('./DigiButton');

module.exports = {
    install: function (Vue, options) {
        Vue.component('DigiButton', DigiButton);
    }
};