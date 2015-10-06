jsx3.lang.Package.definePackage
(
    "form05b.service",  //creating a package 
       function(service) {
        service.objFuncParam = new Object();
        
/**********************************************************************************************************/
/**********************************SEND DATA FOR 05b*******************************************************/
/**********************************************************************************************************/
  try{               
     service.genOutputData=function(objOperation){
                            JBSIS.eForms.showLoadDialog(true);
                 service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                 form05bout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 05b data*/

/*********************** Record Holding Auto Tort : Motor Vehicle 05b******************************************/
		
		var objCaseATMVNode = new jsx3.xml.Document().loadXML("<record jsxid='ATMV'/>");  
		objCaseATMVNode.setAttribute("caseTypeCode","000005");
		objCaseATMVNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_MotorVehicle5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_MotorVehicle5b"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt5b_MotorVehicle5b"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_MotorVehicle5b"))));
		objCaseATMVNode.setAttribute("BTRL_DISMISSAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_MotorVehicle5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_MotorVehicle5b"))));
		objCaseATMVNode.setAttribute("BTRL_ENTRY_REQ_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_MotorVehicle5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_MotorVehicle5b"))));
		objCaseATMVNode.setAttribute("BTRL_CRT_ORDERED_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_MotorVehicle5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_MotorVehicle5b"))));
		objCaseATMVNode.setAttribute("BTRL_COD_LACK_OF_PROS",JBSIS.eForms.getVal("txtDismLackPros5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("BTRL_COD_OTHER",JBSIS.eForms.getVal("txtOtherDismTrans5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_20",JBSIS.eForms.getVal("txtSummJudgmnt5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("DISP_ATRL_DE_NOVO","0");
		objCaseATMVNode.setAttribute("DISP_LT_12_MONS","0");
		objCaseATMVNode.setAttribute("DISP_12_LT_18_MONS","0");
		objCaseATMVNode.setAttribute("DISP_18_LT_24_MONS","0");
		objCaseATMVNode.setAttribute("DISP_GE_24_MONS_17","0");
		objCaseATMVNode.setAttribute("DISP_GE_24_MONS_18","0");
		objCaseATMVNode.setAttribute("DISP_GE_24_MONS_19","0");
		objCaseATMVNode.setAttribute("DISP_EXCEP_TOTALS","0");
		objCaseATMVNode.setAttribute("PEND_LT_12_MONS","0");
		objCaseATMVNode.setAttribute("PEND_12_LT_18_MONS","0");
		objCaseATMVNode.setAttribute("PEND_18_LT_24_MONS","0");
		objCaseATMVNode.setAttribute("PEND_GE_24_MONS_29","0");
		objCaseATMVNode.setAttribute("PEND_GE_24_MONS_30","0");
		objCaseATMVNode.setAttribute("PEND_GE_24_MONS_31","0");
		objCaseATMVNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("PRETRIAL_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf5b_MotorVehicle5b"));
		objCaseATMVNode.setAttribute("EC_CD_0_12_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CD_12_18_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CD_18_24_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CD_24_36_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CD_36_48_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CD_GE_48_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CD_TOTAL_CASES","0");
		objCaseATMVNode.setAttribute("EC_CP_0_12_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CP_12_18_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CP_18_24_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CP_24_36_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CP_36_48_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CP_GE_48_MONTHS","0");
		objCaseATMVNode.setAttribute("EC_CP_TOTAL_CASES","0");
		objCaseATMVNode.setAttribute("PEND_EXCEP_TOTALS","0");
		objCaseATMVNode.setAttribute("EXCEPTIONAL_CASES_22","0");
		objCaseATMVNode.setAttribute("STAYED_CASES_23","0");
		objCaseATMVNode.setAttribute("PENDING_CASES_24","0");
		form05bout.insertRecordNode(objCaseATMVNode); 
		
		
/******************************Record Holding PI/PD/PW: Other 05b******************************/
		
		var objCasePIDWNode = new jsx3.xml.Document().loadXML("<record jsxid='PIDW'/>");   
		objCasePIDWNode.setAttribute("caseTypeCode","000015");
		objCasePIDWNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled5b_Other5b"));
		objCasePIDWNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals5b_Other5b"));
		objCasePIDWNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_Other5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_Other5b"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt5b_Other5b"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_Other5b"))));
		objCasePIDWNode.setAttribute("BTRL_DISMISSAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_Other5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_Other5b"))));
		objCasePIDWNode.setAttribute("BTRL_ENTRY_REQ_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_Other5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_Other5b"))));
		objCasePIDWNode.setAttribute("BTRL_CRT_ORDERED_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_Other5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_Other5b"))));
		objCasePIDWNode.setAttribute("BTRL_COD_LACK_OF_PROS",JBSIS.eForms.getVal("txtDismLackPros5b_Other5b"));
		objCasePIDWNode.setAttribute("BTRL_COD_OTHER",JBSIS.eForms.getVal("txtOtherDismTrans5b_Other5b"));
		objCasePIDWNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_20",JBSIS.eForms.getVal("txtSummJudgmnt5b_Other5b"));
		objCasePIDWNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_Other5b"));
		objCasePIDWNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore5b_Other5b"));
		objCasePIDWNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter5b_Other5b"));
		objCasePIDWNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore5b_Other5b"));
		objCasePIDWNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter5b_Other5b"));
		objCasePIDWNode.setAttribute("DISP_ATRL_DE_NOVO","0");
		objCasePIDWNode.setAttribute("DISP_LT_12_MONS","0");
		objCasePIDWNode.setAttribute("DISP_12_LT_18_MONS","0");
		objCasePIDWNode.setAttribute("DISP_18_LT_24_MONS","0");
		objCasePIDWNode.setAttribute("DISP_GE_24_MONS_17","0");
		objCasePIDWNode.setAttribute("DISP_GE_24_MONS_18","0");
		objCasePIDWNode.setAttribute("DISP_GE_24_MONS_19","0");
		objCasePIDWNode.setAttribute("DISP_EXCEP_TOTALS","0");
		objCasePIDWNode.setAttribute("PEND_LT_12_MONS","0");
		objCasePIDWNode.setAttribute("PEND_12_LT_18_MONS","0");
		objCasePIDWNode.setAttribute("PEND_18_LT_24_MONS","0");
		objCasePIDWNode.setAttribute("PEND_GE_24_MONS_29","0");
		objCasePIDWNode.setAttribute("PEND_GE_24_MONS_30","0");
		objCasePIDWNode.setAttribute("PEND_GE_24_MONS_31","0");
		objCasePIDWNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials5b_Other5b"));
		objCasePIDWNode.setAttribute("PRETRIAL_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf5b_Other5b"));
		objCasePIDWNode.setAttribute("EC_CD_0_12_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CD_12_18_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CD_18_24_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CD_24_36_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CD_36_48_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CD_GE_48_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CD_TOTAL_CASES","0");
		objCasePIDWNode.setAttribute("EC_CP_0_12_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CP_12_18_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CP_18_24_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CP_24_36_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CP_36_48_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CP_GE_48_MONTHS","0");
		objCasePIDWNode.setAttribute("EC_CP_TOTAL_CASES","0");
		objCasePIDWNode.setAttribute("PEND_EXCEP_TOTALS","0");
		objCasePIDWNode.setAttribute("EXCEPTIONAL_CASES_22","0");
		objCasePIDWNode.setAttribute("STAYED_CASES_23","0");
		objCasePIDWNode.setAttribute("PENDING_CASES_24","0");
		form05bout.insertRecordNode(objCasePIDWNode); 

		
