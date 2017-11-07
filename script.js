// create an anonymous function with the window.onload event.  This ensures that the window is loaded before the sendForm button is enacted.
window.onload = function() {
	// Check which browser we are running
	// browserInfo();  
	document.getElementById("sendForm").onclick = grabFormContents;
	
}


function grabFormContents() {
	var myCustName = document.getElementById("customerName1");
	var myCustMessage = document.getElementById("message1");
	var myCustEmail = document.getElementById("emailAdd1");
	var myWindow;

	

	// check that name is not blank
	if (empty(myCustName.value))
	{
		alert('Please enter your name');
		document.contactForm.CustomerName.focus();
	}
	else
	{
		if (empty(myCustEmail.value))
		{
			alert('Please enter your email address');
			document.contactForm.EmailAdd.focus();
		}
		else
		{
			// check email address is of a valid format
			if (validateEmail(myCustEmail.value))
			{
				myMailRecepient = "sudesh.patel@outlook.com";
				mySubject = "Tuition query from "+myCustEmail.value;
				myMailBody = "From: "+myCustName.value+"%0D%0A"+"Email Address: "+myCustEmail.value+"%0D%0A"+"Message : "+myCustMessage.value;
				//Open email window
					// Does not work on chrome -- need to check why
					//window.location.href="mailto:"+myMailRecepient+"?subject="+mySubject+"&body="+myMailBody;

					// works on edge but brings up an empty window in ie.  Need to find a way to kill the empty window.
					myWindow=window.open("mailto:"+myMailRecepient+"?subject=Tuition query&body="+myMailBody);
				}
			else
			{
				document.contactForm.EmailAdd.focus();
			}
		}
	}
}	

//---------------------------------

function launchEmail() {
//	window.location.href="mailto:"+myMailRecepient+"?subject="+mySubject+"&body="+myMailBody;
}

function empty(myValue) {
//	alert('myValue='+myValue)
	if (myValue == '')	
	{
		return true;
	}
	else
	{
		return false;
	}	
}

function validateEmail(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(inputText.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("Please enter a valid format email");
		return false;
	}
}


function browserInfo() {

	var txt = "";
	txt += "Browser CodeName: " + navigator.appCodeName + "-----";
	txt += "Browser Name: " + navigator.appName + "-----";
	txt += "Browser Version: " + navigator.appVersion + "-----";
	txt += "Cookies Enabled: " + navigator.cookieEnabled + "-----";
	txt += "Browser Language: " + navigator.language + "-----";
	txt += "Browser Online: " + navigator.onLine + "-----";
	txt += "Platform: " + navigator.platform + "-----";
	txt += "User-agent header: " + navigator.userAgent + "-----";
	alert(txt);


	if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
		{
			alert('Opera');
		}
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
		{
			alert('Chrome');
		}
    else if(navigator.userAgent.indexOf("Safari") != -1)
		{
			alert('Safari');
		}
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
		{
			alert('Firefox');
		}
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
		{
		alert('IE'); 
		}  
    else 
		{
		alert('unknown');
		}
}

