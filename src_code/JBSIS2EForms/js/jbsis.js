jsx3.require("jsx3.net.Form"); // GI package required to perform FORM functions like GET and POST
boolChangeState = false;  //boolean to specify the state of the form, defaults to false to indicate unedited form

jsx3.require("jsx3.app.Monitor"); // loading the application monitor
var appLogger = jsx3.util.Logger.getLogger("jbsisWebAppMonitor"); //getting a handle on the application monitor
appLogger.trace("Logging started");
appLogger.trace("Logging trace messages started");

jsx3.gui.Event.subscribe(jsx3.gui.Event.BEFOREUNLOAD, function(objEvent) { objEvent.returnValue = "If you leave this page, your session will end, and you will lose any unsaved data"; });

getServer = function(){
    return JBSISEForms; //function to return server namespace for the project
};
/*******Function to initiate Import*************/
try{
    startImport=function() {
        if(boolChangeState)
            
              JBSIS.eForms.processException("JBSIS001GI953","showAttachDocument()","");
        else
            showAttachDocument();
   };
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/****Function to display attachement diaglog box**************/
try{
    showAttachDocument = function(){ //display attachements window
                getServer().getBodyBlock().loadAndCache("components/dialogs/dlgAttachDocument.xml",true);
};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/***********Function to allow users to browse to select file on LOCAL machine**********/
try{
doBrowse = function() { //        
       strFieldName = "txtSelectFile";
 
       // Checks if the form has been created (it gets created when the file upload button is clicked)
        CSVform = new jsx3.net.Form(jsx3.net.Form.METHOD_POST,strUploadURL,true);
    // Adds a file upload field to the form.
    CSVform.addFileUploadField(strFieldName);
    // Subscribes the function onFileSelected to Event type EVENT_FILE_SELECTED. EVENT_FILE_SELECTED is published when a file is selected
    CSVform.subscribe(jsx3.net.Form.EVENT_FILE_SELECTED, onFileSelected);
    // Invokes the operating system file browser to choose a file for this file upload field
    CSVform.promptForFile(strFieldName);
};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/*******************Function to prepare Import payload and initiate Import call**********/
try{
    doImport = function(){ //function to import csv data
        //sets the name of the selected file to attribute  to the form
        //adding required User Info
        CSVform.setField("docName",getServer().getJSXByName("txtSelectFile").getValue()); 
        CSVform.setField("Court_Code",JBSIS.eForms.Nav.getCourtCode()); 
        CSVform.setField("Request_Date",JBSIS.eForms.Nav.getDateTime("Date")); 
        CSVform.setField("Request_Time",JBSIS.eForms.Nav.getDateTime("Time")); 
        CSVform.setField("Selected_Report",JBSIS.eForms.Nav.getReportType()); 
        CSVform.setField("Selected_Month",getServer().getJSXByName("sel_month").getValue()); 
        CSVform.setField("Selected_Year",getServer().getJSXByName("sel_year").getValue()); 
        CSVform.setField("Selected_Action","Import"); 
        
        CSVform.setMultipart("true");  //makes the form uploadable
   /*********Subscribing to Response to retrieve parsed data**********/
   /*****NOTE: JavaScript's Cross-domain security constraints restricts us from reading HTTP responses****/
   /*********HTTP POST payloads are stored at BW end and retrieved via WebService calls to ensure success**/

       CSVform.subscribe(jsx3.HttpForm.EVENT_ON_RESPONSE,function(objEvent) {
              JBSIS.eForms.showLoadDialog(true);                                
                 if(JBSIS.eForms.Nav.getReportType()=="11a")
                        form11a.service.callRetrieve11aData(true);
                 else if(JBSIS.eForms.Nav.getReportType()=="07a"){   
                        form07a.service.callRetrieve07aData(true);             
                    }
                 else if(JBSIS.eForms.Nav.getReportType()=="07b")
                        form07b.service.callRetrieve07bData(true);            
                
        });
       CSVform.subscribe(jsx3.HttpForm.EVENT_ON_ERROR,function(objEvent) {               
              JBSIS.eForms.showLoadDialog(true);
                   if(JBSIS.eForms.Nav.getReportType()=="11a")
                        form11a.service.callRetrieve11aData(true);
                  else if(JBSIS.eForms.Nav.getReportType()=="07a")
                        form07a.service.callRetrieve07aData(true);      
                 else if(JBSIS.eForms.Nav.getReportType()=="07b")
                        form07b.service.callRetrieve07bData(true);                 
                
        });
      CSVform.subscribe(jsx3.HttpForm.EVENT_ON_TIMEOUT,function(objEvent) {
                //alert("Service call timed out");  
		JBSIS.eForms.processException("JBSIS001GI808");
                
        });
  //get handle to the form
  if(document.protocol == "File Protocol") {
    //window.alert("Access Denied","Due to browser security constraints, the form will not be posted. Deploy this application on an HTTP/S server to fully test.<br><br>Note: This error occurs, because this web page, hosted at <i>" + window.location.href + "</i>, is trying to POST to a server that is outside its security domain.",null,null,{width:400,height:190});
	appLogger.trace("Due to browser security constraints, the form will not be posted. Deploy this application on an HTTP/S server to fully test.<br><br>Note: This error occurs, because this web page, is trying to POST to a server that is outside its security domain.");
	JBSIS.eForms.processException("JBSIS001GI806");
      
          } else {
    //send the posting

    CSVform.send(); //sending data on HTTP POST
  
    
  }
        getServer().getJSXByName("btnImport").getAncestorOfType(jsx3.gui.Dialog).doClose();
        
    };
  }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/*******************Action to perform once file is selected*******************/
try{
onFileSelected=function(objEvent){
    var docTitle =  objEvent.value.substr(objEvent.value.lastIndexOf("\\") + 1);//retrieve the actual file name from URI
    var docTitleSplit = docTitle.split('.'); //check if file is a CSV by checking its extension
    if(docTitleSplit[1].toLowerCase()=="csv")
        getServer().getJSXByName(strFieldName).setValue(docTitle);
    else
         //showInfoDialog("Invalid file type","Please select a CSV file to import data");      
        JBSIS.eForms.processException("JBSIS001GI902");
     
};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

jsx3.lang.Package.definePackage
(
    "JBSIS.eForms",  //creating a package 
       function(eForms) {

/******************Initlization function*****************************************************/
     try{
        eForms.initApp=function(){
            JBSIS.eForms.Nav.changeBody(getServer().getJSXByName("btnHome"));
            //app.logic.createCookie();

            //loading external error lookup xml Asynchronously
             try{
                 var errDoc = getServer().Cache.getOrOpenAsync(getServer().resolveURI("xml/JBSIS.PORTAL.UI.ERROR_LOOKUP.xml"),"errorDoc");     
            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());}

             //loading external server look xml Asynchronously
              try{
                  var servDoc = getServer().Cache.getOrOpenAsync(getServer().resolveURI("xml/JBSIS.PORTAL.UI.SERVER_LOOKUP.xml"),"serverDoc");               
                }catch(e){
                    e = jsx3.NativeError.wrap(e);
                    appLogger.trace(e.getMessage());
                }



            //Fetch the launch fragment URL, to retrieve logged Portal username
            var query = new jsx3.net.URI(window.location.href);
            var userParam = query.getQueryParam("user");
            if(userParam!=null){
                JBSIS.eForms.PORTAL_USER = userParam;
            }
            else{
                    alert("Invalid User");
                    //getServer().unsubscribe(jsx3.gui.Event.BEFOREUNLOAD);
                    JBSIS.eForms.PORTAL_USER = "NO_PORTAL_USER";
                    //JBSIS.eForms.processException("JBSIS001GI804");
                    window.close();
            }
 
            try{
            getServer().loadInclude(getServer().resolveURI("js/checkReportStatus.js"),"checkReportStatus_js","script",false);   
            getServer().loadInclude(getServer().resolveURI("js/form07a.js"),"form07a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form07b.js"),"form07b_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form11a.js"),"form11a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form04b.js"),"form04b_js","script",false);  
            getServer().loadInclude(getServer().resolveURI("js/form05a.js"),"form05a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form05b.js"),"form05b_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form06a.js"),"form06a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form08a.js"),"form08a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form09a.js"),"form09a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form10a.js"),"form10a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form12a.js"),"form12a_js","script",false);    
            getServer().loadInclude(getServer().resolveURI("js/form13a.js"),"form13a_js","script",false);
	   getServer().loadInclude(getServer().resolveURI("js/reporthistorylog.js"),"reporthistorylog_js","script",false); 

            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());}
            
            eForms.createYearDD();
            //alert ("Site :"+JBSIS.eForms.getURL() );
             if(JBSIS.eForms.getURL()!="AOC" ){
                getServer().getJSXByName("btnPendingQueryStatus").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN,true).repaint();
             }
                  

            
    };
  }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

