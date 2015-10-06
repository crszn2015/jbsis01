jsx3.lang.Package.definePackage
(
    "form08a.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 08a*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form08aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 08a data*/

/*********************** Record Holding W&I 601 - original  08a******************************************/
		
		var objCase601ONode = new jsx3.xml.Document().loadXML("<record jsxid='601O'/>");  
		objCase601ONode.setAttribute("caseTypeCode","000005");
		objCase601ONode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumJuve8a_601WIOrig8a"));
		objCase601ONode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals8a_601WIOrig8a"));
		objCase601ONode.setAttribute("DISP_BEFORE_HRG_TOTAL",JBSIS.eForms.getVal("txtB4Hear8a_601WIOrig8a"));
		objCase601ONode.setAttribute("DISP_AFTER_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtUncontested8a_601WIOrig8a"))+new Number(JBSIS.eForms.getVal("txtUncontested8a_601WIOrig8a"))));
		objCase601ONode.setAttribute("AHRG_UNCONTESTED_TOTAL",JBSIS.eForms.getVal("txtUncontested8a_601WIOrig8a"));
		objCase601ONode.setAttribute("AHRG_CONTESTED_TOTAL",JBSIS.eForms.getVal("txtContested8a_601WIOrig8a"));
		objCase601ONode.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txtDetentionHear8a_601WIOrig8a"));
		objCase601ONode.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txtRehearJudge8a_601WIOrig8a"));
		objCase601ONode.setAttribute("HEARINGS_TOTAL_3","0");
		objCase601ONode.setAttribute("HEARINGS_TOTAL_4","0");
		objCase601ONode.setAttribute("DETENTION_HRG",JBSIS.eForms.getVal("txtDetentionHear8a_601WIOrig8a"));
		objCase601ONode.setAttribute("REHEARING_TOTAL",JBSIS.eForms.getVal("txtRehearJudge8a_601WIOrig8a"));
		objCase601ONode.setAttribute("HRG_OTHER_TOTAL","0");
		form08aout.insertRecordNode(objCase601ONode); 
		
		
/******************************Record Holding W&I 602 - original 08a******************************/
		
		var objCase6020Node = new jsx3.xml.Document().loadXML("<record jsxid='6020'/>");   
		objCase6020Node.setAttribute("caseTypeCode","000015");
		objCase6020Node.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumJuve8a_602WIOrig8a"));
		objCase6020Node.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals8a_602WIOrig8a"));
		objCase6020Node.setAttribute("DISP_BEFORE_HRG_TOTAL",JBSIS.eForms.getVal("txtB4Hear8a_602WIOrig8a"));
		objCase6020Node.setAttribute("DISP_AFTER_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtUncontested8a_602WIOrig8a"))+new Number(JBSIS.eForms.getVal("txtUncontested8a_602WIOrig8a"))));
		objCase6020Node.setAttribute("AHRG_UNCONTESTED_TOTAL",JBSIS.eForms.getVal("txtUncontested8a_602WIOrig8a"));
		objCase6020Node.setAttribute("AHRG_CONTESTED_TOTAL",JBSIS.eForms.getVal("txtContested8a_602WIOrig8a"));
		objCase6020Node.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txtDetentionHear8a_602WIOrig8a"));
		objCase6020Node.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txtRehearJudge8a_602WIOrig8a"));
		objCase6020Node.setAttribute("HEARINGS_TOTAL_3","0");
		objCase6020Node.setAttribute("HEARINGS_TOTAL_4","0");
		objCase6020Node.setAttribute("DETENTION_HRG",JBSIS.eForms.getVal("txtDetentionHear8a_602WIOrig8a"));
		objCase6020Node.setAttribute("REHEARING_TOTAL",JBSIS.eForms.getVal("txtRehearJudge8a_602WIOrig8a"));
		objCase6020Node.setAttribute("HRG_OTHER_TOTAL","0");
		form08aout.insertRecordNode(objCase6020Node); 

		
