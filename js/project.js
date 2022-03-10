function init(){
	let title=document.getElementById('title');
	let home=document.getElementById('home');
	let home_img=document.getElementById('home_img');
	home_img.addEventListener('mousedown',(e) => {
		e.target.setAttribute('style','width:30px;height:30px;opacity:0.2;');
		home.setAttribute(
		'style',
		'margin-left:auto;margin-right:auto;border:2px solid rgba(150,150,200,0.4);')
	});
	home_img.addEventListener('mouseup',(e) => {
		e.target.setAttribute('style','width:30px;height:30px;opacity:1;');
		home.setAttribute('style','margin-left:auto;margin-right:auto;border:none;')
	});
	var overview=document.getElementById('overview');
	let video=document.getElementsByTagName('iframe')[0];
	var params = (new URL(window.location.href)).searchParams;
	title.innerHTML=`<u>${params.get("prj")}</u>`;
	video.src="projects/videos/"+ params.get("prj") + ".mp4";
	home.href=window.location.protocol + "//" + window.location.hostname + "/#projects";
	$.ajax({
		url:"projects/overviews.json",
		type:"GET"
	}).done(res => {
		overview.innerHTML=res[params.get("prj")];
	});

	
	
}