/**************Creating Dynamic reporting year dropdown list****************************/
try{
        eForms.createYearDD=function(){
        
        
        if(getServer().Cache.getDocument("recYears")==null){
        recYears =  new jsx3.xml.CDF.Document.newDocument();

        for(var year=2002;year<=new Date().getYear();year++){
               var recNode = new jsx3.xml.Document().loadXML("<record jsxid=\'"+year+"\' jsxtext=\'"+year+"\'/>"); 
                recYears.insertRecordNode(recNode);

}
}  
        JBSISEForms.Cache.setDocument("recYears",recYears);


};

}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/*******************************SERVER CONFIGURATIONS (VIA PROXY)**********************************************/


/**************Function to initialize Server configuration variable**********************/

try{
eForms.initServerConf=function(){
    var serverConf = getServer().Cache.getDocument("serverDoc"); 
    if(serverConf!=null){
     try{
        var env = serverConf.selectSingleNode("//Environment").getValue();
        
   } catch(e){
           appLogger.trace("Unable to read or parse Server configuration XML");
            //showInfoDialog("XML Load failed","Unable to read or parse Server configuration XML.<br>Please check the Server configuration XML ");
			JBSIS.eForms.processException("JBSIS001GI801");
    }

    //Fetching the right configuration node
    try{
        var serverConfNode = serverConf.selectSingleNode("//ServerConf[ENV='"+env+"']");
    }catch(e){ e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());appLogger.trace("Unable to find ENV node");};
    
    if(serverConfNode!=null){
    try{
     var isSecure = serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/SecureConnection").getValue();

	if(isSecure.toLowerCase()=="true")
		JBSIS.eForms.protocol = "https://";
	else
		JBSIS.eForms.protocol = "http://";

    }catch(e){JBSIS.eForms.protocol="http://";}
    try{
    JBSIS.eForms.appServerName = serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/AppServerName").getValue();
    }catch(e){JBSIS.eForms.appServerName="localhost";}
    try{
        JBSIS.eForms.appPort = serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/AppPort").getValue();
    }catch(e){JBSIS.eForms.appPort="";}
     try{
        JBSIS.eForms.portalExt = serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/PortalExt").getValue();
       }catch(e){JBSIS.eForms.portalExt="/";}
     try{
           if(serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/CustomServlet")!=null){
                try{
                    JBSIS.eForms.CSURL = serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/CustomServlet/CSURL").getValue();
                }catch(e){JBSIS.eForms.CSURL="/";}
                try{
                    JBSIS.eForms.BWServer = serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/CustomServlet/BWServer").getValue();
                }catch(e){JBSIS.eForms.BWServer="localhost";}
                try{
                    JBSIS.eForms.BWPort = serverConfNode.selectSingleNode("//ServerConf[ENV='"+env+"']/CustomServlet/BWPort").getValue();
                }catch(e){JBSIS.eForms.BWPort="";}
            }
            else
                {JBSIS.eForms.CSURL="/";JBSIS.eForms.BWServer="localhost";JBSIS.eForms.BWPort="";}
       }catch(e){JBSIS.eForms.CSURL="/";JBSIS.eForms.BWServer="localhost";JBSIS.eForms.BWPort="";}
          
    }
	 else{
            //showInfoDialog("Initialization failed","Unable to find configuration for the specified environment");
			JBSIS.eForms.processException("JBSIS001GI805");
	    JBSIS.eForms.protocol = "http://";
            JBSIS.eForms.appServerName ="localhost";
            JBSIS.eForms.appPort="";
            JBSIS.eForms.portalExt="/";
            JBSIS.eForms.CSURL ="/"; 
            JBSIS.eForms.BWServer ="localhost";
            JBSIS.eForms.BWPort ="";

    }       

	}

    else{    
            appLogger.trace("Unable to read or parse Server configuration XML");
            //showInfoDialog("XML Load failed","Unable to read or parse Server configuration XML.<br>Please check the Server configuration XML ");
			JBSIS.eForms.processException("JBSIS001GI801");
            JBSIS.eForms.appServerName ="localhost";
            JBSIS.eForms.appPort="";
            JBSIS.eForms.portalExt="/";
            JBSIS.eForms.CSURL ="/"; 
            JBSIS.eForms.BWServer ="localhost";
            JBSIS.eForms.BWPort ="";
    }    

  eForms.setURLS();  
  eForms.initUser();
};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());}

                   eForms.initUser = function(){
                            //init user..
                            //alert("Invoking init function" +init.service);
                            // invoke the initialization function
                             try{
                               init.service.callInitOperation();
                             }catch(e){
                                 //alert(e);
                                 alert("Portal user type could not be found. Defaulting the role to Read only");
                                 JBSIS.eForms.PORTAL_USER_READONLY="true";
                             }
                            //alert("Finished invoking init function");
                    };


