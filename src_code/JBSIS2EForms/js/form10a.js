jsx3.lang.Package.definePackage
(
    "form10a.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 10a*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form10aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 10a data*/

/*********************** Record Holding Mental Health 10a******************************************/
		
		                    var objCaseMENHTLNode = new jsx3.xml.Document().loadXML("<record jsxid='MENHTL'/>");
                            objCaseMENHTLNode.setAttribute("caseTypeCode", "000005");
                            objCaseMENHTLNode.setAttribute("INTIAL_FILINGS", JBSIS.eForms.getVal("txtNumPetsFiled10a"));
                            objCaseMENHTLNode.setAttribute("DISPOSITIONS_TOTAL", JBSIS.eForms.getVal("txtDispositionTotals10a"));
                            objCaseMENHTLNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL", JBSIS.eForms.getVal("txtB4Hear10a"));
                            objCaseMENHTLNode.setAttribute("DISP_AFTER_HEARING_TOTAL_17", JBSIS.eForms.getVal("txtUncontested10a"));
                            objCaseMENHTLNode.setAttribute("DISP_AFTER_HEARING_TOTAL_18", JBSIS.eForms.getVal("txtContested10a"));
                            objCaseMENHTLNode.setAttribute("CASES_ADDED", JBSIS.eForms.getVal("txtNumsSubsCommit10a"));

                            objCaseMENHTLNode.setAttribute("SUB_PETS_FILED_TOTAL", new Number("0"));
                            objCaseMENHTLNode.setAttribute("WRIT_HABEAS_CORPUS", new Number("0"));
                            objCaseMENHTLNode.setAttribute("SUB_PETS_DISPOSED_TOTAL", new Number("0"));
                            objCaseMENHTLNode.setAttribute("BEFORE_TRIAL", new Number("0"));
                            objCaseMENHTLNode.setAttribute("AFTER_COURT_TRIAL", new Number("0"));
                            objCaseMENHTLNode.setAttribute("HABEAS_DISPOSITION_TOTAL", new Number("0"));
                            form10aout.insertRecordNode(objCaseMENHTLNode);


                            var objCaseMENHTLNode125 = new jsx3.xml.Document().loadXML("<record jsxid='MENHTL125'/>");
                            objCaseMENHTLNode125.setAttribute("caseTypeCode", "000125");
                            objCaseMENHTLNode125.setAttribute("INTIAL_FILINGS", JBSIS.eForms.getVal("txtFILINGS10a_OTHERS10a"));
                            objCaseMENHTLNode125.setAttribute("DISPOSITIONS_TOTAL", new Number(new Number(JBSIS.eForms.getVal("txtBeforeHearing10a_OTHERS10a")) + new Number(JBSIS.eForms.getVal("txtAfterHearing10a_OTHERS10a"))));
                            objCaseMENHTLNode125.setAttribute("DISP_BEFORE_TRIAL_TOTAL", JBSIS.eForms.getVal("txtBeforeHearing10a_OTHERS10a"));
                            objCaseMENHTLNode125.setAttribute("AFTER_COURT_TRIAL", JBSIS.eForms.getVal("txtAfterHearing10a_OTHERS10a"));
							objCaseMENHTLNode125.setAttribute("DISP_AFTER_HEARING_TOTAL_17", new Number("0"));
                            objCaseMENHTLNode125.setAttribute("DISP_AFTER_HEARING_TOTAL_18", new Number("0"));
                            objCaseMENHTLNode125.setAttribute("CASES_ADDED", new Number("0")); ;
                            objCaseMENHTLNode125.setAttribute("SUB_PETS_FILED_TOTAL", new Number("0"));
                            objCaseMENHTLNode125.setAttribute("WRIT_HABEAS_CORPUS", new Number("0"));
                            objCaseMENHTLNode125.setAttribute("SUB_PETS_DISPOSED_TOTAL", new Number("0"));
                            objCaseMENHTLNode125.setAttribute("BEFORE_TRIAL", new Number("0"));
                            objCaseMENHTLNode125.setAttribute("HABEAS_DISPOSITION_TOTAL", new Number("0"));
                            form10aout.insertRecordNode(objCaseMENHTLNode125);
				            JBSISEForms.Cache.setDocument("form10aout",form10aout);
try{
                       service.callSubmit10aData();
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

/********************Web Service call to send 10a Data*******************************************************/
    
    service.callSubmit10aData = function() {
            var objService = JBSISEForms.loadResource("sendForm10aData_xml");
            objService.setOperation("Submit10aData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit10aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit10aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit10aDataInvalid);
              objService.setEndpointURL(urlSubmit10aData);      
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit10aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form10aout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit10aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit10aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  

/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 10a**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm10aData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS10aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS10aV2_INT/1.0/xsd'";
                }
                     
/*********************** Setting value for Mental Health 10a******************************************/
                  var caseFive;
				  var caseOneTwoFive;
                  if(!boolImport) {
                       caseFive= xmlForm10aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
				       caseOneTwoFive= xmlForm10aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000125]",caseTypeNameSpace);
                  }else{
                        var caseFive= xmlForm10aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
						var caseOneTwoFive= xmlForm10aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000125]",caseTypeNameSpace);
				  }

                        if(caseOneTwoFive==null){
							service.objFuncParam = caseFive;
							// map using old logic.
							service.setFieldValue("INTIAL_FILINGS", "txtNumPetsFiled10a");
                            service.setFieldValue("DISPOSITIONS_TOTAL", "txtDispositionTotals10a");
                            service.setFieldValue("DISP_BEFORE_TRIAL_TOTAL", "txtB4Hear10a");
                            service.setFieldValue("DISP_AFTER_HEARING_TOTAL_17", "txtUncontested10a");
                            service.setFieldValue("DISP_AFTER_HEARING_TOTAL_18", "txtContested10a");
                            service.setFieldValue("CASES_ADDED", "txtNumsSubsCommit10a");
                            service.setFieldValue("SUB_PETS_FILED_TOTAL", "txtFILINGS10a_OTHERS10a");
                            service.setFieldValue("BEFORE_TRIAL", "txtBeforeHearing10a_OTHERS10a");
                            service.setFieldValue("AFTER_COURT_TRIAL", "txtAfterHearing10a_OTHERS10a");
                            service.setFieldValue("HABEAS_DISPOSITION_TOTAL", "txtDispositionTotal10a_OTHERS10a");




						}else {
							// map using new logic.
							service.objFuncParam = caseFive;
	                	    service.setFieldValue("INTIAL_FILINGS","txtNumPetsFiled10a");
							service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals10a");
					        service.setFieldValue("DISP_BEFORE_TRIAL_TOTAL","txtB4Hear10a");
					        service.setFieldValue("DISP_AFTER_HEARING_TOTAL_17","txtUncontested10a");
					        service.setFieldValue("DISP_AFTER_HEARING_TOTAL_18","txtContested10a");
					        service.setFieldValue("CASES_ADDED","txtNumsSubsCommit10a");


	                	    service.setFieldValue("INTIAL_FILINGS","txtNumPetsFiled10a");
							service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals10a");
					        service.setFieldValue("DISP_BEFORE_TRIAL_TOTAL","txtB4Hear10a");
					        service.setFieldValue("DISP_AFTER_HEARING_TOTAL_17","txtUncontested10a");
					        service.setFieldValue("DISP_AFTER_HEARING_TOTAL_18","txtContested10a");
					        service.setFieldValue("CASES_ADDED","txtNumsSubsCommit10a");

							//service.setFieldValue("SUB_PETS_FILED_TOTAL","txtFILINGS10a_OTHERS10a");
							//service.setFieldValue("BEFORE_TRIAL","txtBeforeHearing10a_OTHERS10a");
							//service.setFieldValue("AFTER_COURT_TRIAL","txtAfterHearing10a_OTHERS10a");
							//service.setFieldValue("HABEAS_DISPOSITION_TOTAL","txtDispositionTotal10a_OTHERS10a");

	 				       service.objFuncParam = caseOneTwoFive
	                	   service.setFieldValue("INTIAL_FILINGS","txtFILINGS10a_OTHERS10a");
					       service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotal10a_OTHERS10a");
						   service.setFieldValue("DISP_BEFORE_TRIAL_TOTAL","txtBeforeHearing10a_OTHERS10a");
						   service.setFieldValue("AFTER_COURT_TRIAL","txtAfterHearing10a_OTHERS10a")
						   //service.setFieldValue("BEFORE_TRIAL","txtBeforeHearing10a_OTHERS10a");

							//service.setFieldValue("DISP_AFTER_HEARING_TOTAL_17","txtUncontested10a");
							//service.setFieldValue("DISP_AFTER_HEARING_TOTAL_18","txtContested10a");
							//service.setFieldValue("CASES_ADDED","txtNumsSubsCommit10a");
							//service.setFieldValue("SUB_PETS_FILED_TOTAL","txtFILINGS10a_OTHERS10a");
							;
							//service.setFieldValue("HABEAS_DISPOSITION_TOTAL","txtDispositionTotal10a_OTHERS10a");

						}

                        
                


    }
   }catch(e){ e = jsx3.lang.NativeError.wrap(e); alert(e); appLogger.trace(e.getMessage());};

try{
    service.setFieldValue=function(xmlNodeName,fieldName){
                if(service.objFuncParam!=null){
			
                        var xmlNode = service.objFuncParam.selectSingleNode(xmlNodeName);
                        var objField= getServer().getJSXByName(fieldName); 
						//if("DISP_BEFORE_TRIAL_TOTAL"== xmlNodeName){
						///	alert( fieldName+" ="+xmlNode+"="+xmlNode.getValue() );
						//}
                        appLogger.trace(fieldName+" ="+xmlNode+"="+xmlNode.getValue());
                        JBSIS.eForms.setVal(xmlNode,objField);
                }
                else
                    appLogger.trace("desired xml node does not exist in Web service Response");
    }
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
	
/*************************************************************************************************************/
/***********************************Web service call to RETRIEVE 10a  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve10aData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm10aData_xml");
            objService.setOperation("Retrieve10aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve10aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve10aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve10aDataInvalid);
    
    objService.setEndpointURL(urlFetch10aData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve10aDataSuccess = function(objEvent) {
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
    service.onRetrieve10aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve10aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);