(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DigiComponents = {}));
})(this, function(exports2) {
  "use strict";
  const DigiButton = "./DigiButton.vue";
  DigiButton.install = function(app) {
    app.component("digi-button", DigiButton);
  };
  exports2.DigiButton = DigiButton;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