/**************Function to set Endpoint URLs**************************************************************/

eForms.setURLS=function(){

    //strUploadURL = "http://localhost:8080/servlet/proxyServlet?URL="+encodeURI("http://localhost:10201");

    var tmpBWStr = "http://"+JBSIS.eForms.BWServer+":"+JBSIS.eForms.BWPort;
    strUploadURL = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+":"+JBSIS.eForms.appPort+JBSIS.eForms.CSURL+"?URL="+encodeURI(tmpBWStr);
    
    if(JBSIS.eForms.appPort==null || JBSIS.eForms.appPort=="")
        var isPort ="";
    else
                var isPort =":";        

    urlUserInit=JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageUserInit";
		//"http://localhost:12600/Processes/Integration_Interfaces/Initialization/InitService";
    urlPendingQueryService = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPagePendingQuery";
    //urlPendingQueryService = "http://localhost:12600/Processes/Integration_Interfaces/Query/PendingQueryService";
    
    urlCheckReportStatus =JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageCreate";
    urlSubmit11aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData11a";
    urlFetch11aData =  JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData11a";
    urlSubmit07aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData07a";
    urlFetch07aData =  JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData07a";
    urlSubmit07bData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData07b";
    urlFetch07bData =  JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData07b";
    urlSubmit04bData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData04b";
    urlFetch04bData  = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData04b";
    urlSubmit05aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData05a";
    urlFetch05aData  = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData05a";
    urlSubmit05bData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData05b";
    urlFetch05bData  = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData05b";
    urlSubmit06aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData06a";
    urlFetch06aData  = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData06a";
    urlSubmit08aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData08a";
    urlFetch08aData  = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData08a";
    urlSubmit09aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData09a";
    urlFetch09aData  = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData09a";
    urlSubmit10aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData10a";
    urlFetch10aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData10a";
    urlSubmit12aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData12a";
    urlFetch12aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData12a";
    urlSubmit13aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageSubmitData13a";
    urlFetch13aData = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageRetrieveData13a";
	urlretrievehistorylog = JBSIS.eForms.protocol+JBSIS.eForms.appServerName+isPort+JBSIS.eForms.appPort+JBSIS.eForms.portalExt+"proxyPageHistoryLog";

    statusNameSpace = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/Status/1.0/xsd'";
};


