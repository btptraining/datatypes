sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  return UIComponent.extend("com.ibm.simpleapp.Component", {
    metadata: {
      manifest: "json",
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
    },
    createContent: function () {
      var button = new sap.m.Button({ text: "Component Button" });
      return button;
    },
  });
});
