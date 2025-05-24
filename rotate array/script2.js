var count1=0;
	var count2=0;
function user(event){
	
	var name1=event.target.innerText;
	
	document.getElementById("one").innerText=name1;
	game(name1);
}	
function game(name1){
	
	
	var point1=document.getElementById("p1");
	var point2=document.getElementById("p2");
	 var matchdraw=document.getElementById("matchdraw");
	 var playerone=document.getElementById("playerone");
	 var playertwo=document.getElementById("playertwo");
	 
	var arr=["STONE","PAPER","SCISSOR"];
	var arr2=["PAPER","SCISSOR","STONE"];
	arr2.sort((x)=>Math.random()-0.5);
	let nam2=arr2[0];
	document.getElementById("two").innerText=nam2;
	if(name1==nam2){
	matchdraw.style.color="yellow";
	playerone.style.color="transparent";
	playertwo.style.color="transparent";
	
	}
	else if(name1=="STONE" && nam2=="PAPER" ){
		matchdraw.style.color="yellow";
	playerone.style.color="transparent";
	playertwo.style.color="transparent";
	count1++;
	document.getElementById("p1").innerText=count1;
	}
	else if(name1=="STONE" && nam2=="SCISSOR" ){
		matchdraw.style.color="transparent";
	playerone.style.color="yellow";
	playertwo.style.color="transparent";
	count1++;
	document.getElementById("p1").innerText=count1;
	}
	else if(name1=="PAPER" && nam2=="STONE" ){
		matchdraw.style.color="transparent";
	playerone.style.color="yellow";
	playertwo.style.color="transparent";
	count1++;
	document.getElementById("p1").innerText=count1;
	}
	else if(name1=="SCISSOR" && nam2=="PAPER" ){
		matchdraw.style.color="transparent";
	playerone.style.color="yellow";
	playertwo.style.color="transparent";
	count1++;
	document.getElementById("p1").innerText=count1;
	}
	else{
matchdraw.style.color="transparent";
	playerone.style.color="transparent";
	playertwo.style.color="yellow";
	count2++;
	document.getElementById("p2").innerText=count2;
	}
	
	if(count1==10){
		alert("MATCH END PLAYER ONE WIN");
		window.location.reload();
	}
	if(count2==10){
		alert("MATCH END PLAYER ONE WIN");
		window.location.reload();
	}
	
}