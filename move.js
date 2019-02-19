//json {width:500,height:300,left:200};
//obj指当前要动的DOM的对象
function move(obj, json) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	var flag = true;
	for(var attr in json) {
		var iTarget = json[attr];
		if(attr == "opacity") {
			var iCur = parseInt(getStyle(obj, attr) * 100);
		} else {
			var iCur = parseInt(getStyle(obj, attr));
		}

		var iSpeed = (iTarget - iCur) / 8;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

		if(attr == "opacity") {
			obj.style.opacity = (iCur + iSpeed) / 100;
			obj.style.filter = "alpha(opacity=" + iCur + iSpeed + ")";
		} else {
			obj.style[attr] = iCur + iSpeed + "px";
		}

		if(iCur != iTarget) {
			flag = false;
		}
	}
	if(flag) {
		clearInterval(obj.timer);
	}
}, 20)
}
//获取样式函数
function getStyle(obj, attr) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr];
	} else {
		return obj.currentStyle[attr];
	}
}

//getById
function $id(id){
	return document.getElementById(id);
}
