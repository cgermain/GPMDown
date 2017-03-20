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

	var urls = gpm_files.map(function(gpm_filename){
		var url_prefix = "http://localhost:8082/thegpm-cgi/plist.pl?filter=&proex=-1&npep=0&nohead=yes&path=/gpm/archive/";
		var url_suffix = ".xml&order=&d=&sheet=1&display_select=2";
		return url_prefix + gpm_filename + url_suffix;
	})

	console.log(urls);
	for (i = 0; i < urls.length ; i++){
		var a = document.createElement('a');
		var filename = urls[i];
		a.download = filename;
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		console.log("clicked: " + filename)
		delete a;
	}

	//TODO-Get zip working
	// var zip = new JSZip();
	// var count = 0;
	// var date = new Date();
	// var zipFilename = "GPM_xls_archive_" + date.getYear() + date.getMonth() + date.getDate() + ".zip";

	// urls.forEach(function(url){
	//   var filename = gpm_files[count]+".xls";
	//   // loading a file and add it in a zip file
	//   JSZipUtils.getBinaryContent(url, function (err, data) {
	//      if(err) {
	//         throw err; // or handle the error
	//      }
	//      zip.file(filename, data, {binary:true});
	//      count++;
	//      if (count == urls.length) {
	//        var zipFile = zip.generate({type: "blob"});
	//        saveAs(zipFile, zipFilename);
	//      }
	//   });
	// });

})();