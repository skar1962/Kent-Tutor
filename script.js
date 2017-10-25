// create an anonymous function with the window.onload event.  This ensures that the window is loaded before the sendForm button is enacted.
window.onload = function(){
	document.getElementById("sendForm").onclick = grabFormContents;
}


function grabFormContents() {
	var myCustName = document.getElementById("customerName");
	var myCustMessage = document.getElementById("message1");
	var myCustEmail = document.getElementById("emailAdd");
	var myWindow;
    
    /*
	alert(myCustName.value)
	alert(myCustMessage.value)
	alert(myCustEmail.value)
    */

    mMailRecepient = "skar1962@googlemail.com"
    mSubject = "Tuition query from "+myCustEmail.value

	myMailBody = "From: "+myCustName.value+"%0D%0A"+"Email Address: "+myCustEmail.value+"%0D%0A"+"Message : "+myCustMessage.value;
	
	openWin();

	closeWin();
	
}

	
function openWin() {
	myWindow=window.open('mailto:'+mMailRecepient+'?subject='+mSubject+'&body='+myMailBody, "_self", "", );
	myWindow.document.write("<p>I replaced the current window.</p>"); 
}

function closeWin() {
	myWindow.close();
}
// create an anonymous function with the window.onload event.  This ensures that the window is loaded before the sendForm button is enacted.
window.onload = function(){
	document.getElementById("sendForm").onclick = grabFormContents;
}


function grabFormContents() {
	var myCustName = document.getElementById("customerName");
	var myCustMessage = document.getElementById("message1");
	var myCustEmail = document.getElementById("emailAdd");
	var myWindow;
    
    /*
	alert(myCustName.value)
	alert(myCustMessage.value)
	alert(myCustEmail.value)
    */

    mMailRecepient = "skar1962@googlemail.com"
    mSubject = "Tuition query from "+myCustEmail.value

	myMailBody = "From: "+myCustName.value+"%0D%0A"+"Email Address: "+myCustEmail.value+"%0D%0A"+"Message : "+myCustMessage.value;
	
	openWin();

	closeWin();
	
}

	
function openWin() {
	myWindow=window.open('mailto:'+mMailRecepient+'?subject='+mSubject+'&body='+myMailBody, "_self", "", );
	myWindow.document.write("<p>I replaced the current window.</p>"); 
}

function closeWin() {
	myWindow.close();
}
