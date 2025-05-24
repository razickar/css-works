
function validate(){
	var email=document.getElementById("Email2").value;
var Password2=document.getElementById("Password2").value;


	const emailpattern=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/;
	const passwordpattern=/^[0-9]{8,}$/;

	if(emailpattern.test(email)){
			if(passwordpattern.test(Password2)){checking();}
			else{
				alert("enter atleast 8 charcter....");
			}
	}
	else{
		alert("INVALID MAIL...");
	}	
}

function checking(){
	var database=[{name:"zoho",pass:123456789},{name:"hcl",pass:123456789},{name:"wibro",pass:123456789},{name:"tcs",pass:123456789}];
	var email=document.getElementById("Email2").value;
    var Password2=document.getElementById("Password2").value;

	var result=[email].map(one=>one.slice(0,email.indexOf("@"))).
		filter(check=> database.
		some(user=> user.name == check && user.pass==Password2));
	
alert(result);
	if(result.length>0){
		window.location.href="https://mail.google.com/mail/u/0/#inbox";
	}
	else{
		alert("Comrade suspect not detected");
	}
	

}
