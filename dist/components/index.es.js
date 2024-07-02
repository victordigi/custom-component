import { openBlock as o, createElementBlock as e, toDisplayString as r } from "vue";
const i = {
  __name: "DigiButton",
  props: {
    msg: String
  },
  setup(t) {
    const n = () => {
      alert("啊啊啊啊啊啊");
    };
    return (a, c) => (o(), e("button", { onClick: n }, r(t.msg), 1));
  }
}, l = {
  version: VERSION,
  DigiButton: i
};
export {
  l as default
};
