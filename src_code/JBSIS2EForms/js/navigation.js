jsx3.lang.Package.definePackage(
        "JBSIS.eForms.Nav", //the full name of the package to create
        function(Nav) {          //name the argument of this function

            try {
                /**************Function to initial main page load****************************/
                Nav.changeBody = function(buttonObj) {
                    //alert(buttonObj);
                    var butName = buttonObj.getName();
                    //alert(butName);

                    //alert("getServer");

                    var mPane = getServer().getJSXByName("paneMain");
                    //alert("Pane"+mPane );
                    mPane.removeChildren();


                    //alert("1");
                    if (butName == "btnHome") {
                        mPane.loadAndCache("components/welcome.xml");

                    }
                    //alert("2");

                    if (butName == "btnReview") {
                        mPane.loadAndCache("components/maintab.xml");
                        mPane.loadAndCache("components/actionPane.xml");
                        JBSIS.eForms.Nav.initMainPage();
                    }
                    //alert("3");

                    if (butName == "btnPendingQueryStatus") {
                        mPane.loadAndCache("components/reporthistory_new.xml");
                        JBSIS.eForms.Nav.initMainPage();
                       
                    }
                    //alert("4");

                    if (butName == "btnReportHistory") {
                        /******************06/17/2008 Aruna******************************/
                        mPane.loadAndCache("components/reporthistory.xml");
                        appLogger.trace("1");
                        //getServer().loadInclude(getServer().resolveURI("js/reporthistorylog.js"),"reporthistorylog_js","script",false);
                        //getServer().loadResource("reporthistorylog_js"); appLogger.trace("2");
                        try {
                            reporthistorylog.service.onInit();
                        } catch(e) {
                            e = jsx3.lang.NativeError.wrap(e);
                            appLogger.trace(e.printStackTrace());
                        }
                    }
                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;

            /***********Hide Pending Query Menu *******************************************/
            try {
                Nav.hidePendingQuery = function() {
                    if (JBSIS.eForms.getURL() == "AOC") {
                        getServer().getJSXByName("btnPendingQueryStatus").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN, true).repaint();
                    }

                };

            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;


            /***********Customize main query page*******************************************/
            try {
                Nav.initMainPage = function() {
                    JBSIS.eForms.createYearDD();
                    if (JBSIS.eForms.getURL() == "AOC") {
                        getServer().getJSXByName("blk_court").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true).repaint();
                        getServer().getJSXByName("sel_action").setValue("View");
                        getServer().getJSXByName("blk_action").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN, true).repaint();
                    }

                };

            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;

            /***Function to return to main page*********/
            try {
                Nav.returnToMain = function() {
                    //alert(boolChangeState);
                    if (!boolChangeState) {
                        var mPane = getServer().getJSXByName("paneMain");
                        mPane.removeChildren();
                        mPane.loadAndCache("components/maintab.xml");
                    }
                    else {
                        //showMessageDialog("Unsaved Changes","You have unsaved changes","YES/NO","","");
                        JBSIS.eForms.processException("JBSIS001GI951");
                    }

                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;

            /********************Function to change the checkbox label**********************************************/

            try {
                Nav.setCheckBoxLabel = function(checkObj, chkState) {
                    //var mPane = getServer().getJSXByName("paneMain");
                    //mPane.removeChildren();
                    //mPane.load("components/appCanvas.xml");
                    //alert(" in fun "+chkState);
                    if (chkState == 1) {
                        checkObj.setText("<i>Yes, I am submitting this report</i>");
                        checkObj.repaint();
                    }
                    else if (chkState == 0) {
                        checkObj.setText(" ");
                        checkObj.repaint();
                    }
                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;
            /*****************************Function to make textboxes read-only**************************************/
            try {
                Nav.makeReadOnly = function(tabName, bool) {
                    var child = tabName.getDescendantsOfType("jsx3.gui.TextBox");
                    for (var i = 0; i < child.length; i++) {
                        if (child[i].getClass() == "jsx3.gui.TextBox") {
                            if (child[i].getAttribute("calculated") != "true") {
                                if (bool == "true") {
                                    child[i].setAttribute("readonly", "true");
                                    child[i].repaint();
                                }
                                else {
                                    child[i].removeAttribute("readonly");
                                    child[i].repaint();

                                }
                            }
                        }
                    }
                };
            } catch(e) {
                alert(e.getMessage());
            }
            /****************Function to calculate Control sum of the form*********************************/
            try {
                /*   Nav.controlSum=function(docName) {alert(docName);

                 var xmlDoc = getServer().Cache.getDocument(docName).getRootNode();alert(xmlDoc);
                 if(xmlDoc!=null){
                 var itrChild = xmlDoc.getChildIterator();
                 var Total = new Number();
                 while(itrChild.hasNext())
                 {

                 var attrChildren = itrChild.next().getAttributes();
                 var itrGrandChild=attrChildren.iterator(); itrGrandChild.next();itrGrandChild.next();
                 while(itrGrandChild.hasNext()){
                 var nextChild =    itrGrandChild.next();
                 try{appLogger.trace(nextChild+" = "+nextChild.getValue());
                 if(nextChild!=null)
                 Total = new Number(new Number(nextChild.getValue()) + Total);
                 }catch(e){alert(e.getMessage())};

                 }
                 }
                 alert(Total);
                 return Total;
                 }
                 else
                 return 0;
                 }   */

                Nav.controlSum = function(tabName) {

                    var objTab = getServer().getJSXByName(tabName);

                    var child = objTab.getDescendantsOfType("jsx3.gui.TextBox");
                    var Total = new Number();
                    for (var i = 0; i < child.length; i++) {
                        if (child[i].getClass() == "jsx3.gui.TextBox") {
                            Total = new Number(child[i].getValue()) + Total;
                        }
                    }
                    return Total;
                };
            } catch(e) {
                alert(e.getMessage());
            }
            ;
            /**************************Function to determine Amend Code of the form**************************/
            try {
                Nav.getAmendCode = function() {
                    if (getServer().getJSXByName("sel_action").getValue() == "Amend")
                        return 1;
                    else
                        return 0;
                };
            } catch(e) {
                alert(e.getMessage());
            }
            /**********************Function to determine selected report type******************************/
            try {
                Nav.getReportType = function() {


                    var repType = getServer().getJSXByName("selReportType").getValue();
                    return repType;

                };
            } catch(e) {
                alert(e.getMessage());
            }
            /******************************Function to determine Court Code***************************/
            try {
                Nav.getCourtCode = function() {

                    if (JBSIS.eForms.getURL() == "AOC")
                        return getServer().getJSXByName("selCourt").getValue();
                    else
                        return JBSIS.eForms.getURL();
                };
            } catch(e) {
                alert(e.getMessage());
            }
            /*****************************Function to get Current Date and/or Time*********************/
            try {
                Nav.getDateTime = function(dateTime) {
                    var currDateTime = new Date();
                    if (dateTime == "Date") {
                        var currYear = currDateTime.getYear();
                        var currMonth = currDateTime.getMonth() + 1;
                        if (currMonth < 10) {
                            currMonth = "0" + currMonth;
                        }
                        var currDate = currDateTime.getDate();
                        if (currDate < 10) {
                            currDate = "0" + currDate;
                        }

                        return currMonth + "" + currDate + "" + currYear;
                    }
                    else if (dateTime == "Time") {
                        var currHour = currDateTime.getHours();
                        if (currHour < 10) {
                            currHour = "0" + currHour;
                        }
                        var currMinute = currDateTime.getMinutes();
                        if (currMinute < 10) {
                            currMinute = "0" + currMinute;
                        }
                        var currSecond = currDateTime.getSeconds();
                        if (currSecond < 10) {
                            currSecond = "0" + currSecond;
                        }

                        return currHour + "" + currMinute + "" + currSecond;
                    }
                };
            } catch(e) {
                alert(e.getMessage());
            }
            /*********Function to display appropriate Form Tab with appropriate properties**********************/
            try {
                Nav.showTab = function(boolFormState) {

                    boolChangeState = boolFormState;
                    var focusMainScreen; // variable to check if main query screen is active

                    if (getServer().getJSXByName("blkMain").getVisibility() == jsx3.gui.Block.VISIBILITYVISIBLE) //show or hide main screen
                        focusMainScreen = true;
                    else
                        focusMainScreen = false;


                    if (JBSIS.eForms.Nav.getReportType() == "07a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm07a") == null) {

                            getServer().getJSXByName("paneMain").loadAndCache("components/form07a.xml");

                        }
                        else
                            getServer().getJSXByName("blkForm07a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm07a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm07a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form07a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form07a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                        }
                    }

                    else if (JBSIS.eForms.Nav.getReportType() == "07b" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm07b") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form07b.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm07b").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm07b");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm07b\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form07b.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form07b.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);


                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "11a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm11a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form11a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm11a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm11a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm11a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form11a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form11a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);

                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "04b" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm04b") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form04b.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm04b").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm04b");
                        getServer().getJSXByName("blkButtons").showMask();

                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm04b\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form04b.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form04b.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);


                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "05a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm05a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form05a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm05a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm05a");
                        getServer().getJSXByName("blkButtons").showMask();

                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm05a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form05a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form05a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);

                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "05b" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm05b") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form05b.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm05b").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm05b");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm05b\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form05b.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form05b.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);

                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "06a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm06a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form06a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm06a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm06a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm06a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form06a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form06a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            /******CODE TO SET READONLY FIELDS**************/

                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "08a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm08a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form08a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm08a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm08a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm08a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form08a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form08a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);


                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "09a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm09a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form09a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm09a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm09a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm09a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form09a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form09a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);


                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "10a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm10a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form10a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm10a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm10a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm10a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form10a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form10a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);

                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "12a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm12a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form12a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm12a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm12a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm12a\"\);", jsx3.gui.Interactive.EXECUTE);
/********** UPDATED on 10-07-2014 By HDS for JBSIS CaseType Enhancement Project ***************/
                            getServer().getJSXByName("btnSave").setEvent("form12a.service.genOutputData('Save');", jsx3.gui.Interactive.EXECUTE); // updated Callback
                            getServer().getJSXByName("btnSubmit").setEvent("form12a.service.genOutputDataSUBMITwDialog(this);", jsx3.gui.Interactive.EXECUTE);	// updated Callback
                            //if CREATE action on new 12a report then hide legacy column Probate000005 on 12a                            
                            if (getServer().getJSXByName("sel_action").getValue() == "Create") {
                                    //Zero out first column
                                 getServer().getJSXByName("txtNumCasesFiled12a").setValue(0);
                                 getServer().getJSXByName("txtDispositionTotals12a").setValue(0);
                                 getServer().getJSXByName("txtDismLackPros12a").setValue(0);
                                 getServer().getJSXByName("txtOtherDismTrans12a").setValue(0);
                                 getServer().getJSXByName("txtSummJudgmnt12a").setValue(0);
                                 getServer().getJSXByName("txtAllOtherJudgmnt12a").setValue(0);
                                 getServer().getJSXByName("txtByCourtBefore12a").setValue(0);
                                 getServer().getJSXByName("txtByCourtAfter12a").setValue(0);
                                 getServer().getJSXByName("txtByJuryBefore12a").setValue(0);
                                 getServer().getJSXByName("txtByJuryAfter12a").setValue(0);
                                 getServer().getJSXByName("txtPreSettlmntConf12a").setValue(0);
                                 getServer().getJSXByName("txtRetrials12a").setValue(0);
                                 getServer().getJSXByName("txtSuperOrders12a").setValue(0);
                                 
                                 getServer().getJSXByName("blkGridRightOne12a").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN, true);
                            }
/*** End of change block ***/

                        }
                    }
                    else if (JBSIS.eForms.Nav.getReportType() == "13a" && focusMainScreen) {
                        getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        if (getServer().getJSXByName("blkForm13a") == null) {
                            getServer().getJSXByName("paneMain").loadAndCache("components/form13a.xml");
                        }
                        else
                            getServer().getJSXByName("blkForm13a").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE, true);

                        getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                        getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN);
                        getServer().getJSXByName("blkActionButtons").repaint();

                        var mTab = getServer().getJSXByName("blkForm13a");
                        getServer().getJSXByName("blkButtons").showMask();
                        if (getServer().getJSXByName("sel_action").getValue() == "View") {
                            JBSIS.eForms.Nav.makeReadOnly(mTab, "true");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEDISABLED, true);
                            boolChangeState = false;
                        }
                        else {

                            JBSIS.eForms.Nav.makeReadOnly(mTab, "false");
                            getServer().getJSXByName("btnSave").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnSubmit").setEnabled(jsx3.gui.Form.STATEENABLED, true);
                            getServer().getJSXByName("btnClear").setEnabled(jsx3.gui.Form.STATEENABLED, true);

                            getServer().getJSXByName("btnClear").setEvent("JBSIS.eForms.Nav.resetForm\(\"blkForm13a\"\);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent("form13a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent("form13a.service.genOutputData(this);", jsx3.gui.Interactive.EXECUTE);


                        }
                    }
                    else {
                        if (!boolChangeState) {  //clearing fields when user selects "return to main" from a form
                            getServer().getJSXByName("blkForm" + JBSIS.eForms.Nav.getReportType()).setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN, true).repaint();
                            getServer().getJSXByName("blkActionButtons").setVisibility(jsx3.gui.Block.VISIBILITYHIDDEN, true).repaint();
                            // getServer().getJSXByName("paneMain").removeChild(1);
                            getServer().getJSXByName("blkMain").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);
                            getServer().getJSXByName("blkButtons").hideMask();
                            // getServer().getJSXByName("paneMain").repaint();

                            JBSIS.eForms.clearFields("blkForm" + JBSIS.eForms.Nav.getReportType());

                            getServer().getJSXByName("btnClear").setEvent('', jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSave").setEvent('', jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnSubmit").setEvent('', jsx3.gui.Interactive.EXECUTE);
                            getServer().getJSXByName("btnImport").setVisibility(jsx3.gui.Block.VISIBILITYVISIBLE);


                        }
                        else {
                            //confirm users of the decision to go back to main page
                            //showMessageDialog("Unsaved Changes","Unsaved changes to the form will be lost.<br>Continue... ","YES/NO","JBSIS.eForms.Nav.showTab(false)","");
                            JBSIS.eForms.processException("JBSIS001GI951", "JBSIS.eForms.Nav.showTab(false)", "");
                        }
                    }
                    if (!focusMainScreen)
                        JBSIS.eForms.Nav.showStatus(false);
                    else
                        JBSIS.eForms.Nav.showStatus(true);


                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;
            /***************Function to reset Form*************************************************/
            try {
                //function to clear form data
                Nav.resetForm = function(tabName) { //function to call clear fields and confirm users decision to clear all
                    tabNameParam = "\"" + tabName + "\"";
                    if (boolChangeState) {
                        //showMessageDialog("Unsaved Changes","Unsaved changes to the form will be lost.<br>Continue... ","YES/NO","JBSIS.eForms.clearFields("+tabNameParam+")","");
                        JBSIS.eForms.processException("JBSIS001GI951", "JBSIS.eForms.clearFields(" + tabNameParam + ")", "");

                    }
                    else {
                        JBSIS.eForms.clearFields(tabName);
                        boolChangeState = true;
                    }

                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;
            /****************Function to show focus element***************************************/
            try {
                Nav.showFocus = function(boolFocus, objFocus) {
                    if (boolFocus) {
                        objFocus.setBackgroundColor("#F7E6A2", true);
                    }
                    else {
                        objFocus.setBackgroundColor("#FFFFFF", true);
                    }

                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;
            /****************Function to show tool tip***************************************/
            try {
                Nav.showTip = function(objFocus) {
                    var actionSelected = objFocus.getValue();
                    var objTipField = getServer().getJSXByName("txtTip");
                    if (actionSelected == "Create") {
                        objTipField.setText("Use CREATE to generate new reports for the selected reporting period", true);
                    }
                    else if (actionSelected == "View") {
                        objTipField.setText("Use VIEW to view previously saved or submitted report", true);
                    }
                    else if (actionSelected == "Update") {
                        objTipField.setText("Use UPDATE to modify previously saved report", true);
                    }
                    else if (actionSelected == "Amend") {
                        objTipField.setText("Use AMEND to modify previously submitted report", true);
                    }
                    else if (actionSelected == "Resubmit") {
                        objTipField.setText("Use RESUBMIT to modify previously rejected report", true);
                    }
                    else {
                        objTipField.setText("", true);
                    }
                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;
            /****************Function to show status message***************************************/
            try {
                Nav.showStatus = function(boolStatus) {
                    objStatusMsg = getServer().getJSXByName("txtStatusMsg");
                    if (boolStatus) {
                        var actionSelected = getServer().getJSXByName("sel_action").getValue();
                        var formSelected = JBSIS.eForms.Nav.getReportType();
                        var monthSelected = getServer().getJSXByName("sel_month").getText().substr(0, 3);
                        var yearSelected = getServer().getJSXByName("sel_year").getValue();

                        objStatusMsg.setText("Report: " + formSelected + "<br>Action: " + actionSelected + "<br>Period: " + monthSelected + "-" + yearSelected, true);
                    }
                    else {
                        objStatusMsg.setText("", true);
                    }
                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;
            /*****************Function to reset main form************************/
            try {
                Nav.resetMainForm = function() {
                    getServer().getJSXByName("selCourt").setValue(undefined);
                    getServer().getJSXByName("selReportType").setValue(undefined);
                    getServer().getJSXByName("sel_month").setValue(undefined);
                    getServer().getJSXByName("sel_year").setValue(undefined);

                    if (JBSIS.eForms.getURL() != "AOC")
                        getServer().getJSXByName("sel_action").setValue(undefined);
                    else
                        getServer().getJSXByName("sel_action").setValue("View");

                    getServer().getJSXByName("txtTip").setText('', true);

                };
            } catch(e) {
                e = jsx3.lang.NativeError.wrap(e);
                appLogger.trace(e.getMessage());
            }
            ;
        }

        );