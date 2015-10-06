jsx3.lang.Package.definePackage
(
    "form13a.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 13a*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form13aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 13a data*/

/*********************** Record Holding Small Claims 13a******************************************/
		
		var objCaseSMLCLMNode = new jsx3.xml.Document().loadXML("<record jsxid='SMLCLM'/>");  
		objCaseSMLCLMNode.setAttribute("caseTypeCode","000005");
		objCaseSMLCLMNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled13a"));
		objCaseSMLCLMNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals13a"));
		objCaseSMLCLMNode.setAttribute("DISP_BEFORE_HEARING_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros13a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans13a"))));
		objCaseSMLCLMNode.setAttribute("BHRG_CRT_ORDERED_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros13a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans13a"))));
		objCaseSMLCLMNode.setAttribute("BHRG_COD_LACK_PROSECUTION",JBSIS.eForms.getVal("txtDismLackPros13a"));
		objCaseSMLCLMNode.setAttribute("BHRG_COD_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AFTER_COURT_HEARING_TOTAL_19",JBSIS.eForms.getVal("txtByCourtBefore13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AFTER_COURT_HEARING_TOTAL_22",JBSIS.eForms.getVal("txtByCourtAfter13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_0_70_DAYS_24",JBSIS.eForms.getVal("txtInCountyCST13a_0to70Days13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_0_70_DAYS_25",JBSIS.eForms.getVal("txtOutCountyCST13a_0to70Days13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_71_90_DAYS_24",JBSIS.eForms.getVal("txtInCountyCST13a_71to90Days13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_71_90_DAYS_25",JBSIS.eForms.getVal("txtOutCountyCST13a_71to90Days13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_GE_91_DAYS_24",JBSIS.eForms.getVal("txtInCountyCST13a_91+Days13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_GE_91_DAYS_25",JBSIS.eForms.getVal("txtOutCountyCST13a_91+Days13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_TOTALS_24",JBSIS.eForms.getVal("txtInCountyCST13a_TotalCST13a"));
		objCaseSMLCLMNode.setAttribute("DISP_AGE_TOTALS_25",JBSIS.eForms.getVal("txtOutCountyCST13a_TotalCST13a"));
		objCaseSMLCLMNode.setAttribute("POSTDISPOSITION_HEARINGS_TOTAL",JBSIS.eForms.getVal("txtHearAfterTrail13a"));
		objCaseSMLCLMNode.setAttribute("BEGIN_PENDING_CI",JBSIS.eForms.getVal("txtBegningPendingCases13a"));
		objCaseSMLCLMNode.setAttribute("NEW_FILINGS_CI",JBSIS.eForms.getVal("txtNewFilings13a"));
		objCaseSMLCLMNode.setAttribute("RESTORED_CI",JBSIS.eForms.getVal("txtRestoredActive13a"));
		objCaseSMLCLMNode.setAttribute("REMOVED_CI",JBSIS.eForms.getVal("txtRemovedActive13a"));
		objCaseSMLCLMNode.setAttribute("DISPOSED_THIS_MONTH_CI",JBSIS.eForms.getVal("txtDisposedThisMnth13a"));
		objCaseSMLCLMNode.setAttribute("ENDING_PENDING_CI",JBSIS.eForms.getVal("txtEndPendingCases13a"));
		objCaseSMLCLMNode.setAttribute("CASES_SET_COURT_TRIAL",JBSIS.eForms.getVal("txtGenCivCSFT13a_CourtTrialCSFT13a"));
		form13aout.insertRecordNode(objCaseSMLCLMNode); 
				
                   JBSISEForms.Cache.setDocument("form13aout",form13aout);
try{
                       service.callSubmit13aData();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
    }     
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

/*******Function to set appropriate operation {Save,Submit}*************************/
try{
    service.getOperation=function(){ 
        if(service.objFuncParam=="Save") 
                return "Save";
         else if(service.objFuncParam=="Submit")
             return "Submit";
         else
              return "Save";
    }
    }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

/********************Web Service call to send 13a Data*******************************************************/
    
    service.callSubmit13aData = function() {
            var objService = JBSISEForms.loadResource("sendForm13aData_xml");
            objService.setOperation("Submit13aData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit13aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit13aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit13aDataInvalid);
              objService.setEndpointURL(urlSubmit13aData);      
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit13aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form13aout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()")
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit13aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit13aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  

/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 13a**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm13aData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS13aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS13aV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Setting value for Small Claims 13a******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm13aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm13aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                	            		
		service.setFieldValue("FILINGS","txtNumCasesFiled13a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals13a");
		service.setFieldValue("BHRG_COD_LACK_PROSECUTION","txtDismLackPros13a");
		service.setFieldValue("BHRG_COD_OTHER_DISM","txtOtherDismTrans13a");
		service.setFieldValue("DISP_AFTER_COURT_HEARING_TOTAL_19","txtByCourtBefore13a");
		service.setFieldValue("DISP_AFTER_COURT_HEARING_TOTAL_22","txtByCourtAfter13a");
		service.setFieldValue("DISP_AGE_0_70_DAYS_24","txtInCountyCST13a_0to70Days13a");
		service.setFieldValue("DISP_AGE_0_70_DAYS_25","txtOutCountyCST13a_0to70Days13a");
		service.setFieldValue("DISP_AGE_71_90_DAYS_24","txtInCountyCST13a_71to90Days13a");
		service.setFieldValue("DISP_AGE_71_90_DAYS_25","txtOutCountyCST13a_71to90Days13a");
		service.setFieldValue("DISP_AGE_GE_91_DAYS_24","txtInCountyCST13a_91+Days13a");
		service.setFieldValue("DISP_AGE_GE_91_DAYS_25","txtOutCountyCST13a_91+Days13a");
		service.setFieldValue("DISP_AGE_TOTALS_24","txtInCountyCST13a_TotalCST13a");
		service.setFieldValue("DISP_AGE_TOTALS_25","txtOutCountyCST13a_TotalCST13a");
		service.setFieldValue("POSTDISPOSITION_HEARINGS_TOTAL","txtHearAfterTrail13a");
		service.setFieldValue("BEGIN_PENDING_CI","txtBegningPendingCases13a");
		service.setFieldValue("NEW_FILINGS_CI","txtNewFilings13a");
		service.setFieldValue("RESTORED_CI","txtRestoredActive13a");
		service.setFieldValue("REMOVED_CI","txtRemovedActive13a");
		service.setFieldValue("DISPOSED_THIS_MONTH_CI","txtDisposedThisMnth13a");
		service.setFieldValue("ENDING_PENDING_CI","txtEndPendingCases13a");
		service.setFieldValue("CASES_SET_COURT_TRIAL","txtGenCivCSFT13a_CourtTrialCSFT13a");


    }
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

try{
    service.setFieldValue=function(xmlNodeName,fieldName){
                if(service.objFuncParam!=null){
                        var xmlNode = service.objFuncParam.selectSingleNode(xmlNodeName);
                        var objField= getServer().getJSXByName(fieldName); 
                        appLogger.trace(fieldName+" ="+xmlNode+"="+xmlNode.getValue());
                        JBSIS.eForms.setVal(xmlNode,objField);
                }
                else
                    appLogger.trace("desired xml node does not exist in Web service Response");
    }
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
	
/*************************************************************************************************************/
/***********************************Web service call to RETRIEVE 13a  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve13aData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm13aData_xml");
            objService.setOperation("Retrieve13aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve13aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve13aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve13aDataInvalid);
    
    objService.setEndpointURL(urlFetch13aData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve13aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var responseXML = objEvent.target.getInboundDocument();
            appLogger.trace(responseXML);
            if(responseXML.selectSingleNode("//ns0:Status",statusNameSpace).getValue()==0){
                    service.setInputData(responseXML);
            }
            else {
                    if(boolImport)
                         //showInfoDialog("Import unsucessful",responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
                         JBSIS.eForms.processException(responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
                    else
                        //showInfoDialog("Data unavailable",responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
                         JBSIS.eForms.processException(responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
            }
    };
    service.onRetrieve13aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve13aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);