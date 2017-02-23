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

$().ready(function () {
	$("ul.list > li").click(function () {
		if( $(this).find("input[type='checkbox']").attr("checked") ){
			$(this).find("input[type='checkbox']").removeAttr("checked");
		}else{
			$(this).find("input[type='checkbox']").attr("checked", true);
		}
	})
});