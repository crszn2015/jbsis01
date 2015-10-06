jsx3.lang.Package.definePackage
(
    "form05a.service",  //creating a package
       function(service) {
        service.objFuncParam = new Object();

/**********************************************************************************************************/
/**********************************SEND DATA FOR 05a*******************************************************/
/**********************************************************************************************************/
  try{
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form05aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 05a data*/

/*********************** Record Holding CIV 05a******************************************/

        var objCaseCIV05aNode = new jsx3.xml.Document().loadXML("<record jsxid='CIV05a'/>");
        objCaseCIV05aNode.setAttribute("caseTypeCode","000005");
        objCaseCIV05aNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled5a"));
        objCaseCIV05aNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals5a"));
        objCaseCIV05aNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt5a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt5a"))));
                  objCaseCIV05aNode.setAttribute("BTRL_COD_LACK_OF_PROS",JBSIS.eForms.getVal("txtDismLackPros5a"));
        objCaseCIV05aNode.setAttribute("BTRL_COD_OTHER",JBSIS.eForms.getVal("txtOtherDismTrans5a"));
        objCaseCIV05aNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_15",JBSIS.eForms.getVal("txtSummJudgmnt5a"));
        objCaseCIV05aNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_16",JBSIS.eForms.getVal("txtAllOtherJudgmnt5a"));
        objCaseCIV05aNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_19",JBSIS.eForms.getVal("txtByCourtBefore5a"));
        objCaseCIV05aNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_22",JBSIS.eForms.getVal("txtByCourtAfter5a"));
        objCaseCIV05aNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_20",JBSIS.eForms.getVal("txtByJuryBefore5a"));
        objCaseCIV05aNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_23",JBSIS.eForms.getVal("txtByJuryAfter5a"));
        objCaseCIV05aNode.setAttribute("DISP_UD_0_30_DAYS","0");
        objCaseCIV05aNode.setAttribute("DISP_UD_31_45_DAYS","0");
        objCaseCIV05aNode.setAttribute("DISP_UD_GE_46_DAYS","0");

        objCaseCIV05aNode.setAttribute("DISP_CASE_PROC_TOTAL_UD","0");

        objCaseCIV05aNode.setAttribute("DISP_LT_12_MONS",JBSIS.eForms.getVal("txt0to12Months5a"));
        objCaseCIV05aNode.setAttribute("DISP_12_LT_18_MONS",JBSIS.eForms.getVal("txt12to18Months5a"));
        objCaseCIV05aNode.setAttribute("DISP_18_LT_24_MONS",JBSIS.eForms.getVal("txt18to24Months5a"));
        objCaseCIV05aNode.setAttribute("DISP_GE_24_MONS",JBSIS.eForms.getVal("txt24+Months5a"));

        objCaseCIV05aNode.setAttribute("DISP_CASE_PROC_TOTAL",JBSIS.eForms.getVal("txtTotalGenCiv5a"));

        objCaseCIV05aNode.setAttribute("PREDISP_HRG_TOTAL",JBSIS.eForms.getVal("txtHearBeforeTrial5a"));
        objCaseCIV05aNode.setAttribute("POSTDISP_HRG_TOTAL",JBSIS.eForms.getVal("txtHearAfterTrail5a"));
        objCaseCIV05aNode.setAttribute("PRETRIAL_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf5a"));
        objCaseCIV05aNode.setAttribute("BEGIN_PENDING_CI",JBSIS.eForms.getVal("txtGenCivCI5a_BegningPendingCases5a"));
        objCaseCIV05aNode.setAttribute("NEW_FILINGS_CI",JBSIS.eForms.getVal("txtGenCivCI5a_NewFilings5a"));
        objCaseCIV05aNode.setAttribute("RESTORED_CI",JBSIS.eForms.getVal("txtGenCivCI5a_RestoredActive5a"));
        objCaseCIV05aNode.setAttribute("REMOVED_CI",JBSIS.eForms.getVal("txtGenCivCI5a_RemovedActive5a"));
        objCaseCIV05aNode.setAttribute("DISPOSED_THIS_MONTH_CI",JBSIS.eForms.getVal("txtGenCivCI5a_DisposedThisMnth5a"));
        objCaseCIV05aNode.setAttribute("ENDING_PENDING_CI",JBSIS.eForms.getVal("txtGenCivCI5a_EndPendingCases5a"));
        objCaseCIV05aNode.setAttribute("CASES_SET_COURT_TRIAL",JBSIS.eForms.getVal("txtGenCivCSFT5a_CourtTrialCSFT5a"));
        objCaseCIV05aNode.setAttribute("CASES_SET_JURY_TRAIL",JBSIS.eForms.getVal("txtGenCivCSFT5a_JuryTrialCSFT5a"));
        objCaseCIV05aNode.setAttribute("POTENTIAL_JURY_TRAIL",JBSIS.eForms.getVal("txtGenCivMS5a_JuryTrialMS5a"));
        objCaseCIV05aNode.setAttribute("POTENTIAL_COURT_TRAIL",JBSIS.eForms.getVal("txtGenCivMS5a_CourtTrialMS5a"));
        form05aout.insertRecordNode(objCaseCIV05aNode);


/******************************Record Holding Unlawful Detainer 05a******************************/

/********** UPDATED to include new column for 065 caseCode - JBSIS 05a CaseType Enhancement Project ***************/

        var objCaseULDETNode = new jsx3.xml.Document().loadXML("<record jsxid='ULDET'/>");
        objCaseULDETNode.setAttribute("caseTypeCode","000065");
        objCaseULDETNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled5a_unlawfulDetainer"));

        objCaseULDETNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals5a_unlawfulDetainer"));

        objCaseULDETNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5a_unlawfulDetainer"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5a_unlawfulDetainer"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt5a_unlawfulDetainer"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt5a_unlawfulDetainer"))));

        objCaseULDETNode.setAttribute("BTRL_COD_LACK_OF_PROS",JBSIS.eForms.getVal("txtDismLackPros5a_unlawfulDetainer"));

        objCaseULDETNode.setAttribute("BTRL_COD_OTHER",JBSIS.eForms.getVal("txtOtherDismTrans5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_15",JBSIS.eForms.getVal("txtSummJudgmnt5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_16",JBSIS.eForms.getVal("txtAllOtherJudgmnt5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_19",JBSIS.eForms.getVal("txtByCourtBefore5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_22",JBSIS.eForms.getVal("txtByCourtAfter5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_20",JBSIS.eForms.getVal("txtByJuryBefore5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_23",JBSIS.eForms.getVal("txtByJuryAfter5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("DISP_UD_0_30_DAYS",JBSIS.eForms.getVal("txt0to30Days5a"));
        objCaseULDETNode.setAttribute("DISP_UD_31_45_DAYS",JBSIS.eForms.getVal("txt31to45Days5a"));
        objCaseULDETNode.setAttribute("DISP_UD_GE_46_DAYS",JBSIS.eForms.getVal("txt46+Days5a"));

        objCaseULDETNode.setAttribute("DISP_CASE_PROC_TOTAL_UD",JBSIS.eForms.getVal("txtTotalUnlawDetain5a"));

        objCaseULDETNode.setAttribute("DISP_LT_12_MONS","0");
        objCaseULDETNode.setAttribute("DISP_12_LT_18_MONS","0");
        objCaseULDETNode.setAttribute("DISP_18_LT_24_MONS","0");
        objCaseULDETNode.setAttribute("DISP_GE_24_MONS","0");

        objCaseULDETNode.setAttribute("DISP_CASE_PROC_TOTAL","0");

        objCaseULDETNode.setAttribute("PREDISP_HRG_TOTAL",JBSIS.eForms.getVal("txtHearBeforeTrial5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("POSTDISP_HRG_TOTAL",JBSIS.eForms.getVal("txtHearAfterTrail5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("PRETRIAL_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf5a_unlawfulDetainer"));
        objCaseULDETNode.setAttribute("BEGIN_PENDING_CI",JBSIS.eForms.getVal("txtUnlawDetainCI5a_BegningPendingCases5a"));
        objCaseULDETNode.setAttribute("NEW_FILINGS_CI",JBSIS.eForms.getVal("txtUnlawDetainCI5a_NewFilings5a"));
        objCaseULDETNode.setAttribute("RESTORED_CI",JBSIS.eForms.getVal("txtUnlawDetainCI5a_RestoredActive5a"));
        objCaseULDETNode.setAttribute("REMOVED_CI",JBSIS.eForms.getVal("txtUnlawDetainCI5a_RemovedActive5a"));
        objCaseULDETNode.setAttribute("DISPOSED_THIS_MONTH_CI",JBSIS.eForms.getVal("txtUnlawDetainCI5a_DisposedThisMnth5a"));
        objCaseULDETNode.setAttribute("ENDING_PENDING_CI",JBSIS.eForms.getVal("txtUnlawDetainCI5a_EndPendingCases5a"));
        objCaseULDETNode.setAttribute("CASES_SET_COURT_TRIAL",JBSIS.eForms.getVal("txtUnlawDetainCSFT5a_CourtTrialCSFT5a"));
        objCaseULDETNode.setAttribute("CASES_SET_JURY_TRAIL",JBSIS.eForms.getVal("txtUnlawDetainCSFT5a_JuryTrialCSFT5a"));
        objCaseULDETNode.setAttribute("POTENTIAL_JURY_TRAIL",JBSIS.eForms.getVal("txtUnlawDetainMS5a_JuryTrialMS5a"));
        objCaseULDETNode.setAttribute("POTENTIAL_COURT_TRAIL",JBSIS.eForms.getVal("txtUnlawDetainMS5a_CourtTrialMS5a"));
        form05aout.insertRecordNode(objCaseULDETNode);


                   JBSISEForms.Cache.setDocument("form05aout",form05aout);
try{
                    service.callSubmit05aData();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
    }   ;
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

/********************Web Service call to send 05a Data*******************************************************/

    service.callSubmit05aData = function() {
            var objService = JBSISEForms.loadResource("sendForm05aData_xml");
            objService.setOperation("Submit05aData");

              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit05aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit05aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit05aDataInvalid);
              objService.setEndpointURL(urlSubmit05aData);
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());

    };
/***************Action on a sucessful response********************************/
    service.onSubmit05aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);
                       appLogger.trace(responseXML);
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form05aout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }

              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                     JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit05aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
             JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit05aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };


/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 05a**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm05aData){

                    if(!boolImport)
                           JBSIS.eForms.Nav.showTab(true);
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS05aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS05aV2_INT/1.0/xsd'";
                }


/*********************** Setting values for CIV 05a******************************************/

                  if(!boolImport)
                       service.objFuncParam = xmlForm05aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm05aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);


        service.setFieldValue("FILINGS","txtNumCasesFiled5a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals5a");
        service.setFieldValue("BTRL_COD_LACK_OF_PROS","txtDismLackPros5a");
        service.setFieldValue("BTRL_COD_OTHER","txtOtherDismTrans5a");
        service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_15","txtSummJudgmnt5a");
        service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_16","txtAllOtherJudgmnt5a");
        service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_19","txtByCourtBefore5a");
        service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_22","txtByCourtAfter5a");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_20","txtByJuryBefore5a");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_23","txtByJuryAfter5a");

        service.setFieldValue("DISP_LT_12_MONS","txt0to12Months5a");
        service.setFieldValue("DISP_12_LT_18_MONS","txt12to18Months5a");
        service.setFieldValue("DISP_18_LT_24_MONS","txt18to24Months5a");
        service.setFieldValue("DISP_GE_24_MONS","txt24+Months5a");

        service.setFieldValue("DISP_CASE_PROC_TOTAL","txtTotalGenCiv5a");

        service.setFieldValue("PREDISP_HRG_TOTAL","txtHearBeforeTrial5a");
        service.setFieldValue("POSTDISP_HRG_TOTAL","txtHearAfterTrail5a");
        service.setFieldValue("PRETRIAL_CONF","txtPreSettlmntConf5a");

        service.setFieldValue("BEGIN_PENDING_CI","txtGenCivCI5a_BegningPendingCases5a");
        service.setFieldValue("NEW_FILINGS_CI","txtGenCivCI5a_NewFilings5a");
        service.setFieldValue("RESTORED_CI","txtGenCivCI5a_RestoredActive5a");
        service.setFieldValue("REMOVED_CI","txtGenCivCI5a_RemovedActive5a");
        service.setFieldValue("DISPOSED_THIS_MONTH_CI","txtGenCivCI5a_DisposedThisMnth5a");
        service.setFieldValue("ENDING_PENDING_CI","txtGenCivCI5a_EndPendingCases5a");
        service.setFieldValue("CASES_SET_COURT_TRIAL","txtGenCivCSFT5a_CourtTrialCSFT5a");
        service.setFieldValue("CASES_SET_JURY_TRAIL","txtGenCivCSFT5a_JuryTrialCSFT5a");
        service.setFieldValue("POTENTIAL_JURY_TRAIL","txtGenCivMS5a_JuryTrialMS5a");
        service.setFieldValue("POTENTIAL_COURT_TRAIL","txtGenCivMS5a_CourtTrialMS5a");


/******************************Setting values for UNLAWFUL DETAINER 05a******************************/

/********** UPDATED to include new column for 065 caseCode - JBSIS 05a CaseType Enhancement Project ***************/

                  if(!boolImport)
                    service.objFuncParam = xmlForm05aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000065]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm05aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000065]",caseTypeNameSpace);


        service.setFieldValue("FILINGS","txtNumCasesFiled5a_unlawfulDetainer");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals5a_unlawfulDetainer");
        service.setFieldValue("BTRL_COD_LACK_OF_PROS","txtDismLackPros5a_unlawfulDetainer");
        service.setFieldValue("BTRL_COD_OTHER","txtOtherDismTrans5a_unlawfulDetainer");
        service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_15","txtSummJudgmnt5a_unlawfulDetainer");
        service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_16","txtAllOtherJudgmnt5a_unlawfulDetainer");
        service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_19","txtByCourtBefore5a_unlawfulDetainer");
        service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_22","txtByCourtAfter5a_unlawfulDetainer");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_20","txtByJuryBefore5a_unlawfulDetainer");
        service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_23","txtByJuryAfter5a_unlawfulDetainer");

        service.setFieldValue("DISP_UD_0_30_DAYS","txt0to30Days5a");
        service.setFieldValue("DISP_UD_31_45_DAYS","txt31to45Days5a");
        service.setFieldValue("DISP_UD_GE_46_DAYS","txt46+Days5a");

        service.setFieldValue("DISP_CASE_PROC_TOTAL_UD","txtTotalUnlawDetain5a");

        service.setFieldValue("PREDISP_HRG_TOTAL","txtHearBeforeTrial5a_unlawfulDetainer");
        service.setFieldValue("POSTDISP_HRG_TOTAL","txtHearAfterTrail5a_unlawfulDetainer");
        service.setFieldValue("PRETRIAL_CONF","txtPreSettlmntConf5a_unlawfulDetainer");


        service.setFieldValue("BEGIN_PENDING_CI","txtUnlawDetainCI5a_BegningPendingCases5a");
        service.setFieldValue("NEW_FILINGS_CI","txtUnlawDetainCI5a_NewFilings5a");
        service.setFieldValue("RESTORED_CI","txtUnlawDetainCI5a_RestoredActive5a");
        service.setFieldValue("REMOVED_CI","txtUnlawDetainCI5a_RemovedActive5a");
        service.setFieldValue("DISPOSED_THIS_MONTH_CI","txtUnlawDetainCI5a_DisposedThisMnth5a");
        service.setFieldValue("ENDING_PENDING_CI","txtUnlawDetainCI5a_EndPendingCases5a");
        service.setFieldValue("CASES_SET_COURT_TRIAL","txtUnlawDetainCSFT5a_CourtTrialCSFT5a");
        service.setFieldValue("CASES_SET_JURY_TRAIL","txtUnlawDetainCSFT5a_JuryTrialCSFT5a");
        service.setFieldValue("POTENTIAL_JURY_TRAIL","txtUnlawDetainMS5a_JuryTrialMS5a");
        service.setFieldValue("POTENTIAL_COURT_TRAIL","txtUnlawDetainMS5a_CourtTrialMS5a");

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
/***********************************Web service call to RETRIEVE 05a  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve05aData = function(doImport) {
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();


            var objService = JBSISEForms.loadResource("getForm05aData_xml");
            objService.setOperation("Retrieve05aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve05aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve05aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve05aDataInvalid);

    objService.setEndpointURL(urlFetch05aData);
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());

    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve05aDataSuccess = function(objEvent) {
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
    service.onRetrieve05aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve05aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);