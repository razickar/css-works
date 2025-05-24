function rotation(){
	
	var inp=document.getElementById("inp").value;
	var inp2=document.getElementById("inp2").value;
	
	let arr=inp.split(",");
	alert(arr);
	for(let i=0,j=arr.length-1,times=0;times<inp2;times++){
		
		let temp=arr[[j]];
		
		arr.unshift(temp);
	arr.pop(arr[j]);
		alert(arr);
	}
}