jsx3.lang.Package.definePackage(
  "repStat.service",                //the full name of the package to create
  function(service) {          //name the argument of this function
    //call this method to begin the service call (repStat.service.callCheckReportStatus();)
    service.callCheckReportStatus = function() {

      var objService = JBSISEForms.loadResource("getReportStatus_xml");
      objService.setOperation("CheckReportStatus");
      //subscribe and call
      objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onCheckReportStatusSuccess);
      objService.subscribe(jsx3.net.Service.ON_ERROR, service.onCheckReportStatusError);
      objService.subscribe(jsx3.net.Service.ON_INVALID, service.onCheckReportStatusInvalid);
      objService.setEndpointURL(urlCheckReportStatus);
      objService.doCall();
        appLogger.trace(objService.getOutboundDocument());
    };
    service.onCheckReportStatusSuccess = function(objEvent) {
        JBSIS.eForms.showLoadDialog(false);
      var responseXML = objEvent.target.getInboundDocument();
      //objEvent.target.getServer().alert("Success","The service call was successful.");
        appLogger.trace(responseXML);
      if(responseXML.selectSingleNode("//ns0:Status",statusNameSpace).getValue()==0) {
                 JBSIS.eForms.Nav.showTab(false);
        }
     else {
            
            //showInfoDialog("Create Failed",responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
            JBSIS.eForms.processException(responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
        }
                
    };
    service.onCheckReportStatusError = function(objEvent) {
        JBSIS.eForms.showLoadDialog(false);
      var myStatus = objEvent.target.getRequest().getStatus();
      var myStatusText = objEvent.target.getRequest().getStatusText();
        JBSIS.eForms.processException("JBSIS001GI802");//JBSIS.eForms.Nav.showTab(false);
        appLogger.trace(objEvent.target.getRequest());

    };
    service.onCheckReportStatusInvalid = function(objEvent) {
        JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  }
);