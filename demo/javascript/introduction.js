setInterval(function() {
	var content = document.getElementsByClassName("content")[0];
	var boxHeight = document.getElementsByClassName("box")[0].offsetHeight;
	var contentHeight = content.offsetHeight;
	content.style.top = (boxHeight-contentHeight)/2 + "px";
},100);

document.onkeydown = function(e) {
	var isie = (document.all)?true:false;
	var key;
	var pasts = document.getElementsByClassName("past");
	var past = pasts[pasts.length-1];
	var present = document.getElementsByClassName("present")[0];
	var futures = document.getElementsByClassName("future");
	var future = futures[0];
	if(isie) {
		key = window.event.keyCode;
	} else {
		key = e.which;
	}
	if(key == "37") {
		if(pasts.length == 0) {
			present.style.webkitAnimationName = "noBack";
		} else {
			present.style.webkitAnimationName = "presentBack";
			past.style.webkitAnimationName = "pastBack";
			present.className = "future";
			past.className = "present";
		}
	}
	if(key == "39") {
		if(futures.length == 0) {
			present.style.webkitAnimationName = "noMove"
		} else {
			present.style.webkitAnimationName = "presentMove";
			future.style.webkitAnimationName = "futureMove";
			present.className = "past";
			future.className = "present";
		}
	}
};