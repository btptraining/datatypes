sap.ui.define([], function () {
  return {
    salutation: function (v1, v2) {
      if (v1 && v2) {
        var salutation = v1 === "M" ? "Mr." : "Mrs.";
        return salutation + " " + v2;
      }
      return;
    },
  };
});
