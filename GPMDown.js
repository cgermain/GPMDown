// this is the code which will be injected into a given page...

(function() {
	var regex = /(GPM\d+)/g;
	var all_html = document.documentElement.innerHTML;
	var match = regex.exec(all_html);
	var gpm_files = [];

	while (match !== null) {
		gpm_files.push(match[1]);
		match = regex.exec(all_html);
	}

	gpm_files = Array.from(new Set(gpm_files));
	console.log(gpm_files);

	for (i = 0; i < gpm_files; i++){
		var a = document.createElement('a');
		var filename = "placeholder" + gpm_files[i];
		a.download = filename;
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		delete a;
	}

})();