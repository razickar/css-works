var btn=document.querySelector(".btn");
var video=document.querySelector("video");

btn.addEventListener('click',function(){
	var sw=document.querySelector(".btncolor3");
	if(!sw.classList.contains("switch")){
		sw.classList.add("switch");
		video.play();
	}
	else{
		sw.classList.remove("switch");
		video.pause();
	}
});

window.addEventListener('load',()=>{
	var loader=document.querySelector(".closeloader");
	if(!loader.classList.contains("loader")){
		loader.classList.add("loader");
	}
	
});