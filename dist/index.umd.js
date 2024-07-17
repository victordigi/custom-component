(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DigiComponents = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _sfc_main$k = {
    __name: "DigiButton",
    props: {
      msg: String
    },
    setup(__props) {
      const switcher = vue.ref(true);
      const handleChange = () => {
        switcher.value = !switcher.value;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("p", null, vue.toDisplayString(__props.msg), 1),
          vue.createElementVNode("button", { onClick: handleChange }, vue.toDisplayString(switcher.value), 1)
        ], 64);
      };
    }
  };
  const _sfc_main$j = {
    __name: "Digi1",
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
  const _sfc_main$i = {
    __name: "Digi2",
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
  const _sfc_main$h = {
    __name: "Digi3",
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
  const _sfc_main$g = {
    __name: "Digi4",
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
  const _sfc_main$f = {
    __name: "Digi5",
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
  const _sfc_main$e = {
    __name: "Digi6",
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
  const _sfc_main$d = {
    __name: "Digi7",
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
  const _sfc_main$c = {
    __name: "Digi8",
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
  const _sfc_main$b = {
    __name: "Digi9",
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
  const _sfc_main$a = {
    __name: "Digi10",
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
  const _sfc_main$9 = {
    __name: "Digi11",
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
  const _sfc_main$8 = {
    __name: "Digi12",
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
  const _sfc_main$7 = {
    __name: "Digi13",
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
  const _sfc_main$6 = {
    __name: "Digi14",
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
  const _sfc_main$5 = {
    __name: "Digi15",
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
  const _sfc_main$4 = {
    __name: "Digi16",
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
  const _sfc_main$3 = {
    __name: "Digi17",
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
  const _sfc_main$2 = {
    __name: "Digi18",
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
  const _sfc_main$1 = {
    __name: "Digi19",
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
  const _sfc_main = {
    __name: "Digi20",
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
  exports2.Digi1 = _sfc_main$j;
  exports2.Digi10 = _sfc_main$a;
  exports2.Digi11 = _sfc_main$9;
  exports2.Digi12 = _sfc_main$8;
  exports2.Digi13 = _sfc_main$7;
  exports2.Digi14 = _sfc_main$6;
  exports2.Digi15 = _sfc_main$5;
  exports2.Digi16 = _sfc_main$4;
  exports2.Digi17 = _sfc_main$3;
  exports2.Digi18 = _sfc_main$2;
  exports2.Digi19 = _sfc_main$1;
  exports2.Digi2 = _sfc_main$i;
  exports2.Digi20 = _sfc_main;
  exports2.Digi3 = _sfc_main$h;
  exports2.Digi4 = _sfc_main$g;
  exports2.Digi5 = _sfc_main$f;
  exports2.Digi6 = _sfc_main$e;
  exports2.Digi7 = _sfc_main$d;
  exports2.Digi8 = _sfc_main$c;
  exports2.Digi9 = _sfc_main$b;
  exports2.DigiButton = _sfc_main$k;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
