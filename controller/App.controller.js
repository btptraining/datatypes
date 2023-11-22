sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../formatter/formatter"
], function (Controller, formatter) {
  return Controller.extend("com.ibm.simpleapp.controller.App", {
    formatter: formatter,
    onInit: function () {
      debugger;
      var model = new sap.ui.model.json.JSONModel();
      var data = {
        salary: 4999,
        name: "Ashok",
        gender: "M",
        count: 12421,
        department: "ABC",
        joinDate: "2021/08/28"
      };
      model.setData({ empData: data });
      this.getView().setModel(model, "empdetails");
      this.bindform();

      sap.ui.getCore().attachValidationError(function (event) {
        debugger;
        var message = event.getParameter("exception").message;
        event.getParameter("element").setValueState("Error");
        event.getParameter("element").setValueStateText(message);
      });

      sap.ui.getCore().attachValidationSuccess(function (event) {
        event.getParameter("element").setValueState("None");
      });
      this.loadfileModel();
    },
    loadfileModel: function () {
      debugger;
      var model = new sap.ui.model.resource.ResourceModel({
        bundleName: "com.ibm.simpleapp.file.file"
      });
      this.getView().setModel(fileModel, "file");
    },
    bindForm: function () {
      debugger;
      var simpleForm = this.getView().byId("idSimpleForm");
      simpleForm.bindElement({
        path: "empdetails>/empData"
      });
    },
    onDeptChange: function (evt) {
      debugger;
    }
  });
});