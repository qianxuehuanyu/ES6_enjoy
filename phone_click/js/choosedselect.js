(function () {
	/* body... */

	const allchooseline=document.getElementsByClassName("mui-table-view-cell");
	for(let i=0;i<allchooseline.length;i++){
		let choosep=allchooseline[i].getElementsByClassName("mui-collapse-content")[0].getElementsByTagName("p");
		let thechooseshow=allchooseline[i].getElementsByClassName("mui-badge")[0];
		// console.log(choosep.length);
		for(let j=0;j<choosep.length;j++){
			choosep[j].onclick=function () {	
				thechooseshow.innerHTML=choosep[j].innerText;
			};
		}
	}
})()