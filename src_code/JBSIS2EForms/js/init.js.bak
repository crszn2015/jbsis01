jsx3.lang.Package.definePackage(
        "init.service", //the full name of the package to create
        function(service) {          //name the argument of this function

            //call this method to begin the service call (eg.service.callInitOperation();)
            service.callInitOperation = function() {
                var objService = JBSISEForms.loadResource("init_xml");
                objService.setOperation("InitOperation");

                //subscribe
                objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.onInitOperationSuccess);
                objService.subscribe(jsx3.net.Service.ON_ERROR, service.onInitOperationError);
                objService.subscribe(jsx3.net.Service.ON_INVALID, service.onInitOperationInvalid);

                //urlUserInit = "http://localhost:12600/Processes/Integration_Interfaces/Initialization/InitService";
                objService.setEndpointURL(urlUserInit);

                //PERFORMANCE ENHANCEMENT: uncomment the following line of code to use XSLT to convert the server response to CDF (refer to the API docs for jsx3.net.Service.compile for implementation details)
                //objService.compile();

                //call the service
                objService.doCall();
            };

            service.onInitOperationSuccess = function(objEvent) {
                var responseXML = objEvent.target.getInboundDocument();
                //objEvent.target.getServer().alert("Success","The service call was successful.");
                var statusNameSpace1 = "xmlns:ns0='http://isb.srv.courts-tc.ca.gov/portal/isb/Schema/global/JBSIS/Status/1.0/xsd'";
                var readOnly = responseXML.selectSingleNode("//ns0:ReadOnly", statusNameSpace1);

                if (readOnly == null) {
                    //alert("Setting read only value to false");
                    JBSIS.eForms.PORTAL_USER_READONLY = "false";
                }
                if (readOnly != null) {
                    var val = readOnly.getValue();
                    //alert("val :" + val);
                    if (val == "true") {
                        //alert("Setting read only value to true");
                        JBSIS.eForms.PORTAL_USER_READONLY = "true";
                    } else {
                        //alert("Setting read only value to false");
                        JBSIS.eForms.PORTAL_USER_READONLY = "false";
                    }
                }
                // once you know user is read only then disable the screens accordingly
                // add logic to remove the fields

            }
                    ;

            service.onInitOperationError = function(objEvent) {
                var myStatus = objEvent.target.getRequest().getStatus();
                objEvent.target.getServer().alert("Error", "The service call failed. The HTTP Status code is: " + myStatus);
            };

            service.onInitOperationInvalid = function(objEvent) {
                objEvent.target.getServer().alert("Invalid", "The following message node just failed validation:\n\n" + objEvent.message);
            };

        }
        )
        ;