/****************************Function to get URL************************/
    try{
            eForms.getURL=function(){
                return top.location.href.substr(top.location.href.lastIndexOf("isb\/portal\/")+11,3).toUpperCase();
                       //top.location.href.substr(top.location.href.lastIndexOf("\/")+1).toUpperCase();
                 //return "AOC";
        };
    }catch(e){alert(e.getMessage());};
  
/**********************Function to validate if a field is number on a change in its value ********************/
        try{
        eForms.doNumValidation=function(objText){ //objText is the textbox whose value has been changed
              if(objText.getClass()=="jsx3.gui.TextBox"){ 
                        boolChangeState = true; //indicate the form has been edited
                    if(!objText.doValidate()){
                        objText.setValue('');
                        objText.focus();
                          objLabels = objText.getName().substring(3).split('_'); //txtName1_Name2 becomes Name1,Name2
                          if(objLabels[1]==null)
                              objLabelText = "<B>"+getServer().getJSXByName("lbl"+objLabels[0]).getText().trim()+"</B>"; //get label lblName1
                          else {
                                //get Label lblName1 and lblName2 
                                objLabelText = "ROW: <B>"+getServer().getJSXByName("lbl"+objLabels[0]).getText().trim()+"</B><br>COLUMN: <B>"+getServer().getJSXByName("lbl"+objLabels[1]).getText().trim()+"</B></br>";
                            }
                                //call the error dialog to display appropriate error message
                          //showErrorDialog("Invalid Number","Please enter a valid whole number at:<br><br>"+objLabelText,objText.getName());
                            JBSIS.eForms.processException("JBSIS001GI803","<br><br>"+objLabelText,objText.getName());
                      }   
                 }
        };
        }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
        
        try{
/**********Function to clear text boxes************************/
        eForms.clearFields=function(tabName){ 
            
            var tabChild = getServer().getJSXByName(tabName).getDescendantsOfType("jsx3.gui.TextBox"); //gets all textboxes in pane
        
            for(var i=0;i<tabChild.length;i++){
                    tabChild[i].setValue('',1); 
                    
            }
            //boolChangeState = false;
        };
        }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

        try{
/*** Function to calculate total of field value of single blocks*****/
        eForms.doTotal=function(parentBlock){                 
                var arrTextChild = getServer().getJSXByName(parentBlock).getDescendantsOfType("jsx3.gui.TextBox");
                var totalValue = 0;
                for(var i=0;i<arrTextChild.length;i++)
                {    
                        if(arrTextChild[i].getAttribute("readonly"))
                            var totalField = arrTextChild[i].getName();
                        else{
                               var fieldValue = new Number(arrTextChild[i].getValue());
                             if(!isNaN(fieldValue)){
                                 totalValue =  fieldValue+ new Number(totalValue);
                              }
                            }
                }
                if(isNaN(totalValue) || totalValue < 0)
                    getServer().getJSXByName(totalField).setValue(getServer().getJSXByName(totalField).getValue());
                else
                     getServer().getJSXByName(totalField).setValue(totalValue);              
              } ;   
        }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

        try{
/*********Function to calculate total based on position phase 2******/
            eForms.doTotalByPosition=function(columnBlock,parentBlock,topCol){
            var pos =  getServer().getJSXByName(columnBlock).getLeft();
            var top =  getServer().getJSXByName(columnBlock).getTop(); 
            if(topCol!=null)
                var topCell = getServer().getJSXByName(topCol).getTop();
            else
                var topCell = 0;


            var total = 0;
            var child = getServer().getJSXByName(parentBlock).getDescendantsOfType("jsx3.gui.TextBox");
            for(var i=0;i<child.length;i++)
            {
                   if(child[i].getLeft()==pos && child[i].getTop()<top && child[i].getTop()>=topCell)         
                   {
                         
            var fieldValue = new Number(child[i].getValue()); 
             
                             if(!isNaN(fieldValue)){ 
         
                                  total =  fieldValue + new Number(total); 
                            }
                    }
                    
            }     
			if (columnBlock == "txtDispositionTotals7b_AcquitDimiss7b" && parentBlock == "blkGridRight7b") {
			        var dimissed =  getServer().getJSXByName("txtDismissed7b").getValue();
					var transferred =  getServer().getJSXByName("txtTransferCourt7b").getValue();
                  
					if(!isNaN(new Number(dimissed))){ 
                                  total =  new Number(dimissed) + new Number(total); 
                            } else {}
					if(!isNaN(new Number(transferred))){ 
                                  total =  new Number(transferred) + new Number(total); 
                            }     else {}
			}
            if(isNaN(total) || total < 0){
                getServer().getJSXByName(columnBlock).setValue(getServer().getJSXByName(columnBlock).getValue());
                
              }
            else {
                                  getServer().getJSXByName(columnBlock).setValue(total);

                }
        }    ;
        }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

        try{ 
/******* Function to call apropriate web service**************/
/********based on report type and action selected*************/ 
            eForms.callServices=function(){ 
           
            if((JBSIS.eForms.getURL()=="AOC") && (getServer().getJSXByName("selReportType").getValue()==undefined || getServer().getJSXByName("selCourt").getValue()==undefined || getServer().getJSXByName("sel_month").getValue()==undefined || getServer().getJSXByName("sel_year").getValue()==undefined)) {
                        //showInfoDialog("Incomplete Form","Please complete the form");  
                        JBSIS.eForms.processException("JBSIS001GI901"); 
            }
            else if((JBSIS.eForms.getURL()!="AOC") && (getServer().getJSXByName("selReportType").getValue()==undefined || getServer().getJSXByName("sel_action").getValue()==undefined || getServer().getJSXByName("sel_month").getValue()==undefined || getServer().getJSXByName("sel_year").getValue()==undefined)) {
                      //  showInfoDialog("Incomplete Form","Please complete the form");   
                        JBSIS.eForms.processException("JBSIS001GI901"); 
            }else if ( JBSIS.eForms.PORTAL_USER_READONLY=="true" &&
                                      getServer().getJSXByName("sel_action").getValue() != "View"){
                                JBSIS.eForms.processException("JBSIS001GI904");

           }else{

                    
                   if(getServer().getJSXByName("sel_action").getValue()=="Create"){                 
                            JBSIS.eForms.showLoadDialog(true);
                            try{
                            repStat.service.callCheckReportStatus();
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                           }
                    else {
                             JBSIS.eForms.showLoadDialog(true);

                             if(JBSIS.eForms.Nav.getReportType()=="11a"){ 
                            try{  
                               form11a.service.callRetrieve11aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                             }
                             else if(JBSIS.eForms.Nav.getReportType()=="07a"){
                            try{
                                    form07a.service.callRetrieve07aData(false);  
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="07b") {
                            try{
                                   form07b.service.callRetrieve07bData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="04b"){
                            try{
                                   form04b.service.callRetrieve04bData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="05a") {
                             try{
                                   form05a.service.callRetrieve05aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="05b") {
                            try{
                                   form05b.service.callRetrieve05bData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="06a"){
                            try{
                                   form06a.service.callRetrieve06aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="08a"){
                            try{
                                   form08a.service.callRetrieve08aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="09a"){
                             try{
                                   form09a.service.callRetrieve09aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}        
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="10a"){
                             try{
                                   form10a.service.callRetrieve10aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="12a") {
                            try{
                                   form12a.service.callRetrieve12aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }
                             else if(JBSIS.eForms.Nav.getReportType()=="13a"){
                            try{
                                   form13a.service.callRetrieve13aData(false);
                            }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());JBSIS.eForms.showLoadDialog(false);JBSIS.eForms.processException("JBSIS001GI807",e.getMessage());}
                            }


                             else
                                 JBSIS.eForms.Nav.showTab(false);
                            }
                        }
                };
          }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
try{
/*****Function to GET text box values*********************************/
    eForms.getVal=function(fetchKey) { 
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
    };
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

try{
/*********Function to SET text box values after a successful retrieve from BW **************/

    eForms.setVal=function(xmlNode,objField){
    
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
            
	};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

//Process errors(business and system)
try{
eForms.processException=function(execCode,optArg1,optArg2){ //optArg1 and optArg2 are optional arguments passed only for handling ERROR and MESSAGES
                                                            //For ERROR : optArg1->Dynamic message text  optArg2->Erroring field name
                                                            //For MESSAGE : optArg1->Yes function  optArg2->No function

   if(execCode!=null){                                                                 
        var errorConf = getServer().Cache.getDocument("errorDoc"); 
        
      execCode = String(execCode).trim();
        
     if(errorConf.selectSingleNode("//DisplayInfo[code='"+execCode+"']/code")!=null)
      {
        try{
            var severity = errorConf.selectSingleNode("//DisplayInfo[code='"+execCode+"']/severity").getValue();
        }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};        

        try{
            var msgTitle = errorConf.selectSingleNode("//DisplayInfo[code='"+execCode+"']/windowTitle").getValue();
        }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

        try{
            var msgText =  errorConf.selectSingleNode("//DisplayInfo[code='"+execCode+"']/text").getValue();
        }catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

        if(optArg1==null)
            optArg1='';
        if(optArg2==null)
            optArg2='';

        if(severity == "INFO"){
			var execCodeMsg ="INFO CODE: "+execCode;
            eForms.showInfoDialog(execCodeMsg,msgTitle,msgText);
        }
        else if(severity == "ERROR"){
						var execCodeMsg ="ERROR CODE: "+execCode;
             eForms.showErrorDialog(execCodeMsg,msgTitle,msgText+optArg1,optArg2);
        }
        else if(severity == "MSG"){
						var execCodeMsg ="MSG CODE: "+execCode;
             eForms.showMessageDialog(execCodeMsg,msgTitle,msgText,"YES/NO",optArg1,optArg2);
        }
        else if(severity == "WARN"){
						var execCodeMsg ="WARN CODE: "+execCode;
             eForms.showMessageDialog(execCodeMsg,msgTitle,msgText);
        }
    }
    else {
            appLogger.trace("Exception handler failed.Invalid error code specified: "+execCode);
            alert("Exception handler failed.Invalid error code specified: "+execCode);            
        }
    }
    else{
            appLogger.trace("Exception handler failed.No error code specified");
            alert("Exception handler failed.No error code specified");
    }
};

}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());}

/*****************Function to display error messages*******************/
try{
eForms.showErrorDialog = function(errCode,errTitle,errMsg,FieldObjName) {   

        var objErr = getServer().getBodyBlock().loadAndCache("components/dialogs/errorDialog.xml"); //show error dialog
        getServer().getJSXByName("lblCode").setText(errCode, true).repaint; //set specified error code
        getServer().getJSXByName("lbl_ErrorTitle").setText(errTitle, true).repaint; //set specified error title
        getServer().getJSXByName("lbl_errorMsg").setText(errMsg, true).repaint; //set specified error message
        //FieldObjName used to set focus back to the text box with error and clearing the data in it
        getServer().getJSXByName("lbl_hiddenFieldObjName").setText(FieldObjName, true).repaint;        
        objErr.repaint();
};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/*********************Function to display Info messages**********************/
try{
eForms.showInfoDialog = function(infoCode,infoTitle,infoMsg) //function to show informational messages
{   

        var objInfo = getServer().getBodyBlock().loadAndCache("components/dialogs/infoDialog.xml",true);//load info dialog
        getServer().getJSXByName("lblCode").setText(infoCode); //set information Code
        getServer().getJSXByName("lbl_infoTitle").setText(infoTitle); //set information title
        getServer().getJSXByName("lbl_infoMsg").setText(infoMsg); //set information message
        objInfo.repaint();
};
}
catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};
/*************Function to display Message boxes*********************************/
try{
eForms.showMessageDialog = function(msgCode,msgTitle,msgMsg,buttonNames,yesFunction,noFunction) //function to display message dialog
{       
        var objMsg = getServer().getBodyBlock().loadAndCache("components/dialogs/messageDialog.xml",true);//load and show msg dialog
        getServer().getJSXByName("lbl_msgTitle").setText(msgTitle);//set message title
        getServer().getJSXByName("lbl_msgText").setText(msgMsg); //set message
        //set the function to perform when user clicks YES and close the dialog
        getServer().getJSXByName("btn_YES").setEvent("this.getAncestorOfType(jsx3.gui.Dialog).doClose() ;" + yesFunction,jsx3.gui.Interactive.EXECUTE);
        //set the function to perform when user clicks NO and close the dialog
        getServer().getJSXByName("btn_NO").setEvent("this.getAncestorOfType(jsx3.gui.Dialog).doClose() ;" + noFunction,jsx3.gui.Interactive.EXECUTE);
     
        if(buttonNames == 'YES/NO')//toggle between YES/NO and OK/CANCEL buttons
        {
            getServer().getJSXByName("btn_YES").setText("YES");
            getServer().getJSXByName("btn_NO").setText("NO");
        }
		else if(buttonNames == 'SAVE/SUBMIT')//toggle between YES/NO and OK/CANCEL buttons
        {
            getServer().getJSXByName("btn_YES").setText("SAVE");
            getServer().getJSXByName("btn_NO").setText("SUBMIT");
        }
        else
        {
            getServer().getJSXByName("btn_YES").setText("OK");
            getServer().getJSXByName("btn_NO").setText("CANCEL");
        }
        
        objMsg.repaint();
};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};


//function to show and close the LOADING animation
//boolean show {true,false} used to show and close
try{
eForms.showLoadDialog = function(show) //function to display loading dialog
{       
        if(show){
		getServer().getBodyBlock().loadAndCache("components/dialogs/load.xml",true);//load and show Loading dialog
                   window.focus();
        }
	else
		getServer().getJSXByName("dlgLoading").doClose();
        
};
}catch(e){e = jsx3.lang.NativeError.wrap(e); appLogger.trace(e.getMessage());};

    }
);