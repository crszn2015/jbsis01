jsx3.lang.Package.definePackage
(
    "form07a.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
try{
/*****Function to GET text box values*********************************/
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
/*******Function to set appropriate operation {Save,Submit}*************************/
    service.getOperation=function(){ 
        if(service.objFuncParam=="Save") 
                return "Save";
         else if(service.objFuncParam=="Submit")
             return "Submit";
         else
              return "Save";
    }
    }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
try{
/*********Function to SET text box values************************************/
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
/**********************************SEND DATA FOR 07A*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form07aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 11a data*/
/*********************** Record Holding MANUAL FELONY******************************************/
		
		var objCaseMFNode = new jsx3.xml.Document().loadXML("<record jsxid='MF'/>");   
		objCaseMFNode.setAttribute("caseTypeCode","000005");
		objCaseMFNode.setAttribute("BEGIN_PENDING","0");
		objCaseMFNode.setAttribute("FILINGS_TOTAL",service.getVal("txtAccused7a"));
		objCaseMFNode.setAttribute("RESTORED_CRT_CNTRL","0");
		objCaseMFNode.setAttribute("REMOVED_CRT_CNTRL","0");
		objCaseMFNode.setAttribute("END_PENDING","0");
		objCaseMFNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("DISPOSITIONS_TOTAL_2","0");
		objCaseMFNode.setAttribute("DISP_BEFORE_PRELIM_HRG_TOTAL_1","0");
		objCaseMFNode.setAttribute("DISP_BEFORE_PRELIM_HRG_TOTAL_2","0");
		objCaseMFNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL",service.getVal("txtTransferred7a"));
		objCaseMFNode.setAttribute("BHRG_DISM_TOTAL_18",service.getVal("txtWithoutAppearance7a"));
		objCaseMFNode.setAttribute("BHRG_DISM_TOTAL_19",service.getVal("txtAfterAppearance7a"));
		objCaseMFNode.setAttribute("BHRG_SENT_PLEA_NOLO_1","0");
		objCaseMFNode.setAttribute("BHRG_SENT_PLEA_NOLO_2","0");
		objCaseMFNode.setAttribute("BHRG_CERT_PLEA_GUILTY_NOLO",service.getVal("txtPleasOfGuilty7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_27_1",service.getVal("txtAcquittedDismissed7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_27_2","0");
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_31_1","0");
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_31_2","0");
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_35_1",service.getVal("txtAcquittedDismissedAfter7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_35_2","0");
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_38_1","0");
		objCaseMFNode.setAttribute("AHRG_DISM_TOTAL_38_2","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_28_1","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_28_2","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_32_1","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_32_2","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_36_1","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_36_2","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_39_1","0");
		objCaseMFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_39_2","0");
		objCaseMFNode.setAttribute("AHRG_HELDTOANSW_28",service.getVal("txtMisdemeanorsFelonies7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("AHRG_HELDTOANSW_36",service.getVal("txtMisdemeanorsFeloniesAfter7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("DISP_BHRG","0");
		objCaseMFNode.setAttribute("DISP_0_30_DAYS","0");
		objCaseMFNode.setAttribute("DISP_31_45_DAYS","0");
		objCaseMFNode.setAttribute("DISP_46_90_DAYS","0");
		objCaseMFNode.setAttribute("DISP_GE_91_DAYS","0");
		objCaseMFNode.setAttribute("PREDISP_HRG_TOTAL",service.getVal("txtSection153857a_SubFelonies7a"));
		objCaseMFNode.setAttribute("PC1538_5_MOTION_1",service.getVal("txtSection153857a_SubFelonies7a"));
		objCaseMFNode.setAttribute("PC1538_5_MOTION_2","0");
		objCaseMFNode.setAttribute("PREDISP_OTHER_HRG_1",service.getVal("txtFailure2AppearHearing7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("PREDISP_OTHER_HRG_2","0");
		objCaseMFNode.setAttribute("DEF_DIVERTED_MANUAL_1",service.getVal("txtDefendentsDiverted7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("DEF_DIVERTED_MANUAL_2","0");
		objCaseMFNode.setAttribute("POSTDISP_HRG_TOTAL_1",service.getVal("txtProbationHearings7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("POSTDISP_HRG_TOTAL_2","0");
		objCaseMFNode.setAttribute("PROB_SUPRV_HRG_1",service.getVal("txtProbationHearings7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("PROB_SUPRV_HRG_2","0");
		objCaseMFNode.setAttribute("STTLMT_CONF_1",service.getVal("txtPretrialSettlements7a_SubFelonies7a"));
		objCaseMFNode.setAttribute("STTLMT_CONF_2","0");
		form07aout.insertRecordNode(objCaseMFNode); 
		
		
/******************************Record Holding MANUAL REDUCED TO MISDEMEANOR******************************/
		
		var objCaseMRTMNode = new jsx3.xml.Document().loadXML("<record jsxid='MRTM'/>");   
		objCaseMRTMNode.setAttribute("caseTypeCode","000105");
		objCaseMRTMNode.setAttribute("BEGIN_PENDING","0");
		objCaseMRTMNode.setAttribute("FILINGS_TOTAL","0");
		objCaseMRTMNode.setAttribute("RESTORED_CRT_CNTRL","0");
		objCaseMRTMNode.setAttribute("REMOVED_CRT_CNTRL","0");
		objCaseMRTMNode.setAttribute("END_PENDING","0");
		objCaseMRTMNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("DISPOSITIONS_TOTAL_2",service.getVal("txtDispositionTotals7a_Others7a"));
		objCaseMRTMNode.setAttribute("DISP_BEFORE_PRELIM_HRG_TOTAL_1",service.getVal("txtPleasOfGuilty7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("DISP_BEFORE_PRELIM_HRG_TOTAL_2",service.getVal("txtPleasOfGuilty7a_Others7a"));
		objCaseMRTMNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL","0");
		objCaseMRTMNode.setAttribute("BHRG_DISM_TOTAL_18","0");
		objCaseMRTMNode.setAttribute("BHRG_DISM_TOTAL_19","0");
		objCaseMRTMNode.setAttribute("BHRG_SENT_PLEA_NOLO_1",service.getVal("txtPleasOfGuilty7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("BHRG_SENT_PLEA_NOLO_2",service.getVal("txtPleasOfGuilty7a_Others7a"));
		objCaseMRTMNode.setAttribute("BHRG_CERT_PLEA_GUILTY_NOLO","0");
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_27_1",service.getVal("txtAcquittedDismissed7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_27_2",service.getVal("txtAcquittedDismissed7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_31_1",service.getVal("txtAcqttedDismsdByJury7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_31_2",service.getVal("txtAcqttedDismsdByJury7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_35_1",service.getVal("txtAcquittedDismissedAfter7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_35_2",service.getVal("txtAcquittedDismissedAfter7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_38_1",service.getVal("txtAcqttedDismsdByJuryAfter7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_DISM_TOTAL_38_2",service.getVal("txtAcqttedDismsdByJuryAfter7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_28_1",service.getVal("txtMisdemeanorsFelonies7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_28_2",service.getVal("txtMisdemeanorsFelonies7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_32_1",service.getVal("txtConvicted7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_32_2",service.getVal("txtConvicted7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_36_1",service.getVal("txtMisdemeanorsFeloniesAfter7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_36_2",service.getVal("txtMisdemeanorsFeloniesAfter7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_39_1",service.getVal("txtConvictedAfter7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_39_2",service.getVal("txtConvictedAfter7a_Others7a"));
		objCaseMRTMNode.setAttribute("AHRG_HELDTOANSW_28","0");
		objCaseMRTMNode.setAttribute("AHRG_HELDTOANSW_36","0");
		objCaseMRTMNode.setAttribute("DISP_BHRG","0");
		objCaseMRTMNode.setAttribute("DISP_0_30_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_31_45_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_46_90_DAYS","0");
		objCaseMRTMNode.setAttribute("DISP_GE_91_DAYS","0");
		objCaseMRTMNode.setAttribute("PREDISP_HRG_TOTAL","0");
		objCaseMRTMNode.setAttribute("PC1538_5_MOTION_1",service.getVal("txtSection153857a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("PC1538_5_MOTION_2",service.getVal("txtSection153857a_Others7a"));
		objCaseMRTMNode.setAttribute("PREDISP_OTHER_HRG_1",service.getVal("txtFailure2AppearHearing7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("PREDISP_OTHER_HRG_2",service.getVal("txtFailure2AppearHearing7a_Others7a"));
		objCaseMRTMNode.setAttribute("DEF_DIVERTED_MANUAL_1",service.getVal("txtDefendentsDiverted7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("DEF_DIVERTED_MANUAL_2",service.getVal("txtDefendentsDiverted7a_Others7a"));
		objCaseMRTMNode.setAttribute("POSTDISP_HRG_TOTAL_1",service.getVal("txtProbationHearings7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("POSTDISP_HRG_TOTAL_2",service.getVal("txtProbationHearings7a_Others7a"));
		objCaseMRTMNode.setAttribute("PROB_SUPRV_HRG_1",service.getVal("txtProbationHearings7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("PROB_SUPRV_HRG_2",service.getVal("txtProbationHearings7a_Others7a"));
		objCaseMRTMNode.setAttribute("STTLMT_CONF_1",service.getVal("txtPretrialSettlements7a_17b(5)PC7a"));
		objCaseMRTMNode.setAttribute("STTLMT_CONF_2",service.getVal("txtPretrialSettlements7a_Others7a"));
		form07aout.insertRecordNode(objCaseMRTMNode); 
		
		
/********************* Record Holding MANUAL GENERAL FELONY*************************************/
		
		var objCaseMGFNode = new jsx3.xml.Document().loadXML("<record jsxid='MGF'/>");   
		objCaseMGFNode.setAttribute("caseTypeCode","000003");
		objCaseMGFNode.setAttribute("BEGIN_PENDING",service.getVal("txtBegningPendingCases7a"));
		objCaseMGFNode.setAttribute("FILINGS_TOTAL",service.getVal("txtNewFilings7a"));
		objCaseMGFNode.setAttribute("RESTORED_CRT_CNTRL",service.getVal("txtRestoredActive7a"));
		objCaseMGFNode.setAttribute("REMOVED_CRT_CNTRL",service.getVal("txtRemovedActive7a"));
		objCaseMGFNode.setAttribute("END_PENDING",service.getVal("txtEndPendingCases7a"));
		objCaseMGFNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDisposedThisMnth7a"));
		objCaseMGFNode.setAttribute("DISPOSITIONS_TOTAL_2","0");
		objCaseMGFNode.setAttribute("DISP_BEFORE_PRELIM_HRG_TOTAL_1",service.getVal("txtSetPrelimHearing7a"));
		objCaseMGFNode.setAttribute("DISP_BEFORE_PRELIM_HRG_TOTAL_2","0");
		objCaseMGFNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL","0");
		objCaseMGFNode.setAttribute("BHRG_DISM_TOTAL_18","0");
		objCaseMGFNode.setAttribute("BHRG_DISM_TOTAL_19","0");
		objCaseMGFNode.setAttribute("BHRG_SENT_PLEA_NOLO_1","0");
		objCaseMGFNode.setAttribute("BHRG_SENT_PLEA_NOLO_2","0");
		objCaseMGFNode.setAttribute("BHRG_CERT_PLEA_GUILTY_NOLO","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_27_1","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_27_2","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_31_1","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_31_2","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_35_1","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_35_2","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_38_1","0");
		objCaseMGFNode.setAttribute("AHRG_DISM_TOTAL_38_2","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_28_1","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_28_2","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_32_1","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_32_2","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_36_1","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_36_2","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_39_1","0");
		objCaseMGFNode.setAttribute("AHRG_CONVICTION_TOTAL_MANUAL_39_2","0");
		objCaseMGFNode.setAttribute("AHRG_HELDTOANSW_28","0");
		objCaseMGFNode.setAttribute("AHRG_HELDTOANSW_36","0");
		objCaseMGFNode.setAttribute("DISP_BHRG","0");
		objCaseMGFNode.setAttribute("DISP_0_30_DAYS",service.getVal("txt0to30days7a"));
		objCaseMGFNode.setAttribute("DISP_31_45_DAYS",service.getVal("txt31to45days7a"));
		objCaseMGFNode.setAttribute("DISP_46_90_DAYS",service.getVal("txt46to90days7a"));
		objCaseMGFNode.setAttribute("DISP_GE_91_DAYS",service.getVal("txt91PlusDays7a"));
		objCaseMGFNode.setAttribute("PREDISP_HRG_TOTAL",service.getVal("txtTotal7a"));
		objCaseMGFNode.setAttribute("PC1538_5_MOTION_1","0");
		objCaseMGFNode.setAttribute("PC1538_5_MOTION_2","0");
		objCaseMGFNode.setAttribute("PREDISP_OTHER_HRG_1","0");
		objCaseMGFNode.setAttribute("PREDISP_OTHER_HRG_2","0");
		objCaseMGFNode.setAttribute("DEF_DIVERTED_MANUAL_1","0");
		objCaseMGFNode.setAttribute("DEF_DIVERTED_MANUAL_2","0");
		objCaseMGFNode.setAttribute("POSTDISP_HRG_TOTAL_1","0");
		objCaseMGFNode.setAttribute("POSTDISP_HRG_TOTAL_2","0");
		objCaseMGFNode.setAttribute("PROB_SUPRV_HRG_1","0");
		objCaseMGFNode.setAttribute("PROB_SUPRV_HRG_2","0");
		objCaseMGFNode.setAttribute("STTLMT_CONF_1","0");
		objCaseMGFNode.setAttribute("STTLMT_CONF_2","0");
		form07aout.insertRecordNode(objCaseMGFNode); 
				
                   JBSISEForms.Cache.setDocument("form07aout",form07aout);
try{
                       service.callSubmit07aData();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
    }     
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/********************Web Service call to send 07a Data*******************************************************/
    
    service.callSubmit07aData = function() {
            var objService = JBSISEForms.loadResource("sendForm07aData_xml");
            objService.setOperation("Submit07aData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit07aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit07aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit07aDataInvalid);
              objService.setEndpointURL(urlSubmit07aData);      
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit07aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form07aout");
                    //showInfoDialog("Success",msgNode.getValue());
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit07aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit07aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  
/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 07A**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm07aData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS07aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS07aV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Setting values for MANUAL FELONY******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm07aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm07aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                
 	            		
		  service.setFieldValue("FILINGS_TOTAL","txtAccused7a");
		  service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals7a_SubFelonies7a");
		  service.setFieldValue("BHRG_TRANSFER_TOTAL_MANUAL","txtTransferred7a");
		  service.setFieldValue("BHRG_DISM_TOTAL_18","txtWithoutAppearance7a");
  		  service.setFieldValue("BHRG_DISM_TOTAL_19","txtAfterAppearance7a");
		  service.setFieldValue("BHRG_CERT_PLEA_GUILTY_NOLO","txtPleasOfGuilty7a_SubFelonies7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_27_1","txtAcquittedDismissed7a_SubFelonies7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_35_1","txtAcquittedDismissedAfter7a_SubFelonies7a");
		  service.setFieldValue("AHRG_HELDTOANSW_28","txtMisdemeanorsFelonies7a_SubFelonies7a");
		  service.setFieldValue("AHRG_HELDTOANSW_36","txtMisdemeanorsFeloniesAfter7a_SubFelonies7a");
		  service.setFieldValue("PC1538_5_MOTION_1","txtSection153857a_SubFelonies7a");
		  service.setFieldValue("PREDISP_OTHER_HRG_1","txtFailure2AppearHearing7a_SubFelonies7a");
		  service.setFieldValue("DEF_DIVERTED_MANUAL_1","txtDefendentsDiverted7a_SubFelonies7a");
		  service.setFieldValue("PROB_SUPRV_HRG_1","txtProbationHearings7a_SubFelonies7a");
		  service.setFieldValue("STTLMT_CONF_1","txtPretrialSettlements7a_SubFelonies7a");

 
/******************************Setting values for MANUAL REDUCED TO MISDEMEANOR******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm07aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000105]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm07aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000105]",caseTypeNameSpace);
		  service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals7a_17b(5)PC7a");
		  service.setFieldValue("DISPOSITIONS_TOTAL_2","txtDispositionTotals7a_Others7a");
		  service.setFieldValue("DISP_BEFORE_PRELIM_HRG_TOTAL_1","txtPleasOfGuilty7a_17b(5)PC7a");
		  service.setFieldValue("DISP_BEFORE_PRELIM_HRG_TOTAL_2","txtPleasOfGuilty7a_Others7a");
		  service.setFieldValue("BHRG_SENT_PLEA_NOLO_1","txtPleasOfGuilty7a_17b(5)PC7a");
		  service.setFieldValue("BHRG_SENT_PLEA_NOLO_2","txtPleasOfGuilty7a_Others7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_27_1","txtAcquittedDismissed7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_27_2","txtAcquittedDismissed7a_Others7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_31_1","txtAcqttedDismsdByJury7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_31_2","txtAcqttedDismsdByJury7a_Others7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_35_1","txtAcquittedDismissedAfter7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_35_2","txtAcquittedDismissedAfter7a_Others7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_38_1","txtAcqttedDismsdByJuryAfter7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_DISM_TOTAL_38_2","txtAcqttedDismsdByJuryAfter7a_Others7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_28_1","txtMisdemeanorsFelonies7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_28_2","txtMisdemeanorsFelonies7a_Others7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_32_1","txtConvicted7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_32_2","txtConvicted7a_Others7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_36_1","txtMisdemeanorsFeloniesAfter7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_36_2","txtMisdemeanorsFeloniesAfter7a_Others7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_39_1","txtConvictedAfter7a_17b(5)PC7a");
		  service.setFieldValue("AHRG_CONVICTION_TOTAL_MANUAL_39_2","txtConvictedAfter7a_Others7a");
		  service.setFieldValue("PC1538_5_MOTION_1","txtSection153857a_17b(5)PC7a");
		  service.setFieldValue("PC1538_5_MOTION_2","txtSection153857a_Others7a");
		  service.setFieldValue("PREDISP_OTHER_HRG_1","txtFailure2AppearHearing7a_17b(5)PC7a");
		  service.setFieldValue("PREDISP_OTHER_HRG_2","txtFailure2AppearHearing7a_Others7a");
		  service.setFieldValue("DEF_DIVERTED_MANUAL_1","txtDefendentsDiverted7a_17b(5)PC7a");
		  service.setFieldValue("DEF_DIVERTED_MANUAL_2","txtDefendentsDiverted7a_Others7a");
		  service.setFieldValue("POSTDISP_HRG_TOTAL_1","txtProbationHearings7a_17b(5)PC7a");
		  service.setFieldValue("POSTDISP_HRG_TOTAL_2","txtProbationHearings7a_Others7a");
		  service.setFieldValue("PROB_SUPRV_HRG_1","txtProbationHearings7a_17b(5)PC7a");
		  service.setFieldValue("PROB_SUPRV_HRG_2","txtProbationHearings7a_Others7a");
		  service.setFieldValue("STTLMT_CONF_1","txtPretrialSettlements7a_17b(5)PC7a");
		  service.setFieldValue("STTLMT_CONF_2","txtPretrialSettlements7a_Others7a");
 
/*********************Setting values for MANUAL GENERAL FELONY*************************************/
                  if(!boolImport)
                        service.objFuncParam = xmlForm07aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()= 000003]",caseTypeNameSpace);
                  else
                        service.objFuncParam = xmlForm07aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()= 000003]",caseTypeNameSpace);
		  service.setFieldValue("BEGIN_PENDING","txtBegningPendingCases7a");
		  service.setFieldValue("FILINGS_TOTAL","txtNewFilings7a");
		  service.setFieldValue("RESTORED_CRT_CNTRL","txtRestoredActive7a");
		  service.setFieldValue("REMOVED_CRT_CNTRL","txtRemovedActive7a");
		  service.setFieldValue("END_PENDING","txtEndPendingCases7a");
		  service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDisposedThisMnth7a");
		  service.setFieldValue("DISP_BEFORE_PRELIM_HRG_TOTAL_1","txtSetPrelimHearing7a");
		  service.setFieldValue("DISP_0_30_DAYS","txt0to30days7a");
		  service.setFieldValue("DISP_31_45_DAYS","txt31to45days7a");
		  service.setFieldValue("DISP_46_90_DAYS","txt46to90days7a");
		  service.setFieldValue("DISP_GE_91_DAYS","txt91PlusDays7a");
		  service.setFieldValue("PREDISP_HRG_TOTAL","txtTotal7a");
                 

    }
   }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
	
/*************************************************************************************************************/
/***********************************Web service call to RETRIEVE 07a  Data************************************/
/*************************************************************************************************************/
 
    service.callRetrieve07aData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm07aData_xml");
            objService.setOperation("Retrieve07aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve07aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve07aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve07aDataInvalid);
    
    objService.setEndpointURL(urlFetch07aData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve07aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var responseXML = objEvent.target.getInboundDocument();
            appLogger.trace(responseXML);
            if(responseXML.selectSingleNode("//ns0:Status",statusNameSpace).getValue()==0){
                    form07a.service.setInputData(responseXML);
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
    service.onRetrieve07aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve07aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);