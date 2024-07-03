import { openBlock as o, createElementBlock as e, toDisplayString as c } from "vue";
const a = {
  __name: "DigiButton",
  props: {
    msg: String
  },
  setup(n) {
    const t = () => {
      alert("啊啊啊啊啊啊");
    };
    return (i, l) => (o(), e("button", { onClick: t }, c(n.msg), 1));
  }
}, s = [
  a
], r = function(n) {
  s.forEach((t) => {
    n.component(t.name, t);
  });
}, p = {
  install: r
};
export {
  p as default
};
