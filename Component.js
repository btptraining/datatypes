sap.ui.define([
  "sap/ui/core/UIComponent"
], function(UIComponent){
  debugger;
  return UIComponent.extend("com.ibm.simpleapp.Component", {
      metadata: {
          manifest: "json",
      },
      init:function(){
          debugger;
          UIComponent.prototype.init.apply(this, arguments);
      },
      createContent: function(){
          debugger;
          var button = new sap.m.Button({
              text: "Component Button"
          });
          return button;
      }
  });
});