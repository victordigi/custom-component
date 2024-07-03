var e = (n, t) => () => (t || n((t = { exports: {} }).exports, t), t.exports);
import { openBlock as i, createElementBlock as c, toDisplayString as r } from "vue";
var a = e((g, o) => {
  const s = {
    __name: "DigiButton",
    props: {
      msg: String
    },
    setup(n) {
      const t = () => {
        alert("啊啊啊啊啊啊");
      };
      return (p, l) => (i(), c("button", { onClick: t }, r(n.msg), 1));
    }
  };
  o.exports = {
    install: function(n, t) {
      n.component("DigiButton", s);
    }
  };
});
export default a();
