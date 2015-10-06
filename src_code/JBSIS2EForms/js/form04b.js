jsx3.lang.Package.definePackage
(
    "form04b.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 04b*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                 JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form04bout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 04b data*/

/*********************** Record Holding CRIMINAL 04b******************************************/
		
		var objCaseCRM04bNode = new jsx3.xml.Document().loadXML("<record jsxid='CRM'/>");  
		objCaseCRM04bNode.setAttribute("caseTypeCode","000015");
		objCaseCRM04bNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtTotalFilings4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("APPELLATE_DEPT",JBSIS.eForms.getVal("txtAppellateDept4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("TRIAL_DEPT",JBSIS.eForms.getVal("txtTrialDept4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("DISPOSITIONS_TOTAL_26",JBSIS.eForms.getVal("txtDispositionTotal4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("DISP_BHRG_TOTAL",JBSIS.eForms.getVal("txtBeforeHearing4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("DISP_AHRG_TOTAL_20",JBSIS.eForms.getVal("txtWithoutOpinion4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("DISP_AHRG_TOTAL_21",JBSIS.eForms.getVal("txtMemoOpinion4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("DISP_AHRG_TOTAL_23",JBSIS.eForms.getVal("txtPublished4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("DISP_AHRG_TOTAL_24",JBSIS.eForms.getVal("txtUnpublished4b_Criminal4b"));
		objCaseCRM04bNode.setAttribute("DISP_AHRG_TOTAL_25",JBSIS.eForms.getVal("txtTrialDeNovo4b_Criminal4b"));
		form04bout.insertRecordNode(objCaseCRM04bNode); 
		
		
/******************************Record Holding CIVIL 04b******************************/
		
		var objCaseCIV04bNode = new jsx3.xml.Document().loadXML("<record jsxid='CIV'/>");   
		objCaseCIV04bNode.setAttribute("caseTypeCode","000005");

		objCaseCIV04bNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtTotalFilings4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("APPELLATE_DEPT",JBSIS.eForms.getVal("txtAppellateDept4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("TRIAL_DEPT","0");
	objCaseCIV04bNode.setAttribute("DISPOSITIONS_TOTAL_26",JBSIS.eForms.getVal("txtDispositionTotal4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("DISP_BHRG_TOTAL",JBSIS.eForms.getVal("txtBeforeHearing4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("DISP_AHRG_TOTAL_20",JBSIS.eForms.getVal("txtWithoutOpinion4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("DISP_AHRG_TOTAL_21",JBSIS.eForms.getVal("txtMemoOpinion4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("DISP_AHRG_TOTAL_23",JBSIS.eForms.getVal("txtPublished4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("DISP_AHRG_TOTAL_24",JBSIS.eForms.getVal("txtUnpublished4b_Civil4b"));
		objCaseCIV04bNode.setAttribute("DISP_AHRG_TOTAL_25","0");
		form04bout.insertRecordNode(objCaseCIV04bNode); 
		
				
                   JBSISEForms.Cache.setDocument("form04bout",form04bout);
                    try{
                       service.callSubmit04bData();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}    }     
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

/********************Web Service call to send 04b Data*******************************************************/
    
    service.callSubmit04bData = function() {
            var objService = JBSISEForms.loadResource("sendForm04bData_xml");
            objService.setOperation("Submit04bData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit04bDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit04bDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit04bDataInvalid);
              objService.setEndpointURL(urlSubmit04bData);      
              objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit04bDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form04bout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit04bDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
             JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit04bDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  

/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 04b**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm04bData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS04bV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS04bV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Setting values for CRIMINAL 04b******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm04bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm04bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);
                
 	            		
		service.setFieldValue("FILINGS","txtTotalFilings4b_Criminal4b");
		service.setFieldValue("APPELLATE_DEPT","txtAppellateDept4b_Criminal4b");
		service.setFieldValue("TRIAL_DEPT","txtTrialDept4b_Criminal4b");
		service.setFieldValue("DISPOSITIONS_TOTAL_26","txtDispositionTotal4b_Criminal4b");
		service.setFieldValue("DISP_BHRG_TOTAL","txtBeforeHearing4b_Criminal4b");
		service.setFieldValue("DISP_AHRG_TOTAL_20","txtWithoutOpinion4b_Criminal4b");
		service.setFieldValue("DISP_AHRG_TOTAL_21","txtMemoOpinion4b_Criminal4b");
		service.setFieldValue("DISP_AHRG_TOTAL_23","txtPublished4b_Criminal4b");
		service.setFieldValue("DISP_AHRG_TOTAL_24","txtUnpublished4b_Criminal4b");
		service.setFieldValue("DISP_AHRG_TOTAL_25","txtTrialDeNovo4b_Criminal4b") 

/******************************Setting values for CIVL 04b******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm04bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm04bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);


		service.setFieldValue("FILINGS","txtTotalFilings4b_Civil4b");
		service.setFieldValue("APPELLATE_DEPT","txtAppellateDept4b_Civil4b");
		service.setFieldValue("DISPOSITIONS_TOTAL_26","txtDispositionTotal4b_Civil4b");
		service.setFieldValue("DISP_BHRG_TOTAL","txtBeforeHearing4b_Civil4b");
		service.setFieldValue("DISP_AHRG_TOTAL_20","txtWithoutOpinion4b_Civil4b");
		service.setFieldValue("DISP_AHRG_TOTAL_21","txtMemoOpinion4b_Civil4b");
		service.setFieldValue("DISP_AHRG_TOTAL_23","txtPublished4b_Civil4b");
		service.setFieldValue("DISP_AHRG_TOTAL_24","txtUnpublished4b_Civil4b")
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
/***********************************Web service call to RETRIEVE 04b  Data************************************/
/*************************************************************************************************************/
 
    service.callRetrieve04bData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm04bData_xml");
            objService.setOperation("Retrieve04bData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve04bDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve04bDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve04bDataInvalid);
    
    objService.setEndpointURL(urlFetch04bData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve04bDataSuccess = function(objEvent) {
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
    service.onRetrieve04bDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve04bDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);