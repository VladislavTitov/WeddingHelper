(function() {
	window.addEventListener("tizenhwkey", function(event) {
		if(event.keyName === "back"){
			if(document.title === "Main page"){
				tizen.application.getCurrentApplication().exit();
			}else{
				window.history.back();
			}
		}
	});
}());