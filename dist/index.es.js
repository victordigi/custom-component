import { openBlock as o, createElementBlock as e, toDisplayString as r } from "vue";
const s = {
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
};
export {
  s as DigiButton
};
