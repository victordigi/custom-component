var o = (i, t) => () => (t || i((t = { exports: {} }).exports, t), t.exports);
var u = o((p, n) => {
  let e = require("./DigiButton");
  n.exports = {
    install: function(i, t) {
      i.component("DigiButton", e);
    }
  };
});
export default u();
