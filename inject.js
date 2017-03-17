// this is the code which will be injected into a given page...

(function() {

	console.log("running")
	var regex = />(GPM.+)<\/a>/g;
	var all_html = document.documentElement.innerHTML;
	var gpm_files;

	do{
		gpm_files = regex.exec(all_html);
	} while (gpm_files);

	alert(gpm_files);

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Click here to download XLS';
	document.body.appendChild(div);

	alert('inserted self... giggity');



})();