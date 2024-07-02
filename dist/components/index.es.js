import { openBlock as e, createElementBlock as c, toDisplayString as s } from "vue";
const a = {
  __name: "DigiButton",
  props: {
    msg: String
  },
  setup(t) {
    const o = () => {
      alert("啊啊啊啊啊啊");
    };
    return (n, l) => (e(), c("button", { onClick: o }, s(t.msg), 1));
  }
}, r = [
  a
], i = function(t, o = {}) {
  r.forEach((n) => {
    t.component(n.name, n);
  });
}, p = {
  install: i
};
export {
  p as default
};
