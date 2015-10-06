jsx3.lang.Package.definePackage
(
    "form12a.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 12a*******************************************************/
/**********************************************************************************************************/

// Save or Submit 
  try{               
     service.genOutputData=function(strOperation){
		
		JBSIS.eForms.showLoadDialog(true);
        service.objFuncParam = strOperation;
		
		form12aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 12a data*/

/*********************** Record Holding Probate 12a******************************************/
		
		var objCasePROBNode = new jsx3.xml.Document().loadXML("<record jsxid='PROB'/>");  
		objCasePROBNode.setAttribute("caseTypeCode","000005");

/********** UPDATED on 10-15-14, 12-02-14 By HDS for JBSIS CaseType Enhancement Project ***************/		
		
		if ( (service.objFuncParam=="Submit" ) && (JBSIS.eForms.getVal("txtNumCasesFiled12a")!=0) ){	// convert to new format - zero out the first old format column
					//If SUBMIT then set text field values to zero - ie blank them out
				getServer().getJSXByName("txtNumCasesFiled12a").setValue('');
				getServer().getJSXByName("txtDispositionTotals12a").setValue('');
				getServer().getJSXByName("txtDismLackPros12a").setValue('');
				getServer().getJSXByName("txtOtherDismTrans12a").setValue('');
				getServer().getJSXByName("txtSummJudgmnt12a").setValue('');
				getServer().getJSXByName("txtAllOtherJudgmnt12a").setValue('');
				getServer().getJSXByName("txtByCourtBefore12a").setValue('');
				getServer().getJSXByName("txtByCourtAfter12a").setValue('');
				getServer().getJSXByName("txtByJuryBefore12a").setValue('');
				getServer().getJSXByName("txtByJuryAfter12a").setValue('');
				getServer().getJSXByName("txtPreSettlmntConf12a").setValue('');
				getServer().getJSXByName("txtRetrials12a").setValue('');
				getServer().getJSXByName("txtSuperOrders12a").setValue('');
		}//end-if
					
			// After SUBMIT action zeroing-out corresponding xml nodes or for SAVE saving as is
		objCasePROBNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled12a"));
		objCasePROBNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals12a"));
		objCasePROBNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros12a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans12a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt12a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt12a"))));
		objCasePROBNode.setAttribute("BTRL_DISMISSAL_TOTAL_18",JBSIS.eForms.getVal("txtDismLackPros12a"));
		objCasePROBNode.setAttribute("BTRL_DISMISSAL_TOTAL_19",JBSIS.eForms.getVal("txtOtherDismTrans12a"));
		objCasePROBNode.setAttribute("BTRL_ENTRY_JGMT_20",JBSIS.eForms.getVal("txtSummJudgmnt12a"));
		objCasePROBNode.setAttribute("BTRL_ENTRY_JGMT_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt12a"));
		objCasePROBNode.setAttribute("DISP_AFTER_COURT_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore12a"));
		objCasePROBNode.setAttribute("DISP_AFTER_COURT_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter12a"));
		objCasePROBNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore12a"));
		objCasePROBNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter12a"));
		objCasePROBNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf12a"));
		objCasePROBNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials12a"));
		objCasePROBNode.setAttribute("SUPERVISORY_ORDERS",JBSIS.eForms.getVal("txtSuperOrders12a"));
		form12aout.insertRecordNode(objCasePROBNode); 

