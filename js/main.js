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

function save(key, data) {
	localStorage.setItem(key.toString(), JSON.stringify(data));
}

function restore(key) {
	return JSON.parse(localStorage.getItem(key.toString()));
}

