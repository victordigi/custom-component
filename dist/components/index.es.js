import { openBlock as o, createElementBlock as n, Fragment as l, createElementVNode as e, toDisplayString as r } from "vue";
const s = /* @__PURE__ */ e("h1", null, "I am a custom component!", -1), p = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(t) {
    return (m, a) => (o(), n(l, null, [
      s,
      e("p", null, "this message is parent " + r(t.msg), 1)
    ], 64));
  }
};
export {
  p as HelloWorld
};
