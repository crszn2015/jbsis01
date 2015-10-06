jsx3.lang.Package.definePackage
(
    "form06a.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 06a*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form06aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 06a data*/

/*********************** Record Holding Dissolution 06a******************************************/
        
        var objCaseDISSNode = new jsx3.xml.Document().loadXML("<record jsxid='DISS'/>");  
        objCaseDISSNode.setAttribute("caseTypeCode","000006");
        objCaseDISSNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_DissOfMarriage6a"))));
        objCaseDISSNode.setAttribute("BHRG_DISM_LACK_PROS",JBSIS.eForms.getVal("txtDismLackPros6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("BHRG_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",JBSIS.eForms.getVal("txtSummJudgmnt6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25","0");
        objCaseDISSNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28","0");
        objCaseDISSNode.setAttribute("HEARINGS_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("OSC_MOTION_HRG_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf6a_DissOfMarriage6a"));
        objCaseDISSNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials6a_DissOfMarriage6a"));
        form06aout.insertRecordNode(objCaseDISSNode); 
        
        
/******************************Record Holding Legal Seperation 06a******************************/
        
        var objCaseLGSPNode = new jsx3.xml.Document().loadXML("<record jsxid='LGSP'/>");   
        objCaseLGSPNode.setAttribute("caseTypeCode","000007");
        objCaseLGSPNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_LegSep6a"))));
        objCaseLGSPNode.setAttribute("BHRG_DISM_LACK_PROS",JBSIS.eForms.getVal("txtDismLackPros6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("BHRG_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",JBSIS.eForms.getVal("txtSummJudgmnt6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25","0");
        objCaseLGSPNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28","0");
        objCaseLGSPNode.setAttribute("HEARINGS_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("OSC_MOTION_HRG_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf6a_LegSep6a"));
        objCaseLGSPNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials6a_LegSep6a"));
        form06aout.insertRecordNode(objCaseLGSPNode); 

        
/******************************Record Holding Nullity of Marriage 06a******************************/
        
        var objCaseNULLNode = new jsx3.xml.Document().loadXML("<record jsxid='NULL'/>");   
        objCaseNULLNode.setAttribute("caseTypeCode","000008")
        objCaseNULLNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_NullMarriage6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_NullMarriage6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_NullMarriage6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_NullMarriage6a"))));
        objCaseNULLNode.setAttribute("BHRG_DISM_LACK_PROS",JBSIS.eForms.getVal("txtDismLackPros6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("BHRG_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",JBSIS.eForms.getVal("txtSummJudgmnt6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25","0");
        objCaseNULLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28","0");
        objCaseNULLNode.setAttribute("HEARINGS_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("OSC_MOTION_HRG_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf6a_NullMarriage6a"));
        objCaseNULLNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials6a_NullMarriage6a"));
        form06aout.insertRecordNode(objCaseNULLNode); 

/******************************Record Holding MARTIAL 06a******************************/
        
        var objCaseMRTLNode = new jsx3.xml.Document().loadXML("<record jsxid='MRTL'/>");   
        objCaseMRTLNode.setAttribute("caseTypeCode","000210");
        objCaseMRTLNode.setAttribute("INITIAL_FILINGS",new Number(new Number(JBSIS.eForms.getVal("txtNumCasesFiled6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtNumCasesFiled6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtNumCasesFiled6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("DISPOSITIONS_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDispositionTotals6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtDispositionTotals6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtDispositionTotals6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtDismLackPros6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtDismLackPros6a_NullMarriage6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_NullMarriage6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_NullMarriage6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("BHRG_DISM_LACK_PROS",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtDismLackPros6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtDismLackPros6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("BHRG_OTHER_DISM",new Number(new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",new Number(new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",new Number(new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",new Number(new Number(JBSIS.eForms.getVal("txtByCourtBefore6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtByCourtBefore6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtByCourtBefore6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",new Number(new Number(JBSIS.eForms.getVal("txtByCourtAfter6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtByCourtAfter6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtByCourtAfter6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25","0");
        objCaseMRTLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28","0");
        objCaseMRTLNode.setAttribute("HEARINGS_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtSuperOrders6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtSuperOrders6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtSuperOrders6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("OSC_MOTION_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtSuperOrders6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtSuperOrders6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtSuperOrders6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("STTLMT_CONF",new Number(new Number(JBSIS.eForms.getVal("txtPreSettlmntConf6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtPreSettlmntConf6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtPreSettlmntConf6a_NullMarriage6a"))));
        objCaseMRTLNode.setAttribute("RETRIALS",new Number(new Number(JBSIS.eForms.getVal("txtRetrials6a_DissOfMarriage6a"))+new Number(JBSIS.eForms.getVal("txtRetrials6a_LegSep6a"))+new Number(JBSIS.eForms.getVal("txtRetrials6a_NullMarriage6a"))));
        //form06aout.insertRecordNode(objCaseMRTLNode); //corrected so that 210 code is never sent to BW
        
/******************************Record Holding Child Support 06a******************************/      
var objCaseOTHFLNode = new jsx3.xml.Document().loadXML("<record jsxid='CHSU'/>");   
        objCaseOTHFLNode.setAttribute("caseTypeCode","000095");
        objCaseOTHFLNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_ChildSupport6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_ChildSupport6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_ChildSupport6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_ChildSupport6a"))));
        objCaseOTHFLNode.setAttribute("BHRG_DISM_LACK_PROS",JBSIS.eForms.getVal("txtDismLackPros6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("BHRG_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",JBSIS.eForms.getVal("txtSummJudgmnt6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("HEARINGS_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("OSC_MOTION_HRG_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf6a_ChildSupport6a"));
        objCaseOTHFLNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials6a_ChildSupport6a"));
        form06aout.insertRecordNode(objCaseOTHFLNode);    
        
 /******************************Record Holding Domestic Violence 06a******************************/      
    var objCaseOTHFLNode = new jsx3.xml.Document().loadXML("<record jsxid='DOVI'/>");   
            objCaseOTHFLNode.setAttribute("caseTypeCode","000075");
            objCaseOTHFLNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_DomesticViolence6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_DomesticViolence6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_DomesticViolence6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_DomesticViolence6a"))));
            objCaseOTHFLNode.setAttribute("BHRG_DISM_LACK_PROS",JBSIS.eForms.getVal("txtDismLackPros6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("BHRG_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",JBSIS.eForms.getVal("txtSummJudgmnt6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("HEARINGS_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("OSC_MOTION_HRG_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf6a_DomesticViolence6a"));
            objCaseOTHFLNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials6a_DomesticViolence6a"));
        form06aout.insertRecordNode(objCaseOTHFLNode);  
        
/******************************Record Holding Parentage 06a******************************/      
        var objCaseOTHFLNode = new jsx3.xml.Document().loadXML("<record jsxid='PRNT'/>");   
                objCaseOTHFLNode.setAttribute("caseTypeCode","000065");
                objCaseOTHFLNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_Parentage6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_Parentage6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_Parentage6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_Parentage6a"))));
                objCaseOTHFLNode.setAttribute("BHRG_DISM_LACK_PROS",JBSIS.eForms.getVal("txtDismLackPros6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("BHRG_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",JBSIS.eForms.getVal("txtSummJudgmnt6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("HEARINGS_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("OSC_MOTION_HRG_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf6a_Parentage6a"));
                objCaseOTHFLNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials6a_Parentage6a"));
            form06aout.insertRecordNode(objCaseOTHFLNode);  


/******************************Record Holding Other Civil Petitions (Family Law ) 06a******************************/
        
        var objCaseOTHFLNode = new jsx3.xml.Document().loadXML("<record jsxid='OTHFL'/>");   
        objCaseOTHFLNode.setAttribute("caseTypeCode","000125");
        objCaseOTHFLNode.setAttribute("INITIAL_FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("DISP_BEFORE_HRG_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros6a_OtherPetitions6a"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans6a_OtherPetitions6a"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt6a_OtherPetitions6a"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_OtherPetitions6a"))));
        objCaseOTHFLNode.setAttribute("BHRG_DISM_LACK_PROS",JBSIS.eForms.getVal("txtDismLackPros6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("BHRG_OTHER_DISM",JBSIS.eForms.getVal("txtOtherDismTrans6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_20",JBSIS.eForms.getVal("txtSummJudgmnt6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("BHRG_ENTRY_JGMT_ORDER_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("DISP_AFTER_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("HEARINGS_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("OSC_MOTION_HRG_TOTAL",JBSIS.eForms.getVal("txtSuperOrders6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("STTLMT_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf6a_OtherPetitions6a"));
        objCaseOTHFLNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials6a_OtherPetitions6a"));
        form06aout.insertRecordNode(objCaseOTHFLNode); 
    
                
                   JBSISEForms.Cache.setDocument("form06aout",form06aout);
try{
                       service.callSubmit06aData();
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

/********************Web Service call to send 06a Data*******************************************************/
    
    service.callSubmit06aData = function() {
            var objService = JBSISEForms.loadResource("sendForm06aData_xml");
            objService.setOperation("Submit06aData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit06aDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit06aDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit06aDataInvalid);
              objService.setEndpointURL(urlSubmit06aData);      
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit06aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form06aout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit06aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit06aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  

/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 06a**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm06aData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS06aV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS06aV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Setting values for Dissolution 06a******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm06aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000006]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm06aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000006]",caseTypeNameSpace);
                                        
        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled6a_DissOfMarriage6a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals6a_DissOfMarriage6a");
        service.setFieldValue("BHRG_DISM_LACK_PROS","txtDismLackPros6a_DissOfMarriage6a");
        service.setFieldValue("BHRG_OTHER_DISM","txtOtherDismTrans6a_DissOfMarriage6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_20","txtSummJudgmnt6a_DissOfMarriage6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_21","txtAllOtherJudgmnt6a_DissOfMarriage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_24","txtByCourtBefore6a_DissOfMarriage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_27","txtByCourtAfter6a_DissOfMarriage6a");
        service.setFieldValue("HEARINGS_TOTAL","txtSuperOrders6a_DissOfMarriage6a");
        service.setFieldValue("OSC_MOTION_HRG_TOTAL","txtSuperOrders6a_DissOfMarriage6a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf6a_DissOfMarriage6a");
        service.setFieldValue("RETRIALS","txtRetrials6a_DissOfMarriage6a");

/******************************Setting values for Legal Seperation 06a******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000007]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000007]",caseTypeNameSpace);

        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled6a_LegSep6a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals6a_LegSep6a");
        service.setFieldValue("BHRG_DISM_LACK_PROS","txtDismLackPros6a_LegSep6a");
        service.setFieldValue("BHRG_OTHER_DISM","txtOtherDismTrans6a_LegSep6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_20","txtSummJudgmnt6a_LegSep6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_21","txtAllOtherJudgmnt6a_LegSep6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_24","txtByCourtBefore6a_LegSep6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_27","txtByCourtAfter6a_LegSep6a");
        service.setFieldValue("HEARINGS_TOTAL","txtSuperOrders6a_LegSep6a");
        service.setFieldValue("OSC_MOTION_HRG_TOTAL","txtSuperOrders6a_LegSep6a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf6a_LegSep6a");
        service.setFieldValue("RETRIALS","txtRetrials6a_LegSep6a");
        
/******************************Setting values for Nullity of Marriage 06a******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000008]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000008]",caseTypeNameSpace);

        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled6a_NullMarriage6a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals6a_NullMarriage6a");
        service.setFieldValue("BHRG_DISM_LACK_PROS","txtDismLackPros6a_NullMarriage6a");
        service.setFieldValue("BHRG_OTHER_DISM","txtOtherDismTrans6a_NullMarriage6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_20","txtSummJudgmnt6a_NullMarriage6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_21","txtAllOtherJudgmnt6a_NullMarriage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_24","txtByCourtBefore6a_NullMarriage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_27","txtByCourtAfter6a_NullMarriage6a");
        service.setFieldValue("HEARINGS_TOTAL","txtSuperOrders6a_NullMarriage6a");
        service.setFieldValue("OSC_MOTION_HRG_TOTAL","txtSuperOrders6a_NullMarriage6a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf6a_NullMarriage6a");
        service.setFieldValue("RETRIALS","txtRetrials6a_NullMarriage6a");
        
/******************************Setting values for Child Support 06a******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000095]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000095]",caseTypeNameSpace);

        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled6a_ChildSupport6a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals6a_ChildSupport6a");
        service.setFieldValue("BHRG_DISM_LACK_PROS","txtDismLackPros6a_ChildSupport6a");
        service.setFieldValue("BHRG_OTHER_DISM","txtOtherDismTrans6a_ChildSupport6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_20","txtSummJudgmnt6a_ChildSupport6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_21","txtAllOtherJudgmnt6a_ChildSupport6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_24","txtByCourtBefore6a_ChildSupport6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_27","txtByCourtAfter6a_ChildSupport6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_25","txtByJuryBefore6a_ChildSupport6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_28","txtByJuryAfter6a_ChildSupport6a");
        service.setFieldValue("HEARINGS_TOTAL","txtSuperOrders6a_ChildSupport6a");
        service.setFieldValue("OSC_MOTION_HRG_TOTAL","txtSuperOrders6a_ChildSupport6a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf6a_ChildSupport6a");
        service.setFieldValue("RETRIALS","txtRetrials6a_ChildSupport6a");        

/******************************Setting values for Domestic Violence 06a******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000075]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000075]",caseTypeNameSpace);

        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled6a_DomesticViolence6a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals6a_DomesticViolence6a");
        service.setFieldValue("BHRG_DISM_LACK_PROS","txtDismLackPros6a_DomesticViolence6a");
        service.setFieldValue("BHRG_OTHER_DISM","txtOtherDismTrans6a_DomesticViolence6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_20","txtSummJudgmnt6a_DomesticViolence6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_21","txtAllOtherJudgmnt6a_DomesticViolence6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_24","txtByCourtBefore6a_DomesticViolence6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_27","txtByCourtAfter6a_DomesticViolence6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_25","txtByJuryBefore6a_DomesticViolence6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_28","txtByJuryAfter6a_DomesticViolence6a");
        service.setFieldValue("HEARINGS_TOTAL","txtSuperOrders6a_DomesticViolence6a");
        service.setFieldValue("OSC_MOTION_HRG_TOTAL","txtSuperOrders6a_DomesticViolence6a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf6a_DomesticViolence6a");
        service.setFieldValue("RETRIALS","txtRetrials6a_DomesticViolence6a");
        
/******************************Setting values for Parentage 06a******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000065]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000065]",caseTypeNameSpace);

        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled6a_Parentage6a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals6a_Parentage6a");
        service.setFieldValue("BHRG_DISM_LACK_PROS","txtDismLackPros6a_Parentage6a");
        service.setFieldValue("BHRG_OTHER_DISM","txtOtherDismTrans6a_Parentage6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_20","txtSummJudgmnt6a_Parentage6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_21","txtAllOtherJudgmnt6a_Parentage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_24","txtByCourtBefore6a_Parentage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_27","txtByCourtAfter6a_Parentage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_25","txtByJuryBefore6a_Parentage6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_28","txtByJuryAfter6a_Parentage6a");
        service.setFieldValue("HEARINGS_TOTAL","txtSuperOrders6a_Parentage6a");
        service.setFieldValue("OSC_MOTION_HRG_TOTAL","txtSuperOrders6a_Parentage6a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf6a_Parentage6a");
        service.setFieldValue("RETRIALS","txtRetrials6a_Parentage6a");        

/******************************Setting values for Other Family Law 06a******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000125]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm06aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000125]",caseTypeNameSpace);

        service.setFieldValue("INITIAL_FILINGS","txtNumCasesFiled6a_OtherPetitions6a");
        service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals6a_OtherPetitions6a");
        service.setFieldValue("BHRG_DISM_LACK_PROS","txtDismLackPros6a_OtherPetitions6a");
        service.setFieldValue("BHRG_OTHER_DISM","txtOtherDismTrans6a_OtherPetitions6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_20","txtSummJudgmnt6a_OtherPetitions6a");
        service.setFieldValue("BHRG_ENTRY_JGMT_ORDER_21","txtAllOtherJudgmnt6a_OtherPetitions6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_24","txtByCourtBefore6a_OtherPetitions6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_27","txtByCourtAfter6a_OtherPetitions6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_25","txtByJuryBefore6a_OtherPetitions6a");
        service.setFieldValue("DISP_AFTER_TRIAL_TOTAL_28","txtByJuryAfter6a_OtherPetitions6a");
        service.setFieldValue("HEARINGS_TOTAL","txtSuperOrders6a_OtherPetitions6a");
        service.setFieldValue("OSC_MOTION_HRG_TOTAL","txtSuperOrders6a_OtherPetitions6a");
        service.setFieldValue("STTLMT_CONF","txtPreSettlmntConf6a_OtherPetitions6a");
        service.setFieldValue("RETRIALS","txtRetrials6a_OtherPetitions6a");
        

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
/***********************************Web service call to RETRIEVE 06a  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve06aData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm06aData_xml");
            objService.setOperation("Retrieve06aData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve06aDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve06aDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve06aDataInvalid);
    
    objService.setEndpointURL(urlFetch06aData);     
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve06aDataSuccess = function(objEvent) {
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
    service.onRetrieve06aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve06aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
 
     }
);