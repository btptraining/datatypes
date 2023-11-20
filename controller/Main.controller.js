sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../formatter/formatter"],
  function (Controller, formatter) {
    return Controller.extend("com.ibm.simpleapp.controller.Main", {
      formatter: formatter,
      onInit: function () {
        var oModel = new sap.ui.model.json.JSONModel();
        var data = {
          salary: 4999,
          name: "Ashok",
          gender: "M",
          count: 12421,
          department: "ABC",
          joindate: "2021/08/28",
        };
        oModel.setData({ empdata: data });
        this.getView().setModel(oModel, "empdetails");
        this._bindForm();

        sap.ui.getCore().attachValidationError(function (oEvent) {
          debugger;
          var sMessage = oEvent.getParameter("exception").message;
          oEvent.getParameter("element").setValueState("Error");
          oEvent.getParameter("element").setValueStateText(sMessage);
        });
        sap.ui.getCore().attachValidationSuccess(function (oEvent) {
          oEvent.getParameter("element").setValueState("None");
        });
        this._loadi18nModel();
      },
      _loadi18nModel: function () {
        var i18nModel = new sap.ui.model.resource.ResourceModel({
          bundleName: "com.ibm.simpleapp.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },
      _bindForm: function () {
        var oSimpleForm = this.getView().byId("idSimpleForm");
        oSimpleForm.bindElement({ path: "empdetails>/empdata" });
      },
      onDeptChange: function (evt) {},
    });
  }
);
