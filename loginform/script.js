function validation() {
   
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    var ConfirmPassword = document.getElementById("ConfirmPassword").value;

   const namepattern=/^[a-zA-Z]+$/;
   const emailpattern=/^[a-zA-Z0-9]+@[a-zA-Z.-]+\.+[a-zA-Z]{2,}$/;
   
   if(!namepattern.test(Name))
   {  
	  alert("INVALID NAME");
	 
	   return false;
   }
   if(!emailpattern.test(Email)){
	alert("INVALID EMAIL");
	   return false;  
   }
   if(Password < 8){
	   alert("Password ATLEAST 8 CHARACTER");
   }
   if(!Password==ConfirmPassword){
	   alert("Password MISS MATCH");
   }
}