/******************************Record Holding Sub W&I 601 08a******************************/
		
		var objCase601SNode = new jsx3.xml.Document().loadXML("<record jsxid='601S'/>");   
		objCase601SNode.setAttribute("caseTypeCode","000025")
		objCase601SNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumJuve8a_601WISub8a"));
		objCase601SNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals8a_601WISub8a"));
		objCase601SNode.setAttribute("DISP_BEFORE_HRG_TOTAL",JBSIS.eForms.getVal("txtB4Hear8a_601WISub8a"));
		objCase601SNode.setAttribute("DISP_AFTER_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtUncontested8a_601WISub8a"))+new Number(JBSIS.eForms.getVal("txtUncontested8a_601WISub8a"))));
		objCase601SNode.setAttribute("AHRG_UNCONTESTED_TOTAL",JBSIS.eForms.getVal("txtUncontested8a_601WISub8a"));
		objCase601SNode.setAttribute("AHRG_CONTESTED_TOTAL",JBSIS.eForms.getVal("txtContested8a_601WISub8a"));
		objCase601SNode.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txtDetentionHear8a_601WISub8a"));
		objCase601SNode.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txtRehearJudge8a_601WISub8a"));
		objCase601SNode.setAttribute("HEARINGS_TOTAL_3","0");
		objCase601SNode.setAttribute("HEARINGS_TOTAL_4","0");
		objCase601SNode.setAttribute("DETENTION_HRG",JBSIS.eForms.getVal("txtDetentionHear8a_601WISub8a"));
		objCase601SNode.setAttribute("REHEARING_TOTAL",JBSIS.eForms.getVal("txtRehearJudge8a_601WISub8a"));
		objCase601SNode.setAttribute("HRG_OTHER_TOTAL","0");
		form08aout.insertRecordNode(objCase601SNode); 

/******************************Record Holding Sub W&I 602 08a******************************/
		
		var objCase602SNode = new jsx3.xml.Document().loadXML("<record jsxid='602S'/>");   
		objCase602SNode.setAttribute("caseTypeCode","000035");
		objCase602SNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumJuve8a_602WISub8a"));
		objCase602SNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals8a_602WISub8a"));
		objCase602SNode.setAttribute("DISP_BEFORE_HRG_TOTAL",JBSIS.eForms.getVal("txtB4Hear8a_602WISub8a"));
		objCase602SNode.setAttribute("DISP_AFTER_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtUncontested8a_602WISub8a"))+new Number(JBSIS.eForms.getVal("txtUncontested8a_602WISub8a"))));
		objCase602SNode.setAttribute("AHRG_UNCONTESTED_TOTAL",JBSIS.eForms.getVal("txtUncontested8a_602WISub8a"));
		objCase602SNode.setAttribute("AHRG_CONTESTED_TOTAL",JBSIS.eForms.getVal("txtContested8a_602WISub8a"));
		objCase602SNode.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txtDetentionHear8a_602WISub8a"));
		objCase602SNode.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txtRehearJudge8a_602WISub8a"));
		objCase602SNode.setAttribute("HEARINGS_TOTAL_3","0");
		objCase602SNode.setAttribute("HEARINGS_TOTAL_4","0");
		objCase602SNode.setAttribute("DETENTION_HRG",JBSIS.eForms.getVal("txtDetentionHear8a_602WISub8a"));
		objCase602SNode.setAttribute("REHEARING_TOTAL",JBSIS.eForms.getVal("txtRehearJudge8a_602WISub8a"));
		objCase602SNode.setAttribute("HRG_OTHER_TOTAL","0");
		form08aout.insertRecordNode(objCase602SNode); 

