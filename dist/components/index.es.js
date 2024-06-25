import { openBlock as o, createElementBlock as e, toDisplayString as i } from "vue";
const r = {
  __name: "DigiButton",
  props: {
    msg: String
  },
  setup(t) {
    const n = () => {
      alert("啊啊啊啊啊啊");
    };
    return (c, a) => (o(), e("button", { onClick: n }, i(t.msg), 1));
  }
};
typeof window < "u" && window.Vue && window.Vue.component("DigiButton", r);
export {
  r as DigiButton
};
