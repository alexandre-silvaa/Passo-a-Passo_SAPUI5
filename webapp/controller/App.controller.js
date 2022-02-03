sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit : function () {
          //define o modelo de dados de visualização
          var oData = {
             recipient : {
                name : "World"
             }
          };
          var oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
          //define o modelo i18n na visualização
          var i18nModel = new ResourceModel({
             bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
          });
          this.getView().setModel(i18nModel, "i18n");
       },

       onShowHello : function () {
          //lê a mensagem do i18n
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          //´mostra a mensagem
          MessageToast.show(sMsg);
       }
    });
 });