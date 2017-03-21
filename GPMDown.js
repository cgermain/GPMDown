// this scrapes the page for any mention of GPM* and then creatues links to the two pages in GPM to download excel sheets

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
	
	var urls = gpm_files.map(function(gpm_filename){
		var url_prefix = "http://localhost:8082/thegpm-cgi/plist.pl?filter=&proex=-1&npep=0&nohead=yes&path=/gpm/archive/";
		var url_suffix = ".xml&order=&d=&sheet=1&display_select=2";
		return url_prefix + gpm_filename + url_suffix;
	});

	var protein_urls = gpm_files.map(function(gpm_filename){
		var protein_url_prefix = "http://localhost:8082/thegpm-cgi/plist.pl?filter=&proex=-1&npep=0&nohead=yes&path=/gpm/archive/";
		var protein_url_suffix = ".xml&order=&d=&sheet=1&display_select=2";
		return protein_url_prefix + gpm_filename + protein_url_suffix;
	});

	for (i = 0; i < urls.length ; i++){
		window.open(urls[i]);
		window.open(protein_urls[i]);
	}

})();