/*********************** Record Holding Probate 12a ESTATE or TRUST or OTHER PROBATE EstTrust***********/

        var objCasePROB_EstTrustNode = new jsx3.xml.Document().loadXML("<record jsxid='PROBESTTRUST'/>");  
        objCasePROB_EstTrustNode.setAttribute("caseTypeCode","000025");
        objCasePROB_EstTrustNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros_EstTrust12a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans_EstTrust12a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt_EstTrust12a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt_EstTrust12a"))));
        objCasePROB_EstTrustNode.setAttribute("BTRL_DISMISSAL_TOTAL_18",JBSIS.eForms.getVal("txtDismLackPros_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("BTRL_DISMISSAL_TOTAL_19",JBSIS.eForms.getVal("txtOtherDismTrans_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("BTRL_ENTRY_JGMT_20",JBSIS.eForms.getVal("txtSummJudgmnt_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("BTRL_ENTRY_JGMT_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("DISP_AFTER_COURT_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("DISP_AFTER_COURT_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials_EstTrust12a"));
        objCasePROB_EstTrustNode.setAttribute("SUPERVISORY_ORDERS",JBSIS.eForms.getVal("txtSuperOrders_EstTrust12a"));
        form12aout.insertRecordNode(objCasePROB_EstTrustNode); 

 /*********************** Record Holding Probate 12a CONSERVATORSHIP or GUARDIANSHIP ConsGuard***********/
 
        var objCasePROB_ConsGuardNode = new jsx3.xml.Document().loadXML("<record jsxid='PROBCONSGUARD'/>");  
        objCasePROB_ConsGuardNode.setAttribute("caseTypeCode","000045");
        objCasePROB_ConsGuardNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros_ConsGuard12a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans_ConsGuard12a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt_ConsGuard12a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt_ConsGuard12a"))));
        objCasePROB_ConsGuardNode.setAttribute("BTRL_DISMISSAL_TOTAL_18",JBSIS.eForms.getVal("txtDismLackPros_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("BTRL_DISMISSAL_TOTAL_19",JBSIS.eForms.getVal("txtOtherDismTrans_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("BTRL_ENTRY_JGMT_20",JBSIS.eForms.getVal("txtSummJudgmnt_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("BTRL_ENTRY_JGMT_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("DISP_AFTER_COURT_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("DISP_AFTER_COURT_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials_ConsGuard12a"));
        objCasePROB_ConsGuardNode.setAttribute("SUPERVISORY_ORDERS",JBSIS.eForms.getVal("txtSuperOrders_ConsGuard12a"));
        form12aout.insertRecordNode(objCasePROB_ConsGuardNode); 
		
                   JBSISEForms.Cache.setDocument("form12aout",form12aout);
try{
                       service.callSubmit12aData();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
    }     ;
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};


   
// Defining callbacks
// Callback SAVE from dialog box 
  try{               
     service.genOutputDataSAVEfromDialog=function(objEvent){

		objEvent.target.getAncestorOfType(jsx3.gui.Dialog).doClose(); // close the parent dialog box
		service.genOutputData("Save");	

    }     ;
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};   

// Callback SUBMIT from dialog box 
  try{               
     service.genOutputDataSUBMITfromDialog=function(objEvent){
		
		objEvent.target.getAncestorOfType(jsx3.gui.Dialog).doClose(); // close the parent dialog box
		service.genOutputData("Submit");

    }     ;
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};   
   
   

// navigation.js Callback on SUBMIT with DIALOG 
  try{               
     service.genOutputDataSUBMITwDialog=function(objOperation){

	 // show WARNING dialog box to the user ONLY IF report in old format 
	if ( JBSIS.eForms.getVal("txtNumCasesFiled12a")!=0 ){
			// show dialog box to the user
		var objMsg = getServer().getBodyBlock().loadAndCache("components/dialogs/messageDialog.xml",true);//load and show msg dialog
		getServer().getJSXByName("lbl_msgTitle").setText("Data Notification");//set message title
		getServer().getJSXByName("lbl_msgText").setText("By clicking 'Submit', the data currently displayed in the PROBATE AND GUARDIANSHIP column will no longer be available. Select 'Save' to preserve this data and not submit changes to the JBSIS data warehouse."); //set message
		getServer().getJSXByName("btn_YES").setText("SAVE");
		getServer().getJSXByName("btn_NO").setText("SUBMIT");

		getServer().getJSXByName("btn_YES").subscribe(jsx3.gui.Interactive.EXECUTE, service.genOutputDataSAVEfromDialog);
		getServer().getJSXByName("btn_NO").subscribe(jsx3.gui.Interactive.EXECUTE, service.genOutputDataSUBMITfromDialog);
		
		objMsg.repaint(); 
	}//end-if
	else { // call plain old SUBMIT 
		service.genOutputData("Submit"); 
	}//end-if-else

    }     ;
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
    };
    }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

/********************Web Service call to send 12a Data*******************************************************/
    
    service.callSubmit12aData = function() {
            var objService = JBSISEForms.loadResource("sendForm12aData_xml");
            objService.setOperation("Submit12aData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit12aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit12aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit12aDataInvalid);

              objService.setEndpointURL(urlSubmit12aData);      
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit12aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form12aout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit12aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit12aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
	
/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 12a**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm12aData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS12aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS12aV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Setting value for Probate 12a******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm12aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm12aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                	            		
		service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled12a");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals12a");
		service.setFieldValue("BTRL_DISMISSAL_TOTAL_18","txtDismLackPros12a");
		service.setFieldValue("BTRL_DISMISSAL_TOTAL_19","txtOtherDismTrans12a");
		service.setFieldValue("BTRL_ENTRY_JGMT_20","txtSummJudgmnt12a");
		service.setFieldValue("BTRL_ENTRY_JGMT_21","txtAllOtherJudgmnt12a");
		service.setFieldValue("DISP_AFTER_COURT_TRIAL_TOTAL_24","txtByCourtBefore12a");
		service.setFieldValue("DISP_AFTER_COURT_TRIAL_TOTAL_27","txtByCourtAfter12a");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_25","txtByJuryBefore12a");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_28","txtByJuryAfter12a");
		service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf12a");
		service.setFieldValue("RETRIALS","txtRetrials12a");
		service.setFieldValue("SUPERVISORY_ORDERS","txtSuperOrders12a");

/********** UPDATED on 10-07-2014, 10-22-2014 By HDS for JBSIS CaseType Enhancement Project ***************/
		
            // hide old 12a format Probate column from view
        if ( JBSIS.eForms.getVal("txtNumCasesFiled12a")==0 ){
            getServer().getJSXByName("blkGridRightOne12a").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN, true);
        }
        else { 
			getServer().getJSXByName("blkGridRightOne12a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);
		}

/*********************** Setting value for SECOND 000025 Column - Probate 12a ESTATE or TRUST or OTHER PROBATE data ***************/

                  if(!boolImport)
                       service.objFuncParam = xmlForm12aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000025]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm12aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000025]",caseTypeNameSpace);
                                        
        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled_EstTrust12a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals_EstTrust12a");
        service.setFieldValue("BTRL_DISMISSAL_TOTAL_18","txtDismLackPros_EstTrust12a");
        service.setFieldValue("BTRL_DISMISSAL_TOTAL_19","txtOtherDismTrans_EstTrust12a");
        service.setFieldValue("BTRL_ENTRY_JGMT_20","txtSummJudgmnt_EstTrust12a");
        service.setFieldValue("BTRL_ENTRY_JGMT_21","txtAllOtherJudgmnt_EstTrust12a");
        service.setFieldValue("DISP_AFTER_COURT_TRIAL_TOTAL_24","txtByCourtBefore_EstTrust12a");
        service.setFieldValue("DISP_AFTER_COURT_TRIAL_TOTAL_27","txtByCourtAfter_EstTrust12a");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_25","txtByJuryBefore_EstTrust12a");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_28","txtByJuryAfter_EstTrust12a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf_EstTrust12a");
        service.setFieldValue("RETRIALS","txtRetrials_EstTrust12a");
        service.setFieldValue("SUPERVISORY_ORDERS","txtSuperOrders_EstTrust12a");

/*********************** Setting value for THIRD 000045 Column - Probate 12a CONSERVATORSHIP or GUARDIANSHIP data ***************/

                  if(!boolImport)
                       service.objFuncParam = xmlForm12aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000045]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm12aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000045]",caseTypeNameSpace);
                                        
        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled_ConsGuard12a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals_ConsGuard12a");
        service.setFieldValue("BTRL_DISMISSAL_TOTAL_18","txtDismLackPros_ConsGuard12a");
        service.setFieldValue("BTRL_DISMISSAL_TOTAL_19","txtOtherDismTrans_ConsGuard12a");
        service.setFieldValue("BTRL_ENTRY_JGMT_20","txtSummJudgmnt_ConsGuard12a");
        service.setFieldValue("BTRL_ENTRY_JGMT_21","txtAllOtherJudgmnt_ConsGuard12a");
        service.setFieldValue("DISP_AFTER_COURT_TRIAL_TOTAL_24","txtByCourtBefore_ConsGuard12a");
        service.setFieldValue("DISP_AFTER_COURT_TRIAL_TOTAL_27","txtByCourtAfter_ConsGuard12a");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_25","txtByJuryBefore_ConsGuard12a");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_28","txtByJuryAfter_ConsGuard12a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf_ConsGuard12a");
        service.setFieldValue("RETRIALS","txtRetrials_ConsGuard12a");
        service.setFieldValue("SUPERVISORY_ORDERS","txtSuperOrders_ConsGuard12a");		
    };
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
    };
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
	
/*************************************************************************************************************/
/***********************************Web service call to RETRIEVE 12a  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve12aData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting appropriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm12aData_xml");
            objService.setOperation("Retrieve12aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve12aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve12aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve12aDataInvalid);
    
    objService.setEndpointURL(urlFetch12aData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a successful service call******************************/
    service.onRetrieve12aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var responseXML = objEvent.target.getInboundDocument();
            appLogger.trace(responseXML);
            if(responseXML.selectSingleNode("//ns0:Status",statusNameSpace).getValue()==0){
                    service.setInputData(responseXML);
            }
            else {
                    if(boolImport)
                         //showInfoDialog("Import unsuccessful",responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
                         JBSIS.eForms.processException(responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
                    else
                        //showInfoDialog("Data unavailable",responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());
                         JBSIS.eForms.processException(responseXML.selectSingleNode("//ns0:Message",statusNameSpace).getValue());                        
            }
    };
    service.onRetrieve12aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve12aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);