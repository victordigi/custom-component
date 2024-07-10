import { openBlock, createElementBlock, toDisplayString } from "vue";
const _sfc_main = {
  __name: "DigiButton",
  props: {
    msg: String
  },
  setup(__props) {
    const aaa = () => {
      alert("啊啊啊啊啊啊");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", { onClick: aaa }, toDisplayString(__props.msg), 1);
    };
  }
};
_sfc_main.install = function(Vue) {
  Vue.component("digi-button", _sfc_main);
};
export {
  _sfc_main as DigiButton
};
