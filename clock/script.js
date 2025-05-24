function clock(){
	let time=new Date();
	let hrs=String(time.getHours()).padStart(2,"0");
	let min=String(time.getMinutes()).padStart(2,"0");
	let sec=String(time.getSeconds()).padStart(2,"0");
	
	let total=hrs+" : "+min+" : "+sec;
	document.getElementById("time").innerText=total;
	
}
setInterval(clock,1000);