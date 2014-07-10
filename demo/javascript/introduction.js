setInterval(function() {
	var container = document.getElementsByClassName("container")[0];
	var boxHeight = document.getElementsByClassName("box")[0].offsetHeight;
	var containerHeight = container.offsetHeight;
	container.style.top = (boxHeight-containerHeight)/2 + "px";
},100);

document.onkeydown = function(e) {
	var isie = (document.all)?true:false;
	var key;
	var pasts = document.getElementsByClassName("past");
	var past = pasts[pasts.length-1];
	var present = document.getElementsByClassName("present")[0];
	var futures = document.getElementsByClassName("future");
	var future = futures[0];
	var tops = document.getElementsByClassName("content-top");
	var top = tops[tops.length-1];
	var center = document.getElementsByClassName("content-center")[0];
	var bottoms = document.getElementsByClassName("content-bottom");
	var bottom = bottoms[0];
	if(isie) {
		key = window.event.keyCode;
	} else {
		key = e.which;
	}
	if(key == "37") {
		if(pasts.length == 0) {
			present.style.webkitAnimationName = "noBack";
			setTimeout(function() {
				present.style.webkitAnimationName = "none";
			},1000);
		} else {
			present.style.webkitAnimationName = "presentBack";
			past.style.webkitAnimationName = "pastBack";
			present.className = "future";
			past.className = "present";
		}
	}
	if(key == "38") {
		if(tops.length == 0) {
			center.style.webkitAnimationName = "noUp";
			setTimeout(function() {
				center.style.webkitAnimationName = "none";
			},1000);
		} else {
			center.style.webkitAnimationName = "centerBack";
			top.style.webkitAnimationName = "topBack";
			center.className = "content-bottom";
			top.className = "content-center";
		}
	}
	if(key == "39") {
		if(futures.length == 0) {
			present.style.webkitAnimationName = "noMove"
			setTimeout(function() {
				present.style.webkitAnimationName = "none";
			},1000);
		} else {
			present.style.webkitAnimationName = "presentMove";
			future.style.webkitAnimationName = "futureMove";
			present.className = "past";
			future.className = "present";
		}
	}
	if(key == "40") {
		if(bottoms.length == 0) {
			center.style.webkitAnimationName = "noDown";
			setTimeout(function() {
				center.style.webkitAnimationName = "none";
			},1000);
		} else {
			center.style.webkitAnimationName = "centerMove";
			bottom.style.webkitAnimationName = "bottomMove";
			center.className = "content-top";
			bottom.className = "content-center";
		}
	}
};