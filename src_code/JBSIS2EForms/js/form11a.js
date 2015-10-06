var caseTypeNameSpace;
jsx3.lang.Package.definePackage
(
    "form11a.service",  //creating a package 
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
/**********************************SEND DATA FOR 11A*******************************************************/
/**********************************************************************************************************/
                   service.genOutputData=function(objOperation){
                                                        JBSIS.eForms.showLoadDialog(true);
                        service.objFuncParam = objOperation.getValue(); //object to pass Save/Submit option arond
                        form11aout =  new jsx3.xml.CDF.Document.newDocument(); /*CDF to send 11a data*/
/***************************Record holding Manual Non-Traffic Misdemeanor data**************************/
                        var objCaseMNTMNode = new jsx3.xml.Document().loadXML("<record jsxid='MNTM'/>");   
                        objCaseMNTMNode.setAttribute("caseTypeCode","000205");
                        objCaseMNTMNode.setAttribute("FILINGS_1",service.getVal("txtAccused11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("FILINGS_2",service.getVal("txtAccused11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("DISPOSITIONS_TOTAL_2",service.getVal("txtDispositionTotals11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_1",service.getVal("txtTransferred11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_2",service.getVal("txtTransferred11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("BHRG_DISM_TOTAL_1",service.getVal("txtWithoutAppearance11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("BHRG_DISM_TOTAL_2",service.getVal("txtWithoutAppearance11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("BHRG_DISM_OTHER_1",service.getVal("txtWithoutAppearance11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("BHRG_DISM_OTHER_2",service.getVal("txtWithoutAppearance11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("BHRG_BAIL_FORFEITURE_1",service.getVal("txtBailForfeitures11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("BHRG_BAIL_FORFEITURE_2",service.getVal("txtBailForfeitures11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("AHRG_DISM_TOTAL_1",service.getVal("txtAfterAppearance11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("AHRG_DISM_TOTAL_2",service.getVal("txtAfterAppearance11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("AHRG_SENT_PLEA_NOLO_1",service.getVal("txtPleasOfGuilty11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("AHRG_SENT_PLEA_NOLO_2",service.getVal("txtPleasOfGuilty11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_1",service.getVal("txtAcquittedDismissed11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_2",service.getVal("txtAcquittedDismissed11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_1",service.getVal("txtAcquittedDismissedAfter11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_2",service.getVal("txtAcquittedDismissedAfter11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_28_1",service.getVal("txtMisdemeanorsFelonies11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_28_2",service.getVal("txtMisdemeanorsFelonies11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_29_1",service.getVal("txtJuvenileOrder11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_29_2",service.getVal("txtJuvenileOrder11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_36_1",service.getVal("txtMisdemeanorsFeloniesAfter11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_36_2",service.getVal("txtMisdemeanorsFeloniesAfter11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1",service.getVal("txtAcqttedDismsdByJury11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2",service.getVal("txtAcqttedDismsdByJury11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1",service.getVal("txtAcqttedDismsdByJuryAfter11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_2",service.getVal("txtAcqttedDismsdByJuryAfter11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_1",service.getVal("txtConvicted11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_2",service.getVal("txtConvicted11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_1",service.getVal("txtConvictedAfter11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_2",service.getVal("txtConvictedAfter11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("PC1538_5_MOTION_1",service.getVal("txtSection1538511a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("PC1538_5_MOTION_2",service.getVal("txtSection1538511a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("OTHER_PREDISP_HRG_1",service.getVal("txtFailure2AppearHearing11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("OTHER_PREDISP_HRG_2",service.getVal("txtFailure2AppearHearing11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("POSTDISP_HRG_TOTAL_1",service.getVal("txtProbationHearings11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("POSTDISP_HRG_TOTAL_2",service.getVal("txtProbationHearings11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("VIOL_PROB_HRG_1",service.getVal("txtProbationHearings11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("VIOL_PROB_HRG_2",service.getVal("txtProbationHearings11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("STTLMT_CONF_1",service.getVal("txtPretrialSettlements11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("STTLMT_CONF_2",service.getVal("txtPretrialSettlements11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("DEF_DIVERTED_MANUAL_1",service.getVal("txtDefendentsDiverted11a_GroupA11a"));
                        objCaseMNTMNode.setAttribute("DEF_DIVERTED_MANUAL_2",service.getVal("txtDefendentsDiverted11a_GroupB11a"));
                        objCaseMNTMNode.setAttribute("BEGIN_PENDING","0");
                        objCaseMNTMNode.setAttribute("RESTORED_CRT_CNTRL","0");
                        objCaseMNTMNode.setAttribute("REMOVED_CRT_CNTRL","0");
                        objCaseMNTMNode.setAttribute("END_PENDING","0");
                        objCaseMNTMNode.setAttribute("DISP_AGE_0_30_DAYS","0");
                        objCaseMNTMNode.setAttribute("DISP_AGE_31_90_DAYS","0");
                        objCaseMNTMNode.setAttribute("DISP_AGE_91_120_DAYS","0");
                        objCaseMNTMNode.setAttribute("DISP_AGE_GE_121_DAYS","0");
                        objCaseMNTMNode.setAttribute("DISP_AGE_TOTAL","0");
                        form11aout.insertRecordNode(objCaseMNTMNode); 
/***************************Record holding Manual Traffic Misdemeanor data**************************/
                        var objCaseMTMNode = new jsx3.xml.Document().loadXML("<record jsxid='MTM'/>");   
                        objCaseMTMNode.setAttribute("caseTypeCode","000255");
                        objCaseMTMNode.setAttribute("FILINGS_1",service.getVal("txtAccused11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("FILINGS_2",service.getVal("txtAccused11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("DISPOSITIONS_TOTAL_2",service.getVal("txtDispositionTotals11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_1",service.getVal("txtTransferred11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_2",service.getVal("txtTransferred11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("BHRG_DISM_TOTAL_1",service.getVal("txtWithoutAppearance11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("BHRG_DISM_TOTAL_2",service.getVal("txtWithoutAppearance11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("BHRG_DISM_OTHER_1",service.getVal("txtWithoutAppearance11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("BHRG_DISM_OTHER_2",service.getVal("txtWithoutAppearance11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("BHRG_BAIL_FORFEITURE_1",service.getVal("txtBailForfeitures11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("BHRG_BAIL_FORFEITURE_2",service.getVal("txtBailForfeitures11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("AHRG_DISM_TOTAL_1",service.getVal("txtAfterAppearance11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("AHRG_DISM_TOTAL_2",service.getVal("txtAfterAppearance11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("AHRG_SENT_PLEA_NOLO_1",service.getVal("txtPleasOfGuilty11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("AHRG_SENT_PLEA_NOLO_2",service.getVal("txtPleasOfGuilty11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_1",service.getVal("txtAcquittedDismissed11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_2",service.getVal("txtAcquittedDismissed11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_1",service.getVal("txtAcquittedDismissedAfter11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_2",service.getVal("txtAcquittedDismissedAfter11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_28_1",service.getVal("txtMisdemeanorsFelonies11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_28_2",service.getVal("txtMisdemeanorsFelonies11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_29_1",service.getVal("txtJuvenileOrder11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_29_2",service.getVal("txtJuvenileOrder11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_36_1",service.getVal("txtMisdemeanorsFeloniesAfter11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("CONVICTION_TOTAL_MANUAL_36_2",service.getVal("txtMisdemeanorsFeloniesAfter11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1",service.getVal("txtAcqttedDismsdByJury11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2",service.getVal("txtAcqttedDismsdByJury11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1",service.getVal("txtAcqttedDismsdByJuryAfter11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_2",service.getVal("txtAcqttedDismsdByJuryAfter11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_1",service.getVal("txtConvicted11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_2",service.getVal("txtConvicted11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_1",service.getVal("txtConvictedAfter11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_2",service.getVal("txtConvictedAfter11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("PC1538_5_MOTION_1",service.getVal("txtSection1538511a_GroupC11a"));
                        objCaseMTMNode.setAttribute("PC1538_5_MOTION_2",service.getVal("txtSection1538511a_GroupD11a"));
                        objCaseMTMNode.setAttribute("OTHER_PREDISP_HRG_1",service.getVal("txtFailure2AppearHearing11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("OTHER_PREDISP_HRG_2",service.getVal("txtFailure2AppearHearing11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("POSTDISP_HRG_TOTAL_1",service.getVal("txtProbationHearings11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("POSTDISP_HRG_TOTAL_2",service.getVal("txtProbationHearings11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("VIOL_PROB_HRG_1",service.getVal("txtProbationHearings11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("VIOL_PROB_HRG_2",service.getVal("txtProbationHearings11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("STTLMT_CONF_1",service.getVal("txtPretrialSettlements11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("STTLMT_CONF_2",service.getVal("txtPretrialSettlements11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("DEF_DIVERTED_MANUAL_1",service.getVal("txtDefendentsDiverted11a_GroupC11a"));
                        objCaseMTMNode.setAttribute("DEF_DIVERTED_MANUAL_2",service.getVal("txtDefendentsDiverted11a_GroupD11a"));
                        objCaseMTMNode.setAttribute("BEGIN_PENDING","0");
                        objCaseMTMNode.setAttribute("RESTORED_CRT_CNTRL","0");
                        objCaseMTMNode.setAttribute("REMOVED_CRT_CNTRL","0");
                        objCaseMTMNode.setAttribute("END_PENDING","0");
                        objCaseMTMNode.setAttribute("DISP_AGE_0_30_DAYS","0");
                        objCaseMTMNode.setAttribute("DISP_AGE_31_90_DAYS","0");
                        objCaseMTMNode.setAttribute("DISP_AGE_91_120_DAYS","0");
                        objCaseMTMNode.setAttribute("DISP_AGE_GE_121_DAYS","0");
                        objCaseMTMNode.setAttribute("DISP_AGE_TOTAL","0");
                        form11aout.insertRecordNode(objCaseMTMNode); 
/***************************Record holding Manual Traffic Infractions data**************************/
                        var objCaseMTINode = new jsx3.xml.Document().loadXML("<record jsxid='MTI'/>");   
                        objCaseMTINode.setAttribute("caseTypeCode","000285");
                        objCaseMTINode.setAttribute("FILINGS_1",service.getVal("txtAccused11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("FILINGS_2","0");
                        objCaseMTINode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("DISPOSITIONS_TOTAL_2","0");
                        objCaseMTINode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_1",service.getVal("txtTransferred11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_2","0");
                        objCaseMTINode.setAttribute("BHRG_DISM_TOTAL_1",service.getVal("txtWithoutAppearance11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("BHRG_DISM_TOTAL_2","0");
                        objCaseMTINode.setAttribute("BHRG_DISM_OTHER_1",service.getVal("txtWithoutAppearance11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("BHRG_DISM_OTHER_2","0");
                        objCaseMTINode.setAttribute("BHRG_BAIL_FORFEITURE_1",service.getVal("txtBailForfeitures11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("BHRG_BAIL_FORFEITURE_2","0");
                        objCaseMTINode.setAttribute("AHRG_DISM_TOTAL_1",service.getVal("txtAfterAppearance11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("AHRG_DISM_TOTAL_2","0");
                        objCaseMTINode.setAttribute("AHRG_SENT_PLEA_NOLO_1",service.getVal("txtPleasOfGuilty11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("AHRG_SENT_PLEA_NOLO_2","0");
                        objCaseMTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_1",service.getVal("txtAcquittedDismissed11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_2","0");
                        objCaseMTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_1",service.getVal("txtAcquittedDismissedAfter11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_2","0");
                        objCaseMTINode.setAttribute("CONVICTION_TOTAL_MANUAL_28_1",service.getVal("txtMisdemeanorsFelonies11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("CONVICTION_TOTAL_MANUAL_28_2","0");
                        objCaseMTINode.setAttribute("CONVICTION_TOTAL_MANUAL_29_1",service.getVal("txtJuvenileOrder11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("CONVICTION_TOTAL_MANUAL_29_2","0");
                        objCaseMTINode.setAttribute("CONVICTION_TOTAL_MANUAL_36_1",service.getVal("txtMisdemeanorsFeloniesAfter11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("CONVICTION_TOTAL_MANUAL_36_2","0");
                        objCaseMTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1","0");
                        objCaseMTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2","0");
                        objCaseMTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1","0");
                        objCaseMTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_2","0");
                        objCaseMTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_1","0");
                        objCaseMTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_2","0");
                        objCaseMTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_1","0");
                        objCaseMTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_2","0");
                        objCaseMTINode.setAttribute("PC1538_5_MOTION_1","0");
                        objCaseMTINode.setAttribute("PC1538_5_MOTION_2","0");
                        objCaseMTINode.setAttribute("OTHER_PREDISP_HRG_1",service.getVal("txtFailure2AppearHearing11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("OTHER_PREDISP_HRG_2","0");
                        objCaseMTINode.setAttribute("POSTDISP_HRG_TOTAL_1",service.getVal("txtProbationHearings11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("POSTDISP_HRG_TOTAL_2","0");
                        objCaseMTINode.setAttribute("VIOL_PROB_HRG_1",service.getVal("txtProbationHearings11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("VIOL_PROB_HRG_2","0");
                        objCaseMTINode.setAttribute("STTLMT_CONF_1","0");
                        objCaseMTINode.setAttribute("STTLMT_CONF_2","0");
                        objCaseMTINode.setAttribute("DEF_DIVERTED_MANUAL_1",service.getVal("txtDefendentsDiverted11a_TrafficInfractions11a"));
                        objCaseMTINode.setAttribute("DEF_DIVERTED_MANUAL_2","0");
                        objCaseMTINode.setAttribute("BEGIN_PENDING","0");
                        objCaseMTINode.setAttribute("RESTORED_CRT_CNTRL","0");
                        objCaseMTINode.setAttribute("REMOVED_CRT_CNTRL","0");
                        objCaseMTINode.setAttribute("END_PENDING","0");
                        objCaseMTINode.setAttribute("DISP_AGE_0_30_DAYS","0");
                        objCaseMTINode.setAttribute("DISP_AGE_31_90_DAYS","0");
                        objCaseMTINode.setAttribute("DISP_AGE_91_120_DAYS","0");
                        objCaseMTINode.setAttribute("DISP_AGE_GE_121_DAYS","0");
                        objCaseMTINode.setAttribute("DISP_AGE_TOTAL","0");
                        form11aout.insertRecordNode(objCaseMTINode); 
/***************************Record holding Manual Non-Traffic Infractions data**************************/
                        var objCaseMNTINode = new jsx3.xml.Document().loadXML("<record jsxid='MNTI'/>");   
                        objCaseMNTINode.setAttribute("caseTypeCode","000295");
                        objCaseMNTINode.setAttribute("FILINGS_1",service.getVal("txtAccused11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("FILINGS_2","0");
                        objCaseMNTINode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDispositionTotals11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("DISPOSITIONS_TOTAL_2","0");
                        objCaseMNTINode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_1",service.getVal("txtTransferred11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_2","0");
                        objCaseMNTINode.setAttribute("BHRG_DISM_TOTAL_1",service.getVal("txtWithoutAppearance11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("BHRG_DISM_TOTAL_2","0");
                        objCaseMNTINode.setAttribute("BHRG_DISM_OTHER_1",service.getVal("txtWithoutAppearance11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("BHRG_DISM_OTHER_2","0");
                        objCaseMNTINode.setAttribute("BHRG_BAIL_FORFEITURE_1",service.getVal("txtBailForfeitures11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("BHRG_BAIL_FORFEITURE_2","0");
                        objCaseMNTINode.setAttribute("AHRG_DISM_TOTAL_1",service.getVal("txtAfterAppearance11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("AHRG_DISM_TOTAL_2","0");
                        objCaseMNTINode.setAttribute("AHRG_SENT_PLEA_NOLO_1",service.getVal("txtPleasOfGuilty11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("AHRG_SENT_PLEA_NOLO_2","0");
                        objCaseMNTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_1",service.getVal("txtAcquittedDismissed11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_2","0");
                        objCaseMNTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_1",service.getVal("txtAcquittedDismissedAfter11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_2","0");
                        objCaseMNTINode.setAttribute("CONVICTION_TOTAL_MANUAL_28_1",service.getVal("txtMisdemeanorsFelonies11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("CONVICTION_TOTAL_MANUAL_28_2","0");
                        objCaseMNTINode.setAttribute("CONVICTION_TOTAL_MANUAL_29_1",service.getVal("txtJuvenileOrder11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("CONVICTION_TOTAL_MANUAL_29_2","0");
                        objCaseMNTINode.setAttribute("CONVICTION_TOTAL_MANUAL_36_1",service.getVal("txtMisdemeanorsFeloniesAfter11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("CONVICTION_TOTAL_MANUAL_36_2","0");
                        objCaseMNTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1","0");
                        objCaseMNTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2","0");
                        objCaseMNTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1","0");
                        objCaseMNTINode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_2","0");
                        objCaseMNTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_1","0");
                        objCaseMNTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_2","0");
                        objCaseMNTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_1","0");
                        objCaseMNTINode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_2","0");
                        objCaseMNTINode.setAttribute("PC1538_5_MOTION_1","0");
                        objCaseMNTINode.setAttribute("PC1538_5_MOTION_2","0");
                        objCaseMNTINode.setAttribute("OTHER_PREDISP_HRG_1",service.getVal("txtFailure2AppearHearing11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("OTHER_PREDISP_HRG_2","0");
                        objCaseMNTINode.setAttribute("POSTDISP_HRG_TOTAL_1",service.getVal("txtProbationHearings11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("POSTDISP_HRG_TOTAL_2","0");
                        objCaseMNTINode.setAttribute("VIOL_PROB_HRG_1",service.getVal("txtProbationHearings11a_Infractions11a"));
                        objCaseMNTINode.setAttribute("VIOL_PROB_HRG_2","0");
                        objCaseMNTINode.setAttribute("STTLMT_CONF_1","0");
                        objCaseMNTINode.setAttribute("STTLMT_CONF_2","0");
                        objCaseMNTINode.setAttribute("DEF_DIVERTED_MANUAL_1","0");
                        objCaseMNTINode.setAttribute("DEF_DIVERTED_MANUAL_2","0");
                        objCaseMNTINode.setAttribute("BEGIN_PENDING","0");
                        objCaseMNTINode.setAttribute("RESTORED_CRT_CNTRL","0");
                        objCaseMNTINode.setAttribute("REMOVED_CRT_CNTRL","0");
                        objCaseMNTINode.setAttribute("END_PENDING","0");
                        objCaseMNTINode.setAttribute("DISP_AGE_0_30_DAYS","0");
                        objCaseMNTINode.setAttribute("DISP_AGE_31_90_DAYS","0");
                        objCaseMNTINode.setAttribute("DISP_AGE_91_120_DAYS","0");
                        objCaseMNTINode.setAttribute("DISP_AGE_GE_121_DAYS","0");
                        objCaseMNTINode.setAttribute("DISP_AGE_TOTAL","0");
                        form11aout.insertRecordNode(objCaseMNTINode); 
/***************************Record holding Manual General Misdemeanor data**************************/
                        var objCaseMGMNode = new jsx3.xml.Document().loadXML("<record jsxid='MGM'/>");   
                        objCaseMGMNode.setAttribute("caseTypeCode","000200");
                        objCaseMGMNode.setAttribute("FILINGS_1",service.getVal("txtNewFilings11a"));
                        objCaseMGMNode.setAttribute("FILINGS_2","0");
                        objCaseMGMNode.setAttribute("DISPOSITIONS_TOTAL_1",service.getVal("txtDisposedThisMnth11a"));
                        objCaseMGMNode.setAttribute("DISPOSITIONS_TOTAL_2","0");
                        objCaseMGMNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_1","0");
                        objCaseMGMNode.setAttribute("BHRG_TRANSFER_TOTAL_MANUAL_2","0");
                        objCaseMGMNode.setAttribute("BHRG_DISM_TOTAL_1","0");
                        objCaseMGMNode.setAttribute("BHRG_DISM_TOTAL_2","0");
                        objCaseMGMNode.setAttribute("BHRG_DISM_OTHER_1","0");
                        objCaseMGMNode.setAttribute("BHRG_DISM_OTHER_2","0");
                        objCaseMGMNode.setAttribute("BHRG_BAIL_FORFEITURE_1","0");
                        objCaseMGMNode.setAttribute("BHRG_BAIL_FORFEITURE_2","0");
                        objCaseMGMNode.setAttribute("AHRG_DISM_TOTAL_1","0");
                        objCaseMGMNode.setAttribute("AHRG_DISM_TOTAL_2","0");
                        objCaseMGMNode.setAttribute("AHRG_SENT_PLEA_NOLO_1","0");
                        objCaseMGMNode.setAttribute("AHRG_SENT_PLEA_NOLO_2","0");
                        objCaseMGMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_1","0");
                        objCaseMGMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_27_2","0");
                        objCaseMGMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_1","0");
                        objCaseMGMNode.setAttribute("ACT_DISM_ACQ_TOTAL_MANUAL_35_2","0");
                        objCaseMGMNode.setAttribute("CONVICTION_TOTAL_MANUAL_28_1","0");
                        objCaseMGMNode.setAttribute("CONVICTION_TOTAL_MANUAL_28_2","0");
                        objCaseMGMNode.setAttribute("CONVICTION_TOTAL_MANUAL_29_1","0");
                        objCaseMGMNode.setAttribute("CONVICTION_TOTAL_MANUAL_29_2","0");
                        objCaseMGMNode.setAttribute("CONVICTION_TOTAL_MANUAL_36_1","0");
                        objCaseMGMNode.setAttribute("CONVICTION_TOTAL_MANUAL_36_2","0");
                        objCaseMGMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1",service.getVal("txtCaseInvMisdemeanor11a_JuryTrial11a"));
                        objCaseMGMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2",service.getVal("txtCaseInvMisdemeanor11a_CourtTrial11a"));
                        objCaseMGMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1",service.getVal("txtTrialInfractions11a_CourtTrial11a"));
                        objCaseMGMNode.setAttribute("AJRY_DISM_ACQ_TOTAL_MANUAL_38_2","0");
                        objCaseMGMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_1","0");
                        objCaseMGMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_32_2","0");
                        objCaseMGMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_1","0");
                        objCaseMGMNode.setAttribute("AJRY_CONVICTION_TOTAL_MANUAL_39_2","0");
                        objCaseMGMNode.setAttribute("PC1538_5_MOTION_1","0");
                        objCaseMGMNode.setAttribute("PC1538_5_MOTION_2","0");
                        objCaseMGMNode.setAttribute("OTHER_PREDISP_HRG_1","0");
                        objCaseMGMNode.setAttribute("OTHER_PREDISP_HRG_2","0");
                        objCaseMGMNode.setAttribute("POSTDISP_HRG_TOTAL_1","0");
                        objCaseMGMNode.setAttribute("POSTDISP_HRG_TOTAL_2","0");
                        objCaseMGMNode.setAttribute("VIOL_PROB_HRG_1","0");
                        objCaseMGMNode.setAttribute("VIOL_PROB_HRG_2","0");
                        objCaseMGMNode.setAttribute("STTLMT_CONF_1","0");
                        objCaseMGMNode.setAttribute("STTLMT_CONF_2","0");
                        objCaseMGMNode.setAttribute("DEF_DIVERTED_MANUAL_1","0");
                        objCaseMGMNode.setAttribute("DEF_DIVERTED_MANUAL_2","0");
		      objCaseMGMNode.setAttribute("BEGIN_PENDING",service.getVal("txtBegningPendingCases11a"));
		      objCaseMGMNode.setAttribute("RESTORED_CRT_CNTRL",service.getVal("txtRestoredActive11a"));
		      objCaseMGMNode.setAttribute("REMOVED_CRT_CNTRL",service.getVal("txtRemovedActive11a"));
		      objCaseMGMNode.setAttribute("END_PENDING",service.getVal("txtEndPendingCases11a"));
		      objCaseMGMNode.setAttribute("DISP_AGE_0_30_DAYS",service.getVal("txt0to30days11a"));
		      objCaseMGMNode.setAttribute("DISP_AGE_31_90_DAYS",service.getVal("txt31to90days11a"));
		      objCaseMGMNode.setAttribute("DISP_AGE_91_120_DAYS",service.getVal("txt91to120days11a"));
		      objCaseMGMNode.setAttribute("DISP_AGE_GE_121_DAYS",service.getVal("txt120PlusDays11a"));
		      objCaseMGMNode.setAttribute("DISP_AGE_TOTAL",service.getVal("txtDaysTotal11a"));
                        form11aout.insertRecordNode(objCaseMGMNode); 
                        JBSISEForms.Cache.setDocument("form11aout",form11aout);
try{
                        service.callSubmit11aData();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                    }     
              //call this method to begin the service call (JBSIS.eForms.Nav.callSubmit11aData();)
              service.callSubmit11aData = function() {
                  var objService = JBSISEForms.loadResource("sendForm11aData_xml");
                  objService.setOperation("Submit11aData");
                  //subscribe and call
                  objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onSubmit11aDataSuccess);
                  objService.subscribe(jsx3.net.Service.ON_ERROR, service.onSubmit11aDataError);
                  objService.subscribe(jsx3.net.Service.ON_INVALID, service.onSubmit11aDataInvalid);
                  objService.setEndpointURL(urlSubmit11aData);
                 // objService.compile();
                  objService.doCall();
                    appLogger.trace(objService.getOutboundDocument());
                };
            service.onSubmit11aDataSuccess = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
                  var responseXML = objEvent.target.getInboundDocument();
                  var statusNode =   responseXML.selectSingleNode("//ns0:Status",statusNameSpace);
                  var msgNode =   responseXML.selectSingleNode("//ns0:Message",statusNameSpace);      

                  appLogger.trace(responseXML);            

                  if(statusNode.getValue()==0) {
                        JBSISEForms.Cache.clearById("form11aout");
                        boolChangeState = false;
                        //showMessageDialog("Success",msgNode.getValue()+"<br><br>Do you wish to create another report?","YES/NO","JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                        JBSIS.eForms.processException(msgNode.getValue(),"JBSIS.eForms.Nav.showTab(boolChangeState)","JBSIS.eForms.Nav.changeBody(getServer().getJSXByName('btnHome'));getServer().getJSXByName('blkButtons').hideMask()");
                    }
                  else {
                        //showInfoDialog("Failed",msgNode.getValue());
                        JBSIS.eForms.processException(msgNode.getValue());
                  }
            };
           service.onSubmit11aDataError = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
                  var myStatus = objEvent.target.getRequest().getStatus();
                  var myStatusText = objEvent.target.getRequest().getStatusText();
            //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
                JBSIS.eForms.processException("JBSIS001GI802");
            };
            service.onSubmit11aDataInvalid = function(objEvent) {
              JBSIS.eForms.showLoadDialog(false);
                  objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
            };
/*************************************************************************************************/
/***************************** RETRIEVE DATA FOR 11A**********************************************/
/*************************************************************************************************/
	    service.setInputData=function(xmlForm11aData){

                        if(!boolImport)                                                            
                                        JBSIS.eForms.Nav.showTab(true);  
                        else
                                    boolChangeState = true;

                     if(!boolImport) {
                         caseTypeNameSpace = "xmlns:jsx2='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS11aV2_INT/1.0/xsd'";
                        }
                     else {
                          caseTypeNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/JBSIS11aV2_INT/1.0/xsd'";
                        }
                            
/***************************Setting values for Manual Traffic Misdemeanor data**************************/
                            
                        if(!boolImport)
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000205]",caseTypeNameSpace);
                        else
                             service.objFuncParam = xmlForm11aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000205]",caseTypeNameSpace);
                        service.setFieldValue("FILINGS_1","txtAccused11a_GroupA11a");
                        service.setFieldValue("FILINGS_2","txtAccused11a_GroupB11a");
                        service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals11a_GroupA11a");
                        service.setFieldValue("DISPOSITIONS_TOTAL_2","txtDispositionTotals11a_GroupB11a");
                        service.setFieldValue("BHRG_TRANSFER_TOTAL_MANUAL_1","txtTransferred11a_GroupA11a");
                        service.setFieldValue("BHRG_TRANSFER_TOTAL_MANUAL_2","txtTransferred11a_GroupB11a");
                        service.setFieldValue("BHRG_DISM_TOTAL_1","txtWithoutAppearance11a_GroupA11a");
                        service.setFieldValue("BHRG_DISM_TOTAL_2","txtWithoutAppearance11a_GroupB11a");
                        service.setFieldValue("BHRG_BAIL_FORFEITURE_1","txtBailForfeitures11a_GroupA11a");
                        service.setFieldValue("BHRG_BAIL_FORFEITURE_2","txtBailForfeitures11a_GroupB11a");
                        service.setFieldValue("AHRG_DISM_TOTAL_1","txtAfterAppearance11a_GroupA11a");
                        service.setFieldValue("AHRG_DISM_TOTAL_2","txtAfterAppearance11a_GroupB11a");
                        service.setFieldValue("AHRG_SENT_PLEA_NOLO_1","txtPleasOfGuilty11a_GroupA11a");
                        service.setFieldValue("AHRG_SENT_PLEA_NOLO_2","txtPleasOfGuilty11a_GroupB11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_27_1","txtAcquittedDismissed11a_GroupA11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_27_2","txtAcquittedDismissed11a_GroupB11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_35_1","txtAcquittedDismissedAfter11a_GroupA11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_35_2","txtAcquittedDismissedAfter11a_GroupB11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_28_1","txtMisdemeanorsFelonies11a_GroupA11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_28_2","txtMisdemeanorsFelonies11a_GroupB11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_29_1","txtJuvenileOrder11a_GroupA11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_29_2","txtJuvenileOrder11a_GroupB11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_36_1","txtMisdemeanorsFeloniesAfter11a_GroupA11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_36_2","txtMisdemeanorsFeloniesAfter11a_GroupB11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1","txtAcqttedDismsdByJury11a_GroupA11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2","txtAcqttedDismsdByJury11a_GroupB11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1","txtAcqttedDismsdByJuryAfter11a_GroupA11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_38_2","txtAcqttedDismsdByJuryAfter11a_GroupB11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_32_1","txtConvicted11a_GroupA11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_32_2","txtConvicted11a_GroupB11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_39_1","txtConvictedAfter11a_GroupA11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_39_2","txtConvictedAfter11a_GroupB11a");
                        service.setFieldValue("PC1538_5_MOTION_1","txtSection1538511a_GroupA11a");
                        service.setFieldValue("PC1538_5_MOTION_2","txtSection1538511a_GroupB11a");
                        service.setFieldValue("OTHER_PREDISP_HRG_1","txtFailure2AppearHearing11a_GroupA11a");
                        service.setFieldValue("OTHER_PREDISP_HRG_2","txtFailure2AppearHearing11a_GroupB11a");
                        service.setFieldValue("POSTDISP_HRG_TOTAL_1","txtProbationHearings11a_GroupA11a");
                        service.setFieldValue("POSTDISP_HRG_TOTAL_2","txtProbationHearings11a_GroupB11a");
                        service.setFieldValue("STTLMT_CONF_1","txtPretrialSettlements11a_GroupA11a");
                        service.setFieldValue("STTLMT_CONF_2","txtPretrialSettlements11a_GroupB11a");
                        service.setFieldValue("DEF_DIVERTED_MANUAL_1","txtDefendentsDiverted11a_GroupA11a");
                        service.setFieldValue("DEF_DIVERTED_MANUAL_2","txtDefendentsDiverted11a_GroupB11a");
/***************************Setting values for Manual Traffic Misdemeanor data**************************/
                        if(!boolImport)        
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000255]",caseTypeNameSpace);
                        else
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000255]",caseTypeNameSpace);
                        service.setFieldValue("FILINGS_1","txtAccused11a_GroupC11a");
                        service.setFieldValue("FILINGS_2","txtAccused11a_GroupD11a");
                        service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals11a_GroupC11a");
                        service.setFieldValue("DISPOSITIONS_TOTAL_2","txtDispositionTotals11a_GroupD11a");
                        service.setFieldValue("BHRG_TRANSFER_TOTAL_MANUAL_1","txtTransferred11a_GroupC11a");
                        service.setFieldValue("BHRG_TRANSFER_TOTAL_MANUAL_2","txtTransferred11a_GroupD11a");
                        service.setFieldValue("BHRG_DISM_TOTAL_1","txtWithoutAppearance11a_GroupC11a");
                        service.setFieldValue("BHRG_DISM_TOTAL_2","txtWithoutAppearance11a_GroupD11a");
                        service.setFieldValue("BHRG_BAIL_FORFEITURE_1","txtBailForfeitures11a_GroupC11a");
                        service.setFieldValue("BHRG_BAIL_FORFEITURE_2","txtBailForfeitures11a_GroupD11a");
                        service.setFieldValue("AHRG_DISM_TOTAL_1","txtAfterAppearance11a_GroupC11a");
                        service.setFieldValue("AHRG_DISM_TOTAL_2","txtAfterAppearance11a_GroupD11a");
                        service.setFieldValue("AHRG_SENT_PLEA_NOLO_1","txtPleasOfGuilty11a_GroupC11a");
                        service.setFieldValue("AHRG_SENT_PLEA_NOLO_2","txtPleasOfGuilty11a_GroupD11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_27_1","txtAcquittedDismissed11a_GroupC11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_27_2","txtAcquittedDismissed11a_GroupD11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_35_1","txtAcquittedDismissedAfter11a_GroupC11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_35_2","txtAcquittedDismissedAfter11a_GroupD11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_28_1","txtMisdemeanorsFelonies11a_GroupC11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_28_2","txtMisdemeanorsFelonies11a_GroupD11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_29_1","txtJuvenileOrder11a_GroupC11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_29_2","txtJuvenileOrder11a_GroupD11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_36_1","txtMisdemeanorsFeloniesAfter11a_GroupC11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_36_2","txtMisdemeanorsFeloniesAfter11a_GroupD11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1","txtAcqttedDismsdByJury11a_GroupC11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2","txtAcqttedDismsdByJury11a_GroupD11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1","txtAcqttedDismsdByJuryAfter11a_GroupC11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_38_2","txtAcqttedDismsdByJuryAfter11a_GroupD11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_32_1","txtConvicted11a_GroupC11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_32_2","txtConvicted11a_GroupD11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_39_1","txtConvictedAfter11a_GroupC11a");
                        service.setFieldValue("AJRY_CONVICTION_TOTAL_MANUAL_39_2","txtConvictedAfter11a_GroupD11a");
                        service.setFieldValue("PC1538_5_MOTION_1","txtSection1538511a_GroupC11a");
                        service.setFieldValue("PC1538_5_MOTION_2","txtSection1538511a_GroupD11a");
                        service.setFieldValue("OTHER_PREDISP_HRG_1","txtFailure2AppearHearing11a_GroupC11a");
                        service.setFieldValue("OTHER_PREDISP_HRG_2","txtFailure2AppearHearing11a_GroupD11a");
                        service.setFieldValue("POSTDISP_HRG_TOTAL_1","txtProbationHearings11a_GroupC11a");
                        service.setFieldValue("POSTDISP_HRG_TOTAL_2","txtProbationHearings11a_GroupD11a");
                        service.setFieldValue("STTLMT_CONF_1","txtPretrialSettlements11a_GroupC11a");
                        service.setFieldValue("STTLMT_CONF_2","txtPretrialSettlements11a_GroupD11a");
                        service.setFieldValue("DEF_DIVERTED_MANUAL_1","txtDefendentsDiverted11a_GroupC11a");
                        service.setFieldValue("DEF_DIVERTED_MANUAL_2","txtDefendentsDiverted11a_GroupD11a");
/***************************Setting values for Manual Traffic Infractions data**************************/
                        
                        if(!boolImport)
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000285]",caseTypeNameSpace);
                        else
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000285]",caseTypeNameSpace);
                        service.setFieldValue("FILINGS_1","txtAccused11a_TrafficInfractions11a");
                        service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals11a_TrafficInfractions11a");
                        service.setFieldValue("BHRG_TRANSFER_TOTAL_MANUAL_1","txtTransferred11a_TrafficInfractions11a");
                        service.setFieldValue("BHRG_DISM_TOTAL_1","txtWithoutAppearance11a_TrafficInfractions11a");
                        service.setFieldValue("BHRG_BAIL_FORFEITURE_1","txtBailForfeitures11a_TrafficInfractions11a");
                        service.setFieldValue("AHRG_DISM_TOTAL_1","txtAfterAppearance11a_TrafficInfractions11a");
                        service.setFieldValue("AHRG_SENT_PLEA_NOLO_1","txtPleasOfGuilty11a_TrafficInfractions11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_27_1","txtAcquittedDismissed11a_TrafficInfractions11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_35_1","txtAcquittedDismissedAfter11a_TrafficInfractions11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_28_1","txtMisdemeanorsFelonies11a_TrafficInfractions11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_29_1","txtJuvenileOrder11a_TrafficInfractions11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_36_1","txtMisdemeanorsFeloniesAfter11a_TrafficInfractions11a");
                        service.setFieldValue("OTHER_PREDISP_HRG_1","txtFailure2AppearHearing11a_TrafficInfractions11a");
                        service.setFieldValue("POSTDISP_HRG_TOTAL_1","txtProbationHearings11a_TrafficInfractions11a");
                        service.setFieldValue("DEF_DIVERTED_MANUAL_1","txtDefendentsDiverted11a_TrafficInfractions11a");
/***************************Setting values for Manual Non-Traffic Infractions data**************************/
                        if(!boolImport)
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000295]",caseTypeNameSpace);
                        else
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000295]",caseTypeNameSpace);
                        service.setFieldValue("FILINGS_1","txtAccused11a_Infractions11a");
                        service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDispositionTotals11a_Infractions11a");
                        service.setFieldValue("BHRG_TRANSFER_TOTAL_MANUAL_1","txtTransferred11a_Infractions11a");
                        service.setFieldValue("BHRG_DISM_TOTAL_1","txtWithoutAppearance11a_Infractions11a");
                        service.setFieldValue("BHRG_BAIL_FORFEITURE_1","txtBailForfeitures11a_Infractions11a");
                        service.setFieldValue("AHRG_DISM_TOTAL_1","txtAfterAppearance11a_Infractions11a");
                        service.setFieldValue("AHRG_SENT_PLEA_NOLO_1","txtPleasOfGuilty11a_Infractions11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_27_1","txtAcquittedDismissed11a_Infractions11a");
                        service.setFieldValue("ACT_DISM_ACQ_TOTAL_MANUAL_35_1","txtAcquittedDismissedAfter11a_Infractions11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_28_1","txtMisdemeanorsFelonies11a_Infractions11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_29_1","txtJuvenileOrder11a_Infractions11a");
                        service.setFieldValue("CONVICTION_TOTAL_MANUAL_36_1","txtMisdemeanorsFeloniesAfter11a_Infractions11a");
                        service.setFieldValue("OTHER_PREDISP_HRG_1","txtFailure2AppearHearing11a_Infractions11a");
                        service.setFieldValue("POSTDISP_HRG_TOTAL_1","txtProbationHearings11a_Infractions11a");
/***************************Setting values for Manual General Misdemeanor data**************************/
                        if(!boolImport)
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//jsx2:CASE_TYPE_CODE[text()=000200]",caseTypeNameSpace);
                        else
                            service.objFuncParam = xmlForm11aData.selectSingleNode("//ns0:CASE_TYPE_CODE[text()=000200]",caseTypeNameSpace);
                        service.setFieldValue("FILINGS_1","txtNewFilings11a");
                        service.setFieldValue("DISPOSITIONS_TOTAL_1","txtDisposedThisMnth11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_31_1","txtCaseInvMisdemeanor11a_JuryTrial11a");
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_31_2","txtCaseInvMisdemeanor11a_CourtTrial11a");					
                        service.setFieldValue("AJRY_DISM_ACQ_TOTAL_MANUAL_38_1","txtTrialInfractions11a_CourtTrial11a");
		      service.setFieldValue("BEGIN_PENDING","txtBegningPendingCases11a");
		      service.setFieldValue("RESTORED_CRT_CNTRL","txtRestoredActive11a");
		      service.setFieldValue("REMOVED_CRT_CNTRL","txtRemovedActive11a");
		      service.setFieldValue("END_PENDING","txtEndPendingCases11a");
		      service.setFieldValue("DISP_AGE_0_30_DAYS","txt0to30days11a");
		      service.setFieldValue("DISP_AGE_31_90_DAYS","txt31to90days11a");
		      service.setFieldValue("DISP_AGE_91_120_DAYS","txt91to120days11a");
		      service.setFieldValue("DISP_AGE_GE_121_DAYS","txt120PlusDays11a");
		      service.setFieldValue("DISP_AGE_TOTAL","txtDaysTotal11a");

		}
	
/*************************************************************************************************************/
/***********************************Web service call to RETRIEVE 11a  Data************************************/
/*************************************************************************************************************/
                    service.callRetrieve11aData = function(doImport) { 
                                              
                        boolImport = doImport;
                        if(boolImport)
                            service.objFuncParam = "Import";
                        else
                            service.objFuncParam = getServer().getJSXByName("sel_action").getValue();
                        var objService = JBSISEForms.loadResource("getForm11aData_xml");
                       
                         objService.setOperation("Retrieve11aData");
                        //subscribe and call
                        objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onRetrieve11aDataSuccess);
                        objService.subscribe(jsx3.net.Service.ON_ERROR, service.onRetrieve11aDataError);
                        objService.subscribe(jsx3.net.Service.ON_INVALID, service.onRetrieve11aDataInvalid);
                         
                        objService.setEndpointURL(urlFetch11aData);
                          //objService.compile();
                        objService.doCall();
                        appLogger.trace(objService.getOutboundDocument());
                       
                 };
                 service.onRetrieve11aDataSuccess = function(objEvent) {
                  JBSIS.eForms.showLoadDialog(false);
                         var responseXML = objEvent.target.getInboundDocument();
                        appLogger.trace(responseXML);
                         if(responseXML.selectSingleNode("//ns0:Status",statusNameSpace).getValue()==0){
                                    form11a.service.setInputData(responseXML);
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
                service.onRetrieve11aDataError = function(objEvent) {
                  JBSIS.eForms.showLoadDialog(false);
                        var myStatus = objEvent.target.getRequest().getStatus();
                        var myStatusText = objEvent.target.getRequest().getStatusText();                
                        //showErrorDialog("ERROR!","Request could not be sent<br>Please try again",'');
                        JBSIS.eForms.processException("JBSIS001GI802");
                   
               };
                service.onRetrieve11aDataInvalid = function(objEvent) {
                  JBSIS.eForms.showLoadDialog(false);
                      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\n\n" + objEvent.message);
               };
        }
);