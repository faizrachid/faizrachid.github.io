let btns=document.getElementsByClassName("btn btn-info");
for(let b of btns){
	b.addEventListener("click",(e) => {
		let items=document.getElementsByClassName("collapse multi-collapse");
		for(let item of items){
			item.setAttribute("style","display:none;");
		}
		let item=document.getElementById(e.target.getAttribute("aria-controls"));
		item.setAttribute("style","display:block;");
	});
}
const prj_btns = document.querySelectorAll("a.btn");
for(let b of prj_btns){
	b.addEventListener("click",(e) => {
		let card = e.target.parentNode.parentNode.innerHTML;
		let src=card.match(/<img src="projects\/images\/(.+)\.png/)[1];
		window.location.replace(
		window.location.protocol + "//" + window.location.hostname + "/project.html?prj=" + src);
	});
}