/******************************Record Holding W&I 777 08a******************************/
		
		var objCase777Node = new jsx3.xml.Document().loadXML("<record jsxid='777'/>");   
		objCase777Node.setAttribute("caseTypeCode","000045");
		objCase777Node.setAttribute("INITIAL_FILINGS","0");
		objCase777Node.setAttribute("DISPOSITIONS_TOTAL","0");
		objCase777Node.setAttribute("DISP_BEFORE_HRG_TOTAL","0");
		objCase777Node.setAttribute("DISP_AFTER_HRG_TOTAL","0");
		objCase777Node.setAttribute("AHRG_UNCONTESTED_TOTAL","0");
		objCase777Node.setAttribute("AHRG_CONTESTED_TOTAL","0");
		objCase777Node.setAttribute("HEARINGS_TOTAL_1",JBSIS.eForms.getVal("txt777WI8a_601WIOrig8a"));
		objCase777Node.setAttribute("HEARINGS_TOTAL_2",JBSIS.eForms.getVal("txt777WI8a_602WIOrig8a"));
		objCase777Node.setAttribute("HEARINGS_TOTAL_3",JBSIS.eForms.getVal("txt777WI8a_601WISub8a"));
		objCase777Node.setAttribute("HEARINGS_TOTAL_4",JBSIS.eForms.getVal("txt777WI8a_602WISub8a"));
		objCase777Node.setAttribute("DETENTION_HRG","0");
		objCase777Node.setAttribute("REHEARING_TOTAL","0");
		objCase777Node.setAttribute("HRG_OTHER_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txt777WI8a_601WIOrig8a"))+new Number(JBSIS.eForms.getVal("txt777WI8a_602WIOrig8a"))+new Number(JBSIS.eForms.getVal("txt777WI8a_601WISub8a"))+new Number(JBSIS.eForms.getVal("txt777WI8a_602WISub8a"))));
		form08aout.insertRecordNode(objCase777Node); 
	
				
                   JBSISEForms.Cache.setDocument("form08aout",form08aout);
try{
                       service.callSubmit08aData();
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

/********************Web Service call to send 08a Data*******************************************************/
    
    service.callSubmit08aData = function() {
            var objService = JBSISEForms.loadResource("sendForm08aData_xml");
            objService.setOperation("Submit08aData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit08aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit08aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit08aDataInvalid);
              objService.setEndpointURL(urlSubmit08aData);      
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit08aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form08aout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit08aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit08aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  

/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 08a**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm08aData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS08aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS08aV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Record Holding W&I 601 - original  08a******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm08aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm08aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                	            		
		service.setFieldValue("INITIAL_FILINGS","txtNumJuve8a_601WIOrig8a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals8a_601WIOrig8a");
		service.setFieldValue("DISP_BEFORE_HRG_TOTAL","txtB4Hear8a_601WIOrig8a");
		service.setFieldValue("AHRG_UNCONTESTED_TOTAL","txtUncontested8a_601WIOrig8a");
		service.setFieldValue("AHRG_CONTESTED_TOTAL","txtContested8a_601WIOrig8a");
		service.setFieldValue("HEARINGS_TOTAL_1","txtDetentionHear8a_601WIOrig8a");
		service.setFieldValue("HEARINGS_TOTAL_2","txtRehearJudge8a_601WIOrig8a");
		service.setFieldValue("DETENTION_HRG","txtDetentionHear8a_601WIOrig8a");
		service.setFieldValue("REHEARING_TOTAL","txtRehearJudge8a_601WIOrig8a");

/******************************Record Holding W&I 602 - original 08a******************************/

                  if(!boolImport)        
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);

		service.setFieldValue("INITIAL_FILINGS","txtNumJuve8a_602WIOrig8a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals8a_602WIOrig8a");
		service.setFieldValue("DISP_BEFORE_HRG_TOTAL","txtB4Hear8a_602WIOrig8a");
		service.setFieldValue("AHRG_UNCONTESTED_TOTAL","txtUncontested8a_602WIOrig8a");
		service.setFieldValue("AHRG_CONTESTED_TOTAL","txtContested8a_602WIOrig8a");
		service.setFieldValue("HEARINGS_TOTAL_1","txtDetentionHear8a_602WIOrig8a");
		service.setFieldValue("HEARINGS_TOTAL_2","txtRehearJudge8a_602WIOrig8a");
		service.setFieldValue("DETENTION_HRG","txtDetentionHear8a_602WIOrig8a");
		service.setFieldValue("REHEARING_TOTAL","txtRehearJudge8a_602WIOrig8a");
		
		
/******************************Record Holding Sub W&I 601 08a******************************/

                  if(!boolImport)        
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000025]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000025]",caseTypeNameSpace);

		service.setFieldValue("INITIAL_FILINGS","txtNumJuve8a_601WISub8a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals8a_601WISub8a");
		service.setFieldValue("DISP_BEFORE_HRG_TOTAL","txtB4Hear8a_601WISub8a");
		service.setFieldValue("AHRG_UNCONTESTED_TOTAL","txtUncontested8a_601WISub8a");
		service.setFieldValue("AHRG_CONTESTED_TOTAL","txtContested8a_601WISub8a");
		service.setFieldValue("HEARINGS_TOTAL_1","txtDetentionHear8a_601WISub8a");
		service.setFieldValue("HEARINGS_TOTAL_2","txtRehearJudge8a_601WISub8a");
		service.setFieldValue("DETENTION_HRG","txtDetentionHear8a_601WISub8a");
		service.setFieldValue("REHEARING_TOTAL","txtRehearJudge8a_601WISub8a");
		
