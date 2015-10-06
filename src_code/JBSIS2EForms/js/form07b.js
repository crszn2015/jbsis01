jsx3.lang.Package.definePackage
(
    "form07b.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
     
try{
    service.getVal=function(fetchKey) {
            var keyValue = getServer().getJSXByName(fetchKey).getValue();
            if(keyValue!=''){
                    if(keyValue==0)
                            return "00";
                    else
                        return getServer().getJSXByName(fetchKey).getValue();
            }
            
            else {
                    return 0;
            }
    }
    service.getOperation=function(){ //*function to set appropriate operation {Save,Submit}
        if(service.objFuncParam=="Save") 
                return "Save";
         else if(service.objFuncParam=="Submit")
             return "Submit";
         else
              return "Save";
    }
    }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
try{
    service.setFieldValue=function(xmlNodeName,fieldName){
                if(service.objFuncParam!=null){
                        var xmlNode = service.objFuncParam.selectSingleNode(xmlNodeName);
                        var objField= getServer().getJSXByName(fieldName); 
    
                        if(xmlNode!=null && objField!=null)  {
                              var xmlNodeValue = xmlNode.getValue();
                              if(xmlNodeValue!=0) {
                                      objField.setValue(xmlNodeValue);
                               }
                                else if(xmlNodeValue=="00")  {
                                       objField.setValue(0);                        
                                }
                                   else if(xmlNodeValue==0) {
                                       objField.setValue('');
                                }
                }
            }
	}
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
                  
/**********************************************************************************************************/
/**********************************SEND DATA FOR 07B*******************************************************/
/**********************************************************************************************************/
     service.genOutputData=function(objOperation){ 
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form07bout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 11a data*/
                 /************************** Records for MANUAL Pre-JBSIS Felony *****************/
		var objCaseMPJFNode = new jsx3.xml.Document().loadXML("<record jsxid='MPJF'/>");   
		objCaseMPJFNode.setAttribute("caseTypeCode","000005");
		objCaseMPJFNode.setAttribute("FILINGS_TOTAL",service.getVal("txtAccused7b"));
		objCaseMPJFNode.setAttribute("FILINGS_TOTAL_HC_OTHER","0");
		objCaseMPJFNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals7b_AcquitDimiss7b"));
		objCaseMPJFNode.setAttribute("DISPOSITIONS_TOTAL_2",service.getVal("txtDispositionTotals7b_Felony7b"));
		objCaseMPJFNode.setAttribute("BTRL_TRANSFER_TOTAL_MANUAL",service.getVal("txtTransferCourt7b"));
		objCaseMPJFNode.setAttribute("BTRL_DISM_TOTAL",service.getVal("txtDismissed7b"));
		objCaseMPJFNode.setAttribute("BTRL_SENT_PLEA_NOLO_1",service.getVal("txtConvictedPleaGuilty7b_Felony7b"));
		objCaseMPJFNode.setAttribute("BTRL_SENT_PLEA_NOLO_2","0");
		objCaseMPJFNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_25",service.getVal("txtOnTranscript7b_AcquitDimiss7b"));
		objCaseMPJFNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_27",service.getVal("txtOtherBefore7b_AcquitDimiss7b"));
		objCaseMPJFNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_31",service.getVal("txtByCourtAfter7b_AcquitDimiss7b"));
		objCaseMPJFNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_25_1",service.getVal("txtOnTranscript7b_Felony7b"));
		objCaseMPJFNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_25_2","0");
		objCaseMPJFNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_27_1",service.getVal("txtOtherBefore7b_Felony7b"));
		objCaseMPJFNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_27_2","0");
		objCaseMPJFNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_31_1",service.getVal("txtByCourtAfter7b_Felony7b"));
		objCaseMPJFNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_31_2","0");
		objCaseMPJFNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_28_1",service.getVal("txtByJury7b_AcquitDimiss7b"));
		objCaseMPJFNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_28_2",service.getVal("txtByJury7b_Felony7b"));
		objCaseMPJFNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_32_1",service.getVal("txtByJuryAfter7b_AcquitDimiss7b"));
		objCaseMPJFNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_32_2",service.getVal("txtByJuryAfter7b_Felony7b"));
		objCaseMPJFNode.setAttribute("DISP_BHRG_CRIMINAL","0");
		objCaseMPJFNode.setAttribute("DISP_BHRG_OTHER","0");
		objCaseMPJFNode.setAttribute("DISP_AHRG_CRIMINAL","0");
		objCaseMPJFNode.setAttribute("DISP_AHRG_OTHER","0");
		objCaseMPJFNode.setAttribute("DISP_COMP_0_30_DAYS",service.getVal("txtSecIDays0to307b_SecIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("DISP_COMP_31_60_DAYS",service.getVal("txtSecIDays31to607b_SecIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("DISP_COMP_61_120_DAYS",service.getVal("txtSecIDays61to1207b_SecIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("DISP_COMP_121_180_DAYS",service.getVal("txtSecIDays121to1807b_SecIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("DISP_COMP_181_365_DAYS",service.getVal("txtSecIDays181to3657b_SecIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("DISP_COMP_GE_366_DAYS",service.getVal("txtSecIDays365+7b_SecIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("DISP_COMP_TOTAL",service.getVal("txtSecIDaysTotal7b_SecIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("DISP_INFO_0_30_DAYS",service.getVal("txtSecIDays0to307b_SecIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("DISP_INFO_31_60_DAYS",service.getVal("txtSecIDays31to607b_SecIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("DISP_INFO_61_120_DAYS",service.getVal("txtSecIDays61to1207b_SecIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("DISP_INFO_121_180_DAYS",service.getVal("txtSecIDays121to1807b_SecIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("DISP_INFO_181_365_DAYS",service.getVal("txtSecIDays181to3657b_SecIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("DISP_INFO_GE_366_DAYS",service.getVal("txtSecIDays365+7b_SecIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("DISP_INFO_TOTAL",service.getVal("txtSecIDaysTotal7b_SecIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_0_30_DAYS_INFO",service.getVal("txtSecIIDays0to307b_SecIIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_31_60_DAYS_INFO",service.getVal("txtSecIIDays31to607b_SecIIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_61_120_DAYS_INFO",service.getVal("txtSecIIDays61to1207b_SecIIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_121_180_DAYS_INFO",service.getVal("txtSecIIDays121to1807b_SecIIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_181_365_DAYS_INFO",service.getVal("txtSecIIDays181to3657b_SecIIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_GE_366_DAYS_INFO",service.getVal("txtSecIIDays365+7b_SecIIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_INFO_TOTAL",service.getVal("txtSecIIDaysTotal7b_SecIIArrOnInfo7b"));
		objCaseMPJFNode.setAttribute("PEND_0_30_DAYS_COMP",service.getVal("txtSecIIDays0to307b_SecIIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("PEND_31_60_DAYS_COMP",service.getVal("txtSecIIDays31to607b_SecIIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("PEND_61_120_DAYS_COMP",service.getVal("txtSecIIDays61to1207b_SecIIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("PEND_121_180_DAYS_COMP",service.getVal("txtSecIIDays121to1807b_SecIIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("PEND_181_365_DAYS_COMP",service.getVal("txtSecIIDays181to3657b_SecIIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("PEND_GE_366_DAYS_COMP",service.getVal("txtSecIIDays365+7b_SecIIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("PEND_COMP_TOTAL",service.getVal("txtSecIIDaysTotal7b_SecIIArrOnComp7b"));
		objCaseMPJFNode.setAttribute("PC995_MOTION_HRG",service.getVal("txtSec9957b"));
		objCaseMPJFNode.setAttribute("DIVERSION_HRG","0");
		objCaseMPJFNode.setAttribute("PC1538_5_MOTION",service.getVal("txtSec153857b"));
		objCaseMPJFNode.setAttribute("RETRIAL_OTHER",service.getVal("txtRetrials7b"));
		objCaseMPJFNode.setAttribute("POSTDISP_HRG_TOTAL",service.getVal("txtProbationHearings7b"));
		objCaseMPJFNode.setAttribute("STTLMT_CONF",service.getVal("txtPreConferences7b"));
		try {
               objCaseMPJFNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL", new Number(new Number(service.getVal("txtDismissed7b"))+new Number(service.getVal("txtTransferCourt7b"))+new Number(service.getVal("txtConvictedPleaGuilty7b_Felony7b"))));
            }catch(e){e = jsx3.lang.NativeError.wrap(e); alert(e); }

        

		form07bout.insertRecordNode(objCaseMPJFNode); 
		
		
                   /************************************** Records for MANUAL Reduced to misdemeanor *****/
		
		var objCaseMRTMNode = new jsx3.xml.Document().loadXML("<record jsxid='MRTM'/>");   
		objCaseMRTMNode.setAttribute("caseTypeCode","000105");
		objCaseMRTMNode.setAttribute("FILINGS_TOTAL","0");
		objCaseMRTMNode.setAttribute("FILINGS_TOTAL_HC_OTHER","0");
		objCaseMRTMNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals7b_17b7b"));
		objCaseMRTMNode.setAttribute("DISPOSITIONS_TOTAL_2",service.getVal("txtDispositionTotals7b_Other7b"));
		objCaseMRTMNode.setAttribute("BTRL_TRANSFER_TOTAL_MANUAL","0");
		objCaseMRTMNode.setAttribute("BTRL_DISM_TOTAL","0");
		objCaseMRTMNode.setAttribute("BTRL_SENT_PLEA_NOLO_1",service.getVal("txtConvictedPleaGuilty7b_17b7b"));
		objCaseMRTMNode.setAttribute("BTRL_SENT_PLEA_NOLO_2",service.getVal("txtConvictedPleaGuilty7b_Other7b"));
		objCaseMRTMNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_25","0");
		objCaseMRTMNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_27","0");
		objCaseMRTMNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_31","0");
		objCaseMRTMNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_25_1",service.getVal("txtOnTranscript7b_17b7b"));
		objCaseMRTMNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_25_2",service.getVal("txtOnTranscript7b_Other7b"));
		objCaseMRTMNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_27_1",service.getVal("txtOtherBefore7b_17b7b"));
		objCaseMRTMNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_27_2",service.getVal("txtOtherBefore7b_Other7b"));
		objCaseMRTMNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_31_1",service.getVal("txtByCourtAfter7b_17b7b"));
		objCaseMRTMNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_31_2",service.getVal("txtByCourtAfter7b_Other7b"));
		objCaseMRTMNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_28_1",service.getVal("txtByJury7b_17b7b"));
		objCaseMRTMNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_28_2",service.getVal("txtByJury7b_Other7b"));
		objCaseMRTMNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_32_1",service.getVal("txtByJuryAfter7b_17b7b"));
		objCaseMRTMNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_32_2",service.getVal("txtByJuryAfter7b_Other7b"));
		objCaseMRTMNode.setAttribute("DISP_BHRG_CRIMINAL","0");
		objCaseMRTMNode.setAttribute("DISP_BHRG_OTHER","0");
		objCaseMRTMNode.setAttribute("DISP_AHRG_CRIMINAL","0");
		objCaseMRTMNode.setAttribute("DISP_AHRG_OTHER","0");
		objCaseMRTMNode.setAttribute("DISP_COMP_0_30_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_COMP_31_60_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_COMP_61_120_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_COMP_121_180_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_COMP_181_365_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_COMP_GE_366_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_COMP_TOTAL","0");
		objCaseMRTMNode.setAttribute("DISP_INFO_0_30_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_INFO_31_60_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_INFO_61_120_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_INFO_121_180_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_INFO_181_365_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_INFO_GE_366_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_INFO_TOTAL","0");
		objCaseMRTMNode.setAttribute("PEND_0_30_DAYS_INFO","0");
		objCaseMRTMNode.setAttribute("PEND_31_60_DAYS_INFO","0");
		objCaseMRTMNode.setAttribute("PEND_61_120_DAYS_INFO","0");
		objCaseMRTMNode.setAttribute("PEND_121_180_DAYS_INFO","0");
		objCaseMRTMNode.setAttribute("PEND_181_365_DAYS_INFO","0");
		objCaseMRTMNode.setAttribute("PEND_GE_366_DAYS_INFO","0");
		objCaseMRTMNode.setAttribute("PEND_INFO_TOTAL","0");
		objCaseMRTMNode.setAttribute("PEND_0_30_DAYS_COMP","0");
		objCaseMRTMNode.setAttribute("PEND_31_60_DAYS_COMP","0");
		objCaseMRTMNode.setAttribute("PEND_61_120_DAYS_COMP","0");
		objCaseMRTMNode.setAttribute("PEND_121_180_DAYS_COMP","0");
		objCaseMRTMNode.setAttribute("PEND_181_365_DAYS_COMP","0");
		objCaseMRTMNode.setAttribute("PEND_GE_366_DAYS_COMP","0");
		objCaseMRTMNode.setAttribute("PEND_COMP_TOTAL","0");
		objCaseMRTMNode.setAttribute("PC995_MOTION_HRG","0");
		objCaseMRTMNode.setAttribute("DIVERSION_HRG","0");
		objCaseMRTMNode.setAttribute("PC1538_5_MOTION","0");
		objCaseMRTMNode.setAttribute("RETRIAL_OTHER","0");
		objCaseMRTMNode.setAttribute("POSTDISP_HRG_TOTAL","0");
		objCaseMRTMNode.setAttribute("STTLMT_CONF","0");
            try {
                objCaseMRTMNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL", new Number(new Number(service.getVal("txtConvictedPleaGuilty7b_17b7b"))+new Number(service.getVal("txtConvictedPleaGuilty7b_Other7b"))));
            }catch(e){e = jsx3.lang.NativeError.wrap(e); alert(e); }
		form07bout.insertRecordNode(objCaseMRTMNode); 
		
		
            /************************* Record for MANUAL Habeas Corpus *********************************/
		
		var objCaseMHCNode = new jsx3.xml.Document().loadXML("<record jsxid='MHC'/>");   
		objCaseMHCNode.setAttribute("caseTypeCode","000115");
		objCaseMHCNode.setAttribute("FILINGS_TOTAL",service.getVal("txtFILINGS7b_CRIMINALS7b"));
		objCaseMHCNode.setAttribute("FILINGS_TOTAL_HC_OTHER",service.getVal("txtFILINGS7b_OTHERS7b"));
		objCaseMHCNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotal7b_CRIMINALS7b"));
		objCaseMHCNode.setAttribute("DISPOSITIONS_TOTAL_2",service.getVal("txtDispositionTotal7b_OTHERS7b"));
		objCaseMHCNode.setAttribute("BTRL_TRANSFER_TOTAL_MANUAL","0");
		objCaseMHCNode.setAttribute("BTRL_DISM_TOTAL","0");
		objCaseMHCNode.setAttribute("BTRL_SENT_PLEA_NOLO_1","0");
		objCaseMHCNode.setAttribute("BTRL_SENT_PLEA_NOLO_2","0");
		objCaseMHCNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_25","0");
		objCaseMHCNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_27","0");
		objCaseMHCNode.setAttribute("ATRL_DISM_ACQ_TOTAL_MANUAL_31","0");
		objCaseMHCNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_25_1","0");
		objCaseMHCNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_25_2","0");
		objCaseMHCNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_27_1","0");
		objCaseMHCNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_27_2","0");
		objCaseMHCNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_31_1","0");
		objCaseMHCNode.setAttribute("ATRL_CONVICTION_TOTAL_MANUAL_31_2","0");
		objCaseMHCNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_28_1","0");
		objCaseMHCNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_28_2","0");
		objCaseMHCNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_32_1","0");
		objCaseMHCNode.setAttribute("DISP_AFTER_JURY_TRL_TOTAL_32_2","0");
		objCaseMHCNode.setAttribute("DISP_BHRG_CRIMINAL",service.getVal("txtBeforeHearing7b_CRIMINALS7b"));
		objCaseMHCNode.setAttribute("DISP_BHRG_OTHER",service.getVal("txtBeforeHearing7b_OTHERS7b"));
		objCaseMHCNode.setAttribute("DISP_AHRG_CRIMINAL",service.getVal("txtAfterHearing7b_CRIMINALS7b"));
		objCaseMHCNode.setAttribute("DISP_AHRG_OTHER",service.getVal("txtAfterHearing7b_OTHERS7b"));
		objCaseMHCNode.setAttribute("DISP_COMP_0_30_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_COMP_31_60_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_COMP_61_120_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_COMP_121_180_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_COMP_181_365_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_COMP_GE_366_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_COMP_TOTAL","0");
		objCaseMHCNode.setAttribute("DISP_INFO_0_30_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_INFO_31_60_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_INFO_61_120_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_INFO_121_180_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_INFO_181_365_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_INFO_GE_366_DAYS","0");
		objCaseMHCNode.setAttribute("DISP_INFO_TOTAL","0");
		objCaseMHCNode.setAttribute("PEND_0_30_DAYS_INFO","0");
		objCaseMHCNode.setAttribute("PEND_31_60_DAYS_INFO","0");
		objCaseMHCNode.setAttribute("PEND_61_120_DAYS_INFO","0");
		objCaseMHCNode.setAttribute("PEND_121_180_DAYS_INFO","0");
		objCaseMHCNode.setAttribute("PEND_181_365_DAYS_INFO","0");
		objCaseMHCNode.setAttribute("PEND_GE_366_DAYS_INFO","0");
		objCaseMHCNode.setAttribute("PEND_INFO_TOTAL","0");
		objCaseMHCNode.setAttribute("PEND_0_30_DAYS_COMP","0");
		objCaseMHCNode.setAttribute("PEND_31_60_DAYS_COMP","0");
		objCaseMHCNode.setAttribute("PEND_61_120_DAYS_COMP","0");
		objCaseMHCNode.setAttribute("PEND_121_180_DAYS_COMP","0");
		objCaseMHCNode.setAttribute("PEND_181_365_DAYS_COMP","0");
		objCaseMHCNode.setAttribute("PEND_GE_366_DAYS_COMP","0");
		objCaseMHCNode.setAttribute("PEND_COMP_TOTAL","0");
		objCaseMHCNode.setAttribute("PC995_MOTION_HRG","0");
		objCaseMHCNode.setAttribute("DIVERSION_HRG","0");
		objCaseMHCNode.setAttribute("PC1538_5_MOTION","0");
		objCaseMHCNode.setAttribute("RETRIAL_OTHER","0");
		objCaseMHCNode.setAttribute("POSTDISP_HRG_TOTAL","0");
		objCaseMHCNode.setAttribute("STTLMT_CONF","0");

		form07bout.insertRecordNode(objCaseMHCNode); 
				
                   JBSISEForms.Cache.setDocument("form07bout",form07bout);
try{
                   service.callSubmit07bData();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
    }     
/********************Web Service call to send 07b Data*******************************************************/
    //call this method to begin the service call (JBSIS.eForms.Nav.callSubmit07bData();)
    service.callSubmit07bData = function() {
      var objService = JBSISEForms.loadResource("sendForm07bData_xml");
      objService.setOperation("Submit07bData");
      //subscribe and call
      objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit07bDataSuccess);
      objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit07bDataError);
      objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit07bDataInvalid);
      objService.setEndpointURL(urlSubmit07bData);     
     objService.doCall();
        appLogger.trace(objService.getOutboundDocument());
    };
    service.onSubmit07bDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      var responseXML = objEvent.target.getInboundDocument();
      var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
      var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  

     appLogger.trace(responseXML);
                        
      if(statusNode.getValue()==0) {
          JBSISEForms.Cache.clearById("form07bout");
	            boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
      }
                       
      else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
      }
    };
    service.onSubmit07bDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
	var myStatus = objEvent.target.getRequest().getStatus();
	var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit07bDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  
/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 07B**********************************************/
/*************************************************************************************************/
   
  service.setInputData=function(xmlform07bData){

                  if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS07bV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS07bV2_INT/1.0/xsd'";
                }
                            
/************************** Records for MANUAL Pre-JBSIS Felony *****************/
                  if(!boolImport)
                       service.objFuncParam = xmlform07bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlform07bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
 	            		
		service.setFieldValue("FILINGS_TOTAL","txtAccused7b");
		service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals7b_AcquitDimiss7b");
		service.setFieldValue("DISPOSITIONS_TOTAL_2","txtDispositionTotals7b_Felony7b");
		service.setFieldValue("BTRL_TRANSFER_TOTAL_MANUAL","txtTransferCourt7b");
		service.setFieldValue("BTRL_DISM_TOTAL","txtDismissed7b");
		service.setFieldValue("BTRL_SENT_PLEA_NOLO_1","txtConvictedPleaGuilty7b_Felony7b");
		service.setFieldValue("ATRL_DISM_ACQ_TOTAL_MANUAL_25","txtOnTranscript7b_AcquitDimiss7b");
		service.setFieldValue("ATRL_DISM_ACQ_TOTAL_MANUAL_27","txtOtherBefore7b_AcquitDimiss7b");
		service.setFieldValue("ATRL_DISM_ACQ_TOTAL_MANUAL_31","txtByCourtAfter7b_AcquitDimiss7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_25_1","txtOnTranscript7b_Felony7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_27_1","txtOtherBefore7b_Felony7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_31_1","txtByCourtAfter7b_Felony7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_28_1","txtByJury7b_AcquitDimiss7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_28_2","txtByJury7b_Felony7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_32_1","txtByJuryAfter7b_AcquitDimiss7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_32_2","txtByJuryAfter7b_Felony7b");
		service.setFieldValue("DISP_COMP_0_30_DAYS","txtSecIDays0to307b_SecIArrOnComp7b");
		service.setFieldValue("DISP_COMP_31_60_DAYS","txtSecIDays31to607b_SecIArrOnComp7b");
		service.setFieldValue("DISP_COMP_61_120_DAYS","txtSecIDays61to1207b_SecIArrOnComp7b");
		service.setFieldValue("DISP_COMP_121_180_DAYS","txtSecIDays121to1807b_SecIArrOnComp7b");
		service.setFieldValue("DISP_COMP_181_365_DAYS","txtSecIDays181to3657b_SecIArrOnComp7b");
		service.setFieldValue("DISP_COMP_GE_366_DAYS","txtSecIDays365+7b_SecIArrOnComp7b");
		service.setFieldValue("DISP_COMP_TOTAL","txtSecIDaysTotal7b_SecIArrOnComp7b");
		service.setFieldValue("DISP_INFO_0_30_DAYS","txtSecIDays0to307b_SecIArrOnInfo7b");
		service.setFieldValue("DISP_INFO_31_60_DAYS","txtSecIDays31to607b_SecIArrOnInfo7b");
		service.setFieldValue("DISP_INFO_61_120_DAYS","txtSecIDays61to1207b_SecIArrOnInfo7b");
		service.setFieldValue("DISP_INFO_121_180_DAYS","txtSecIDays121to1807b_SecIArrOnInfo7b");
		service.setFieldValue("DISP_INFO_181_365_DAYS","txtSecIDays181to3657b_SecIArrOnInfo7b");
		service.setFieldValue("DISP_INFO_GE_366_DAYS","txtSecIDays365+7b_SecIArrOnInfo7b");
		service.setFieldValue("DISP_INFO_TOTAL","txtSecIDaysTotal7b_SecIArrOnInfo7b");
		service.setFieldValue("PEND_0_30_DAYS_INFO","txtSecIIDays0to307b_SecIIArrOnInfo7b");
		service.setFieldValue("PEND_31_60_DAYS_INFO","txtSecIIDays31to607b_SecIIArrOnInfo7b");
		service.setFieldValue("PEND_61_120_DAYS_INFO","txtSecIIDays61to1207b_SecIIArrOnInfo7b");
		service.setFieldValue("PEND_121_180_DAYS_INFO","txtSecIIDays121to1807b_SecIIArrOnInfo7b");
		service.setFieldValue("PEND_181_365_DAYS_INFO","txtSecIIDays181to3657b_SecIIArrOnInfo7b");
		service.setFieldValue("PEND_GE_366_DAYS_INFO","txtSecIIDays365+7b_SecIIArrOnInfo7b");
		service.setFieldValue("PEND_INFO_TOTAL","txtSecIIDaysTotal7b_SecIIArrOnInfo7b");
		service.setFieldValue("PEND_0_30_DAYS_COMP","txtSecIIDays0to307b_SecIIArrOnComp7b");
		service.setFieldValue("PEND_31_60_DAYS_COMP","txtSecIIDays31to607b_SecIIArrOnComp7b");
		service.setFieldValue("PEND_61_120_DAYS_COMP","txtSecIIDays61to1207b_SecIIArrOnComp7b");
		service.setFieldValue("PEND_121_180_DAYS_COMP","txtSecIIDays121to1807b_SecIIArrOnComp7b");
		service.setFieldValue("PEND_181_365_DAYS_COMP","txtSecIIDays181to3657b_SecIIArrOnComp7b");
		service.setFieldValue("PEND_GE_366_DAYS_COMP","txtSecIIDays365+7b_SecIIArrOnComp7b");
		service.setFieldValue("PEND_COMP_TOTAL","txtSecIIDaysTotal7b_SecIIArrOnComp7b");
		service.setFieldValue("PC995_MOTION_HRG","txtSec9957b");
		service.setFieldValue("DIVERSION_HRG","txtDefDiverted7b");
		service.setFieldValue("PC1538_5_MOTION","txtSec153857b");
		service.setFieldValue("RETRIAL_OTHER","txtRetrials7b");
		service.setFieldValue("POSTDISP_HRG_TOTAL","txtProbationHearings7b");
		service.setFieldValue("STTLMT_CONF","txtPreConferences7b");
 
/************************************** Records for MANUAL Reduced to misdemeanor *****/
                  if(!boolImport)        
                    service.objFuncParam = xmlform07bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000105]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlform07bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000105]",caseTypeNameSpace);
		service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals7b_17b7b");
		service.setFieldValue("DISPOSITIONS_TOTAL_2","txtDispositionTotals7b_Other7b");
		service.setFieldValue("BTRL_SENT_PLEA_NOLO_1","txtConvictedPleaGuilty7b_17b7b");
		service.setFieldValue("BTRL_SENT_PLEA_NOLO_2","txtConvictedPleaGuilty7b_Other7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_25_1","txtOnTranscript7b_17b7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_25_2","txtOnTranscript7b_Other7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_27_1","txtOtherBefore7b_17b7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_27_2","txtOtherBefore7b_Other7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_31_1","txtByCourtAfter7b_17b7b");
		service.setFieldValue("ATRL_CONVICTION_TOTAL_MANUAL_31_2","txtByCourtAfter7b_Other7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_28_1","txtByJury7b_17b7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_28_2","txtByJury7b_Other7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_32_1","txtByJuryAfter7b_17b7b");
		service.setFieldValue("DISP_AFTER_JURY_TRL_TOTAL_32_2","txtByJuryAfter7b_Other7b");
/************************* Record for MANUAL Habeas Corpus *********************************/
                  if(!boolImport)
                        service.objFuncParam = xmlform07bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()= 000115]",caseTypeNameSpace);
                  else
                        service.objFuncParam = xmlform07bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()= 000115]",caseTypeNameSpace);
                
		service.setFieldValue("FILINGS_TOTAL","txtFILINGS7b_CRIMINALS7b");
		service.setFieldValue("FILINGS_TOTAL_HC_OTHER","txtFILINGS7b_OTHERS7b");
		service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotal7b_CRIMINALS7b");
		service.setFieldValue("DISPOSITIONS_TOTAL_2","txtDispositionTotal7b_OTHERS7b");
		service.setFieldValue("DISP_BHRG_CRIMINAL","txtBeforeHearing7b_CRIMINALS7b");
		service.setFieldValue("DISP_BHRG_OTHER","txtBeforeHearing7b_OTHERS7b");
		service.setFieldValue("DISP_AHRG_CRIMINAL","txtAfterHearing7b_CRIMINALS7b");
		service.setFieldValue("DISP_AHRG_OTHER","txtAfterHearing7b_OTHERS7b");

                 if(boolImport)
                    JBSIS.eForms.doTotalByPosition("txtDispositionTotals7b_Felony7b","blkGridRight7b");

    }
	
/*************************************************************************************************************/
/***********************************Web service call to RETRIEVE 07b  Data************************************/
/*************************************************************************************************************/
 
    //call this method to begin the service call (JBSIS.eForms.Nav.callRetrieve07aData();)
    service.callRetrieve07bData = function(doImport) {            
            boolImport = doImport;
            if(boolImport)
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm07bData_xml");
            objService.setOperation("Retrieve07bData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve07bDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve07bDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve07bDataInvalid);
    
    objService.setEndpointURL(urlFetch07bData);    	
    objService.doCall();
        appLogger.trace(objService.getOutboundDocument());
    
    };
    service.onRetrieve07bDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var responseXML = objEvent.target.getInboundDocument();
            appLogger.trace(responseXML);

            if(responseXML.selectSingleNode("//ns0:Status",statusNameSpace).getValue()==0){
                    form07b.service.setInputData(responseXML);
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
    service.onRetrieve07bDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve07bDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);