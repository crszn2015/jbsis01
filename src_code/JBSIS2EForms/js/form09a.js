jsx3.lang.Package.definePackage
(
    "form09a.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 09a*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form09aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 09a data*/

/*********************** Record Holding W&I 300 Orignal 09a******************************************/
		
		var objCaseWI300ONode = new jsx3.xml.Document().loadXML("<record jsxid='WI3000'/>");  
		objCaseWI300ONode.setAttribute("caseTypeCode","000005");
		objCaseWI300ONode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumJuve9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("DISP_BEFORE_HRG_TOTAL",JBSIS.eForms.getVal("txtB4Hear9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("DISP_AFTER_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtUncontested9a_300WIOrig9a"))+new Number(JBSIS.eForms.getVal("txtContested9a_300WIOrig9a"))));
		objCaseWI300ONode.setAttribute("AHRG_UNCONTESTED_TOTAL",JBSIS.eForms.getVal("txtUncontested9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("AHRG_CONTESTED_TOTAL",JBSIS.eForms.getVal("txtContested9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txtDetentionHear9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txtRehearJudge9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("DETENTION_HRG",JBSIS.eForms.getVal("txtDetentionHear9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("REHEARING_TOTAL",JBSIS.eForms.getVal("txtRehearJudge9a_300WIOrig9a"));
		objCaseWI300ONode.setAttribute("HRG_OTHER_TOTAL_1","0");
		objCaseWI300ONode.setAttribute("HRG_OTHER_TOTAL_2","0");
		objCaseWI300ONode.setAttribute("REVIEWS_TOTAL",JBSIS.eForms.getVal("txtAnnualReviews9a_300WIOrig9a"));
		form09aout.insertRecordNode(objCaseWI300ONode); 
		
		
/******************************Record Holding W&I 300 Subsequent 09a******************************/
		
		var objCaseWI300SNode = new jsx3.xml.Document().loadXML("<record jsxid='WI300S'/>");   
		objCaseWI300SNode.setAttribute("caseTypeCode","000015");
		objCaseWI300SNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumJuve9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("DISP_BEFORE_HRG_TOTAL",JBSIS.eForms.getVal("txtB4Hear9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("DISP_AFTER_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtUncontested9a_300WISub9a"))+new Number(JBSIS.eForms.getVal("txtContested9a_300WISub9a"))));
		objCaseWI300SNode.setAttribute("AHRG_UNCONTESTED_TOTAL",JBSIS.eForms.getVal("txtUncontested9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("AHRG_CONTESTED_TOTAL",JBSIS.eForms.getVal("txtContested9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txtDetentionHear9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txtRehearJudge9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("DETENTION_HRG",JBSIS.eForms.getVal("txtDetentionHear9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("REHEARING_TOTAL",JBSIS.eForms.getVal("txtRehearJudge9a_300WISub9a"));
		objCaseWI300SNode.setAttribute("HRG_OTHER_TOTAL_1","0");
		objCaseWI300SNode.setAttribute("HRG_OTHER_TOTAL_2","0");
		objCaseWI300SNode.setAttribute("REVIEWS_TOTAL",JBSIS.eForms.getVal("txtAnnualReviews9a_300WISub9a"));
		form09aout.insertRecordNode(objCaseWI300SNode); 

		
/******************************Record Holding W&I 387 09a******************************/
		
		var objCaseWI387Node = new jsx3.xml.Document().loadXML("<record jsxid='WI387'/>");   
		objCaseWI387Node.setAttribute("caseTypeCode","000025")
		objCaseWI387Node.setAttribute("INITIAL_FILINGS","0");
		objCaseWI387Node.setAttribute("DISPOSITIONS_TOTAL","0");
		objCaseWI387Node.setAttribute("DISP_BEFORE_HRG_TOTAL","0");
		objCaseWI387Node.setAttribute("DISP_AFTER_HRG_TOTAL","0");
		objCaseWI387Node.setAttribute("AHRG_UNCONTESTED_TOTAL","0");
		objCaseWI387Node.setAttribute("AHRG_CONTESTED_TOTAL","0");
		objCaseWI387Node.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txt777WI9a_300WIOrig9a"));
		objCaseWI387Node.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txt777WI9a_300WISub9a"));
		objCaseWI387Node.setAttribute("DETENTION_HRG","0");
		objCaseWI387Node.setAttribute("REHEARING_TOTAL","0");
		objCaseWI387Node.setAttribute("HRG_OTHER_TOTAL_1",JBSIS.eForms.getVal("txt777WI9a_300WIOrig9a"));
		objCaseWI387Node.setAttribute("HRG_OTHER_TOTAL_2",JBSIS.eForms.getVal("txt777WI9a_300WISub9a"));
		objCaseWI387Node.setAttribute("REVIEWS_TOTAL","0");
		form09aout.insertRecordNode(objCaseWI387Node); 
	
				
                   JBSISEForms.Cache.setDocument("form09aout",form09aout);
try{
                       service.callSubmit09aData();
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

/********************Web Service call to send 09a Data*******************************************************/
    
    service.callSubmit09aData = function() {
            var objService = JBSISEForms.loadResource("sendForm09aData_xml");
            objService.setOperation("Submit09aData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit09aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit09aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit09aDataInvalid);
              objService.setEndpointURL(urlSubmit09aData);      
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit09aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form09aout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit09aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit09aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  

/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 09a**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm09aData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS09aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS09aV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Record Holding W&I 300 Orignal 09a******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm09aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm09aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                	            		
		service.setFieldValue("INITIAL_FILINGS","txtNumJuve9a_300WIOrig9a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals9a_300WIOrig9a");
		service.setFieldValue("DISP_BEFORE_HRG_TOTAL","txtB4Hear9a_300WIOrig9a");
		service.setFieldValue("AHRG_UNCONTESTED_TOTAL","txtUncontested9a_300WIOrig9a");
		service.setFieldValue("AHRG_CONTESTED_TOTAL","txtContested9a_300WIOrig9a");
		service.setFieldValue("HEARINGS_TOTAL_1","txtDetentionHear9a_300WIOrig9a");
		service.setFieldValue("HEARINGS_TOTAL_2","txtRehearJudge9a_300WIOrig9a");
		service.setFieldValue("DETENTION_HRG","txtDetentionHear9a_300WIOrig9a");
		service.setFieldValue("REHEARING_TOTAL","txtRehearJudge9a_300WIOrig9a");
		service.setFieldValue("REVIEWS_TOTAL","txtAnnualReviews9a_300WIOrig9a");

/******************************Record Holding W&I 300 Subsequent 09a******************************/

                  if(!boolImport)        
                    service.objFuncParam = xmlForm09aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm09aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);

		service.setFieldValue("INITIAL_FILINGS","txtNumJuve9a_300WISub9a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals9a_300WISub9a");
		service.setFieldValue("DISP_BEFORE_HRG_TOTAL","txtB4Hear9a_300WISub9a");
		service.setFieldValue("AHRG_UNCONTESTED_TOTAL","txtUncontested9a_300WISub9a");
		service.setFieldValue("AHRG_CONTESTED_TOTAL","txtContested9a_300WISub9a");
		service.setFieldValue("HEARINGS_TOTAL_1","txtDetentionHear9a_300WISub9a");
		service.setFieldValue("HEARINGS_TOTAL_2","txtRehearJudge9a_300WISub9a");
		service.setFieldValue("DETENTION_HRG","txtDetentionHear9a_300WISub9a");
		service.setFieldValue("REHEARING_TOTAL","txtRehearJudge9a_300WISub9a");
		service.setFieldValue("REVIEWS_TOTAL","txtAnnualReviews9a_300WISub9a");
				
/******************************Record Holding W&I 387 09a******************************/

                  if(!boolImport)        
                    service.objFuncParam = xmlForm09aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000025]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm09aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000025]",caseTypeNameSpace);

		service.setFieldValue("HEARINGS_TOTAL_1","txt777WI9a_300WIOrig9a");
		service.setFieldValue("HEARINGS_TOTAL_2","txt777WI9a_300WISub9a");

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
/***********************************Web service call to RETRIEVE 09a  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve09aData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm09aData_xml");
            objService.setOperation("Retrieve09aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve09aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve09aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve09aDataInvalid);
    
    objService.setEndpointURL(urlFetch09aData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve09aDataSuccess = function(objEvent) {
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
    service.onRetrieve09aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve09aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);