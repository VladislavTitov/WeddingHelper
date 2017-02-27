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

/*(function () {
	var list = document.querySelectorAll("ul.list > li");
	for (var i = 0; i < list.length; i++) {	
		console.log(list[i]);
		list[i].addEventListener("click", function (argument) {
			console.log("click on li");
			var check = list[i].children[0].children[1];
			if (check.checked === true) {
				check.checked = false;
			}else{
				check.checked = true;
			}
		});
	}
	
}());*/

/*$().ready(function () {
	$("ul.list > li").click(function () {
		if( $(this).find("input[type='checkbox']").attr("checked") ){
			$(this).find("input[type='checkbox']").removeAttr("checked");
		}else{
			$(this).find("input[type='checkbox']").attr("checked", true);
		}
	});
});*/

function save(key, data) {
	localStorage.setItem(key.toString(), JSON.stringify(data));
}

function restore(key) {
	return JSON.parse(localStorage.getItem(key.toString()));
}

