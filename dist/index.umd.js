(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DigiComponents = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
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
        return vue.openBlock(), vue.createElementBlock("button", { onClick: aaa }, vue.toDisplayString(__props.msg), 1);
      };
    }
  };
  exports2.DigiButton = _sfc_main;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
