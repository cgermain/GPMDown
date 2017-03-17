// this is the code which will be injected into a given page...

(function() {
	var regex = />(GPM.+)<\/a>/g;
	var all_html = document.documentElement.innerHTML;
	var gpm_files = regex.exec(all_html);

	console.log(gpm_files[1]);

	for (i = 0; i < gpm_files; i++){
		var a = document.createElement('a');
		var filename = "placeholder" + gpm_files[i];
		a.download = filename;
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		delete a;
	}

	// // just place a div at top right
	// var div = document.createElement('div');
	// div.style.position = 'fixed';
	// div.style.top = 0;
	// div.style.right = 0;
	// div.textContent = 'Click here to download XLS';
	// document.body.appendChild(div);

})();