/******************************Record Holding Real Property: Eminent Domain 05b******************************/
		
		var objCaseRPEDNode = new jsx3.xml.Document().loadXML("<record jsxid='RPED'/>");   
		objCaseRPEDNode.setAttribute("caseTypeCode","000055");
		objCaseRPEDNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_EminentDomain5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_EminentDomain5b"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt5b_EminentDomain5b"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_EminentDomain5b"))));
		objCaseRPEDNode.setAttribute("BTRL_DISMISSAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_EminentDomain5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_EminentDomain5b"))));
		objCaseRPEDNode.setAttribute("BTRL_ENTRY_REQ_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_EminentDomain5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_EminentDomain5b"))));
		objCaseRPEDNode.setAttribute("BTRL_CRT_ORDERED_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_EminentDomain5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_EminentDomain5b"))));
		objCaseRPEDNode.setAttribute("BTRL_COD_LACK_OF_PROS",JBSIS.eForms.getVal("txtDismLackPros5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("BTRL_COD_OTHER",JBSIS.eForms.getVal("txtOtherDismTrans5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_20",JBSIS.eForms.getVal("txtSummJudgmnt5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("DISP_ATRL_DE_NOVO","0");
		objCaseRPEDNode.setAttribute("DISP_LT_12_MONS","0");
		objCaseRPEDNode.setAttribute("DISP_12_LT_18_MONS","0");
		objCaseRPEDNode.setAttribute("DISP_18_LT_24_MONS","0");
		objCaseRPEDNode.setAttribute("DISP_GE_24_MONS_17","0");
		objCaseRPEDNode.setAttribute("DISP_GE_24_MONS_18","0");
		objCaseRPEDNode.setAttribute("DISP_GE_24_MONS_19","0");
		objCaseRPEDNode.setAttribute("DISP_EXCEP_TOTALS","0");
		objCaseRPEDNode.setAttribute("PEND_LT_12_MONS","0");
		objCaseRPEDNode.setAttribute("PEND_12_LT_18_MONS","0");
		objCaseRPEDNode.setAttribute("PEND_18_LT_24_MONS","0");
		objCaseRPEDNode.setAttribute("PEND_GE_24_MONS_29","0");
		objCaseRPEDNode.setAttribute("PEND_GE_24_MONS_30","0");
		objCaseRPEDNode.setAttribute("PEND_GE_24_MONS_31","0");
		objCaseRPEDNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("PRETRIAL_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf5b_EminentDomain5b"));
		objCaseRPEDNode.setAttribute("EC_CD_0_12_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CD_12_18_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CD_18_24_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CD_24_36_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CD_36_48_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CD_GE_48_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CD_TOTAL_CASES","0");
		objCaseRPEDNode.setAttribute("EC_CP_0_12_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CP_12_18_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CP_18_24_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CP_24_36_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CP_36_48_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CP_GE_48_MONTHS","0");
		objCaseRPEDNode.setAttribute("EC_CP_TOTAL_CASES","0");
		objCaseRPEDNode.setAttribute("PEND_EXCEP_TOTALS","0");
		objCaseRPEDNode.setAttribute("EXCEPTIONAL_CASES_22","0");
		objCaseRPEDNode.setAttribute("STAYED_CASES_23","0");
		objCaseRPEDNode.setAttribute("PENDING_CASES_24","0");
		form05bout.insertRecordNode(objCaseRPEDNode); 

/******************************Record Holding Other Civil: Complaints 05b******************************/
		
		var objCaseOCC05bNode = new jsx3.xml.Document().loadXML("<record jsxid='OCC05b'/>");   
		objCaseOCC05bNode.setAttribute("caseTypeCode","000105");
		objCaseOCC05bNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtNumCasesFiled5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtDispositionTotals5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_OtherComplaints5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_OtherComplaints5b"))+new Number(JBSIS.eForms.getVal("txtSummJudgmnt5b_OtherComplaints5b"))+new Number(JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_OtherComplaints5b"))));
		objCaseOCC05bNode.setAttribute("BTRL_DISMISSAL_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_OtherComplaints5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_OtherComplaints5b"))));
		objCaseOCC05bNode.setAttribute("BTRL_ENTRY_REQ_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_OtherComplaints5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_OtherComplaints5b"))));
		objCaseOCC05bNode.setAttribute("BTRL_CRT_ORDERED_DISM_TOTAL",new Number(new Number(JBSIS.eForms.getVal("txtDismLackPros5b_OtherComplaints5b"))+new Number(JBSIS.eForms.getVal("txtOtherDismTrans5b_OtherComplaints5b"))));
		objCaseOCC05bNode.setAttribute("BTRL_COD_LACK_OF_PROS",JBSIS.eForms.getVal("txtDismLackPros5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("BTRL_COD_OTHER",JBSIS.eForms.getVal("txtOtherDismTrans5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_20",JBSIS.eForms.getVal("txtSummJudgmnt5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_21",JBSIS.eForms.getVal("txtAllOtherJudgmnt5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_24",JBSIS.eForms.getVal("txtByCourtBefore5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_27",JBSIS.eForms.getVal("txtByCourtAfter5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25",JBSIS.eForms.getVal("txtByJuryBefore5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28",JBSIS.eForms.getVal("txtByJuryAfter5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("DISP_ATRL_DE_NOVO","0");
		objCaseOCC05bNode.setAttribute("DISP_LT_12_MONS",JBSIS.eForms.getVal("txtSecI0to125b_SecICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("DISP_12_LT_18_MONS",JBSIS.eForms.getVal("txtSecI12to185b_SecICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("DISP_18_LT_24_MONS",JBSIS.eForms.getVal("txt18to245b_SecICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("DISP_GE_24_MONS_17",JBSIS.eForms.getVal("txtSecI24to365b_SecICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("DISP_GE_24_MONS_18",JBSIS.eForms.getVal("txtSecI36to485b_SecICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("DISP_GE_24_MONS_19",JBSIS.eForms.getVal("txtSecI48+5b_SecICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("DISP_EXCEP_TOTALS",JBSIS.eForms.getVal("txtSecITotalCases5b_SecICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("PEND_LT_12_MONS",JBSIS.eForms.getVal("txtSecII0to125b_SecIICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("PEND_12_LT_18_MONS",JBSIS.eForms.getVal("txtSecII12to185b_SecIICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("PEND_18_LT_24_MONS",JBSIS.eForms.getVal("txtSecII18to245b_SecIICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("PEND_GE_24_MONS_29",JBSIS.eForms.getVal("txtSecII24to365b_SecIICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("PEND_GE_24_MONS_30",JBSIS.eForms.getVal("txtSecII36to485b_SecIICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("PEND_GE_24_MONS_31",JBSIS.eForms.getVal("txtSecII48+5b_SecIICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("RETRIALS",JBSIS.eForms.getVal("txtRetrials5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("PRETRIAL_CONF",JBSIS.eForms.getVal("txtPreSettlmntConf5b_OtherComplaints5b"));
		objCaseOCC05bNode.setAttribute("EC_CD_0_12_MONTHS",JBSIS.eForms.getVal("txtSecI0to125b_SecICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CD_12_18_MONTHS",JBSIS.eForms.getVal("txtSecI12to185b_SecICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CD_18_24_MONTHS",JBSIS.eForms.getVal("txt18to245b_SecICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CD_24_36_MONTHS",JBSIS.eForms.getVal("txtSecI24to365b_SecICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CD_36_48_MONTHS",JBSIS.eForms.getVal("txtSecI36to485b_SecICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CD_GE_48_MONTHS",JBSIS.eForms.getVal("txtSecI48+5b_SecICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CD_TOTAL_CASES",JBSIS.eForms.getVal("txtSecITotalCases5b_SecICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CP_0_12_MONTHS",JBSIS.eForms.getVal("txtSecII0to125b_SecIICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CP_12_18_MONTHS",JBSIS.eForms.getVal("txtSecII12to185b_SecIICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CP_18_24_MONTHS",JBSIS.eForms.getVal("txtSecII18to245b_SecIICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CP_24_36_MONTHS",JBSIS.eForms.getVal("txtSecII24to365b_SecIICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CP_36_48_MONTHS",JBSIS.eForms.getVal("txtSecII36to485b_SecIICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CP_GE_48_MONTHS",JBSIS.eForms.getVal("txtSecII48+5b_SecIICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("EC_CP_TOTAL_CASES",JBSIS.eForms.getVal("txtSecIITotalCases5b_SecIICaseAge(B)5b"));
		objCaseOCC05bNode.setAttribute("PEND_EXCEP_TOTALS",JBSIS.eForms.getVal("txtSecIITotalCases5b_SecIICaseAge(A)5b"));
		objCaseOCC05bNode.setAttribute("EXCEPTIONAL_CASES_22",JBSIS.eForms.getVal("txtItem15b"));
		objCaseOCC05bNode.setAttribute("STAYED_CASES_23",JBSIS.eForms.getVal("txtItem25b"));
		objCaseOCC05bNode.setAttribute("PENDING_CASES_24",JBSIS.eForms.getVal("txtItem35b"));
		form05bout.insertRecordNode(objCaseOCC05bNode); 

/******************************Record Holding Small Claims Appeal 05b******************************/
		
		var objCaseSCA05bNode = new jsx3.xml.Document().loadXML("<record jsxid='SCA05b'/>");   
		objCaseSCA05bNode.setAttribute("caseTypeCode","000115");
		objCaseSCA05bNode.setAttribute("FILINGS",JBSIS.eForms.getVal("txtSecVTrialDept5b"));
		objCaseSCA05bNode.setAttribute("DISPOSITIONS_TOTAL",JBSIS.eForms.getVal("txtSecVTrialDeNovo5b"));
		objCaseSCA05bNode.setAttribute("DISP_BEFORE_TRIAL_TOTAL","0");
		objCaseSCA05bNode.setAttribute("BTRL_DISMISSAL_TOTAL","0");
		objCaseSCA05bNode.setAttribute("BTRL_ENTRY_REQ_DISM_TOTAL","0");
		objCaseSCA05bNode.setAttribute("BTRL_CRT_ORDERED_DISM_TOTAL","0");
		objCaseSCA05bNode.setAttribute("BTRL_COD_LACK_OF_PROS","0");
		objCaseSCA05bNode.setAttribute("BTRL_COD_OTHER","0");
		objCaseSCA05bNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_20","0");
		objCaseSCA05bNode.setAttribute("BTRL_ENTRY_JGMT_TOTAL_21","0");
		objCaseSCA05bNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_24","0");
		objCaseSCA05bNode.setAttribute("DISP_AFTER_CRT_TRIAL_TOTAL_27","0");
		objCaseSCA05bNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_25","0");
		objCaseSCA05bNode.setAttribute("DISP_AFTER_JURY_TRIAL_TOTAL_28","0");
		objCaseSCA05bNode.setAttribute("DISP_ATRL_DE_NOVO",JBSIS.eForms.getVal("txtSecVTrialDeNovo5b"));
		objCaseSCA05bNode.setAttribute("DISP_LT_12_MONS","0");
		objCaseSCA05bNode.setAttribute("DISP_12_LT_18_MONS","0");
		objCaseSCA05bNode.setAttribute("DISP_18_LT_24_MONS","0");
		objCaseSCA05bNode.setAttribute("DISP_GE_24_MONS_17","0");
		objCaseSCA05bNode.setAttribute("DISP_GE_24_MONS_18","0");
		objCaseSCA05bNode.setAttribute("DISP_GE_24_MONS_19","0");
		objCaseSCA05bNode.setAttribute("DISP_EXCEP_TOTALS","0");
		objCaseSCA05bNode.setAttribute("PEND_LT_12_MONS","0");
		objCaseSCA05bNode.setAttribute("PEND_12_LT_18_MONS","0");
		objCaseSCA05bNode.setAttribute("PEND_18_LT_24_MONS","0");
		objCaseSCA05bNode.setAttribute("PEND_GE_24_MONS_29","0");
		objCaseSCA05bNode.setAttribute("PEND_GE_24_MONS_30","0");
		objCaseSCA05bNode.setAttribute("PEND_GE_24_MONS_31","0");
		objCaseSCA05bNode.setAttribute("RETRIALS","0");
		objCaseSCA05bNode.setAttribute("PRETRIAL_CONF","0");
		objCaseSCA05bNode.setAttribute("EC_CD_0_12_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CD_12_18_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CD_18_24_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CD_24_36_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CD_36_48_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CD_GE_48_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CD_TOTAL_CASES","0");
		objCaseSCA05bNode.setAttribute("EC_CP_0_12_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CP_12_18_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CP_18_24_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CP_24_36_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CP_36_48_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CP_GE_48_MONTHS","0");
		objCaseSCA05bNode.setAttribute("EC_CP_TOTAL_CASES","0");
		objCaseSCA05bNode.setAttribute("PEND_EXCEP_TOTALS","0");
		objCaseSCA05bNode.setAttribute("EXCEPTIONAL_CASES_22","0");
		objCaseSCA05bNode.setAttribute("STAYED_CASES_23","0");
		objCaseSCA05bNode.setAttribute("PENDING_CASES_24","0");
		form05bout.insertRecordNode(objCaseSCA05bNode); 


		
				
                   JBSISEForms.Cache.setDocument("form05bout",form05bout);
try{
                       service.callSubmit05bData();
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

/********************Web Service call to send 05b Data*******************************************************/
    
    service.callSubmit05bData = function() {
            var objService = JBSISEForms.loadResource("sendForm05bData_xml");
            objService.setOperation("Submit05bData");
              
              //subscribe and call
              objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit05bDataSuccess);
              objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit05bDataError);
              objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit05bDataInvalid);
              objService.setEndpointURL(urlSubmit05bData);      
              //objService.compile();
              objService.doCall();
                appLogger.trace(objService.getOutboundDocument());
             
    };
/***************Action on a sucessful response********************************/
    service.onSubmit05bDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
              var responseXML = objEvent.target.getInboundDocument();
              var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
              var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);                  
                       appLogger.trace(responseXML);                        
              if(statusNode.getValue()==0) {
                    JBSISEForms.Cache.clearById("form05bout");
                    boolChangeState = false;
                    //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                }
                       
              else {
                    //showInfoDialog("Failed",msgNode.getValue());
                    JBSIS.eForms.processException(msgNode.getValue());
                  }
    };
    service.onSubmit05bDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onSubmit05bDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
  

/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 05b**********************************************/
/*************************************************************************************************/
   try{
    /**********Function to parse response XML to set field values*****************/
     service.setInputData=function(xmlForm05bData){

                    if(!boolImport)                                                            
                           JBSIS.eForms.Nav.showTab(true);  
                  else
                           boolChangeState = true;

                if(!boolImport) {
                    caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS05bV2_INT/1.0/xsd'";
                }
                else {
                    caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS05bV2_INT/1.0/xsd'";
                }
                     
                            
/*********************** Setting values for Auto Tort : Motor Vehicle 05b******************************************/
                       
                  if(!boolImport)
                       service.objFuncParam = xmlForm05bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                  else
                       service.objFuncParam = xmlForm05bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000005]",caseTypeNameSpace);
                
 	            		
		service.setFieldValue("FILINGS","txtNumCasesFiled5b_MotorVehicle5b");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals5b_MotorVehicle5b");
		service.setFieldValue("BTRL_COD_LACK_OF_PROS","txtDismLackPros5b_MotorVehicle5b");
		service.setFieldValue("BTRL_COD_OTHER","txtOtherDismTrans5b_MotorVehicle5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_20","txtSummJudgmnt5b_MotorVehicle5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_21","txtAllOtherJudgmnt5b_MotorVehicle5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_24","txtByCourtBefore5b_MotorVehicle5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_27","txtByCourtAfter5b_MotorVehicle5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_25","txtByJuryBefore5b_MotorVehicle5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_28","txtByJuryAfter5b_MotorVehicle5b");
		service.setFieldValue("RETRIALS","txtRetrials5b_MotorVehicle5b");
		service.setFieldValue("PRETRIAL_CONF","txtPreSettlmntConf5b_MotorVehicle5b");

/******************************Setting values for PI/PD/PW: Other 05b******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000015]",caseTypeNameSpace);

		service.setFieldValue("FILINGS","txtNumCasesFiled5b_Other5b");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals5b_Other5b");
		service.setFieldValue("BTRL_COD_LACK_OF_PROS","txtDismLackPros5b_Other5b");
		service.setFieldValue("BTRL_COD_OTHER","txtOtherDismTrans5b_Other5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_20","txtSummJudgmnt5b_Other5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_21","txtAllOtherJudgmnt5b_Other5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_24","txtByCourtBefore5b_Other5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_27","txtByCourtAfter5b_Other5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_25","txtByJuryBefore5b_Other5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_28","txtByJuryAfter5b_Other5b");
		service.setFieldValue("RETRIALS","txtRetrials5b_Other5b");
		service.setFieldValue("PRETRIAL_CONF","txtPreSettlmntConf5b_Other5b");

/******************************Setting values for Real Property: Eminent Domain 05b******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000055]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000055]",caseTypeNameSpace);

		service.setFieldValue("FILINGS","txtNumCasesFiled5b_EminentDomain5b");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals5b_EminentDomain5b");
		service.setFieldValue("BTRL_COD_LACK_OF_PROS","txtDismLackPros5b_EminentDomain5b");
		service.setFieldValue("BTRL_COD_OTHER","txtOtherDismTrans5b_EminentDomain5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_20","txtSummJudgmnt5b_EminentDomain5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_21","txtAllOtherJudgmnt5b_EminentDomain5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_24","txtByCourtBefore5b_EminentDomain5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_27","txtByCourtAfter5b_EminentDomain5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_25","txtByJuryBefore5b_EminentDomain5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_28","txtByJuryAfter5b_EminentDomain5b");
		service.setFieldValue("RETRIALS","txtRetrials5b_EminentDomain5b");
		service.setFieldValue("PRETRIAL_CONF","txtPreSettlmntConf5b_EminentDomain5b");

/******************************Setting values for Other Civil: Complaints 05b******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000105]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000105]",caseTypeNameSpace);

		service.setFieldValue("FILINGS","txtNumCasesFiled5b_OtherComplaints5b");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtDispositionTotals5b_OtherComplaints5b");
		service.setFieldValue("BTRL_COD_LACK_OF_PROS","txtDismLackPros5b_OtherComplaints5b");
		service.setFieldValue("BTRL_COD_OTHER","txtOtherDismTrans5b_OtherComplaints5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_20","txtSummJudgmnt5b_OtherComplaints5b");
		service.setFieldValue("BTRL_ENTRY_JGMT_TOTAL_21","txtAllOtherJudgmnt5b_OtherComplaints5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_24","txtByCourtBefore5b_OtherComplaints5b");
		service.setFieldValue("DISP_AFTER_CRT_TRIAL_TOTAL_27","txtByCourtAfter5b_OtherComplaints5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_25","txtByJuryBefore5b_OtherComplaints5b");
		service.setFieldValue("DISP_AFTER_JURY_TRIAL_TOTAL_28","txtByJuryAfter5b_OtherComplaints5b");
		service.setFieldValue("DISP_LT_12_MONS","txtSecI0to125b_SecICaseAge(A)5b");
		service.setFieldValue("DISP_12_LT_18_MONS","txtSecI12to185b_SecICaseAge(A)5b");
		service.setFieldValue("DISP_18_LT_24_MONS","txt18to245b_SecICaseAge(A)5b");
		service.setFieldValue("DISP_GE_24_MONS_17","txtSecI24to365b_SecICaseAge(A)5b");
		service.setFieldValue("DISP_GE_24_MONS_18","txtSecI36to485b_SecICaseAge(A)5b");
		service.setFieldValue("DISP_GE_24_MONS_19","txtSecI48+5b_SecICaseAge(A)5b");
		service.setFieldValue("DISP_EXCEP_TOTALS","txtSecITotalCases5b_SecICaseAge(A)5b");
		service.setFieldValue("PEND_LT_12_MONS","txtSecII0to125b_SecIICaseAge(A)5b");
		service.setFieldValue("PEND_12_LT_18_MONS","txtSecII12to185b_SecIICaseAge(A)5b");
		service.setFieldValue("PEND_18_LT_24_MONS","txtSecII18to245b_SecIICaseAge(A)5b");
		service.setFieldValue("PEND_GE_24_MONS_29","txtSecII24to365b_SecIICaseAge(A)5b");
		service.setFieldValue("PEND_GE_24_MONS_30","txtSecII36to485b_SecIICaseAge(A)5b");
		service.setFieldValue("PEND_GE_24_MONS_31","txtSecII48+5b_SecIICaseAge(A)5b");
		service.setFieldValue("RETRIALS","txtRetrials5b_OtherComplaints5b");
		service.setFieldValue("PRETRIAL_CONF","txtPreSettlmntConf5b_OtherComplaints5b");
		service.setFieldValue("EC_CD_0_12_MONTHS","txtSecI0to125b_SecICaseAge(B)5b");
		service.setFieldValue("EC_CD_12_18_MONTHS","txtSecI12to185b_SecICaseAge(B)5b");
		service.setFieldValue("EC_CD_18_24_MONTHS","txt18to245b_SecICaseAge(B)5b");
		service.setFieldValue("EC_CD_24_36_MONTHS","txtSecI24to365b_SecICaseAge(B)5b");
		service.setFieldValue("EC_CD_36_48_MONTHS","txtSecI36to485b_SecICaseAge(B)5b");
		service.setFieldValue("EC_CD_GE_48_MONTHS","txtSecI48+5b_SecICaseAge(B)5b");
		service.setFieldValue("EC_CD_TOTAL_CASES","txtSecITotalCases5b_SecICaseAge(B)5b");
		service.setFieldValue("EC_CP_0_12_MONTHS","txtSecII0to125b_SecIICaseAge(B)5b");
		service.setFieldValue("EC_CP_12_18_MONTHS","txtSecII12to185b_SecIICaseAge(B)5b");
		service.setFieldValue("EC_CP_18_24_MONTHS","txtSecII18to245b_SecIICaseAge(B)5b");
		service.setFieldValue("EC_CP_24_36_MONTHS","txtSecII24to365b_SecIICaseAge(B)5b");
		service.setFieldValue("EC_CP_36_48_MONTHS","txtSecII36to485b_SecIICaseAge(B)5b");
		service.setFieldValue("EC_CP_GE_48_MONTHS","txtSecII48+5b_SecIICaseAge(B)5b");
		service.setFieldValue("EC_CP_TOTAL_CASES","txtSecIITotalCases5b_SecIICaseAge(B)5b");
		service.setFieldValue("PEND_EXCEP_TOTALS","txtSecIITotalCases5b_SecIICaseAge(A)5b");
		service.setFieldValue("EXCEPTIONAL_CASES_22","txtItem15b");
		service.setFieldValue("STAYED_CASES_23","txtItem25b");
		service.setFieldValue("PENDING_CASES_24","txtItem35b");

/******************************Setting values for Small Claims Appeal 05b******************************/
                  if(!boolImport)        
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000115]",caseTypeNameSpace);
                  else
                    service.objFuncParam = xmlForm05bData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000115]",caseTypeNameSpace);

		service.setFieldValue("FILINGS","txtSecVTrialDept5b");
		service.setFieldValue("DISPOSITIONS_TOTAL","txtSecVTrialDeNovo5b");
		service.setFieldValue("DISP_ATRL_DE_NOVO","txtSecVTrialDeNovo5b");		


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
/***********************************Web service call to RETRIEVE 05b  Data************************************/
/*************************************************************************************************************/

    service.callRetrieve05bData = function(doImport) {            
            boolImport = doImport;
            if(boolImport) //Setting approriate action to handle retrieve-data call
                service.objFuncParam = "Import";
            else
                service.objFuncParam = getServer().getJSXByName("sel_action").getValue();  
    
    
            var objService = JBSISEForms.loadResource("getForm05bData_xml");
            objService.setOperation("Retrieve05bData");
    //subscribe and call
    objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve05bDataSuccess);
    objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve05bDataError);
    objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve05bDataInvalid);
    
    objService.setEndpointURL(urlFetch05bData);    	
    objService.doCall();
    appLogger.trace(objService.getOutboundDocument());
    
    };
/*****************Action on a sucessful service call******************************/
    service.onRetrieve05bDataSuccess = function(objEvent) {
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
    service.onRetrieve05bDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
            var myStatus = objEvent.target.getRequest().getStatus();
            var myStatusText = objEvent.target.getRequest().getStatusText();  
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
            JBSIS.eForms.processException("JBSIS001GI802");
    };
    service.onRetrieve05bDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
    };
     }
);