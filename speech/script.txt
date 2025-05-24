if('SpeechRecognition' in window || 'webkitSpeechRecognition' in window){
	
	const speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
	//alert(speechRecognition);
	const receiver=new speechRecognition();
	
	receiver.lang = 'en-US';
	receiver.interimResults=true;
	//receiver.continues=true;
	
	var btn=document.getElementById("btn");
	var output=document.getElementById("output");
	var i=document.querySelector("i");
	btn.addEventListener('click',()=>{
		receiver.start();
		if(!i.classList.contains("fa-solid fa-microphone-lines fa-shake")){
			i.setAttribute("class","fa-solid fa-microphone-lines fa-shake");
			document.querySelector("i").style.color="red";
			document.querySelector("i").style.fontSize="5em";
		}
		else{
			i.classList.remove("fa-solid fa-microphone-lines fa-shake");
		}
	});
	
	
	receiver.onresult=(e)=>{
		const content=e.results[0][0].transcript;
		output.textContent=`${content}`;
		
	};
	
	receiver.onerror=(h)=>{
		console.log("error occur : ",h.error);
		output.textContent="error in "+h.error;
	};
	
	receiver.onstart = () => {
    output.textContent = 'Listening...';
	};
	
	
}
else{
	alert("hiii");
}