/******************************Record Holding Sub W&I 602 08a******************************/

                  if(!boolImport)        
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000035]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000035]",caseTypeNameSpace);

		service.setFieldValue("INITIAL_FILINGS","txtNumJuve8a_602WISub8a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals8a_602WISub8a");
		service.setFieldValue("DISP_BEFORE_HRG_TOTAL","txtB4Hear8a_602WISub8a");
		service.setFieldValue("AHRG_UNCONTESTED_TOTAL","txtUncontested8a_602WISub8a");
		service.setFieldValue("AHRG_CONTESTED_TOTAL","txtContested8a_602WISub8a");
		service.setFieldValue("HEARINGS_TOTAL_1","txtDetentionHear8a_602WISub8a");
		service.setFieldValue("HEARINGS_TOTAL_2","txtRehearJudge8a_602WISub8a");
		service.setFieldValue("DETENTION_HRG","txtDetentionHear8a_602WISub8a");
		service.setFieldValue("REHEARING_TOTAL","txtRehearJudge8a_602WISub8a");

/******************************Record Holding W&I 777 08a******************************/

                  if(!boolImport)        
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000045]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm08aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000045]",caseTypeNameSpace);

		service.setFieldValue("HEARINGS_TOTAL_1","txt777WI8a_601WIOrig8a");
		service.setFieldValue("HEARINGS_TOTAL_2","txt777WI8a_602WIOrig8a");
		service.setFieldValue("HEARINGS_TOTAL_3","txt777WI8a_601WISub8a");
		service.setFieldValue("HEARINGS_TOTAL_4","txt777WI8a_602WISub8a");
		
    }
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

try{
    service.setFieldValue=function(xmlNodeName,fieldName){ 
                if(service.objFuncParam!=null){
                        var xmlNode = service.objFuncParam.selectSingleNode(xmlNodeName);
                        var objField= getServer().getJSXByName(fieldName); 
                        try{
                            appLogger.trace(fieldName+" ="+xmlNode+"="+xmlNode.getValue());
                        }catch(e){alert(e.getMessage())};
                        JBSIS.eForms.setVal(xmlNode,objField);
                }
                else
                    appLogger.trace("desired xml node does not exist in Web service Response");
    }
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
	
/*************************************************************************************************************/
/***********************************Web service call to RETRIEVE 08a  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve08aData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm08aData_xml");
            objService.setOperation("Retrieve08aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve08aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve08aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve08aDataInvalid);
    
    objService.setEndpointURL(urlFetch08aData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve08aDataSuccess = function(objEvent) {
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
    service.onRetrieve08aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve08aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);