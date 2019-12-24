// function getStyle(obj, attr) {
// 	if (obj.currenStyle) {
// 		return obj.currenStyle[attr];
// 	} else {
// 		return getComputedStyle(obj, null)[attr];
// 	}
// }

// function animate(obj, json, callback) {
// 	clearInterval(obj.timer);
// 	obj.timer = setInterval(function () {
// 		var isStop = true;
// 		for (var attr in json) {
// 			if (attr == 'opacity') {
// 				var now = parseInt(getStyle(obj, attr) * 100);
// 			} else {
// 				var now = parseInt(getStyle(obj, attr));
// 			}
// 			var speed = (json[attr] - now) / 6;
// 			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
// 			var current = now + speed;
// 			if (attr == 'opacity') {
// 				obj.style.opacity = current / 100;
// 			} else {
// 				obj.style[attr] = current + 'px';
// 			}
// 			if (json[attr] !== current) {
// 				isStop = false;
// 			}
// 		}
// 		if (isStop) {
// 			clearInterval(obj.timer);
// 			if (callback) {
// 				callback();
// 			}
// 		}
// 	}, 30)
// }
// var box = document.getElementById('box');

// var slider = document.getElementById('slider');

// var img = document.getElementsByTagName('img');

// var left = document.getElementById('left');

// var right = document.getElementById('right');

// // var li = document.getElementsByTagName('li');
// var li=box.getElementsByTagName('li');
// // var li=document.getElementById('chooseli')[0].document.getElementsByTagName('li');
// var index = 1;

// var isMoving = false;
// function next() {
// 	if (isMoving) {
// 		return;
// 	}
// 	isMoving = true;
// 	index++;
// 	numberChange();
// 	animate(slider, {
// 		left: -1200 * index
// 	}, function () {
// 		if (index >= 6) {
// 			slider.style.left = -1200 + 'px';
// 			index = 1;
// 		}
// 		isMoving = false;
// 	});
// }

// function before() {
// 	if (isMoving) {
// 		return;
// 	}
// 	isMoving = true;
// 	index--;
// 	numberChange();
// 	animate(slider, {
// 		left: -1200 * index
// 	}, function () {
// 		if (index <= 0) {
// 			slider.style.left = -6000 + 'px';
// 			index = 5;
// 		}
// 		isMoving = false;
// 	});
// }

// var timer = setInterval(next, 5000);

// box.onmouseover = function () {
// 	clearInterval(timer);
// 	animate(left, {
// 		opacity: 80
// 	});
// 	animate(right, {
// 		opacity: 80
// 	});
// }

// box.onmouseout = function () {
// 	animate(left, {
// 		opacity: 0
// 	});
// 	animate(right, {
// 		opacity: 0
// 	});
// 	timer = setInterval(next, 5000);
// }

// right.onclick = next();

// left.onclick = before();

// for (var i = 0; i < 5; i++) {
// 	li[i].innerHTML = i + 1;
// 	li[i].onclick = function () {
// 		console.log(this.innerHTML);
// 		index = this.innerHTML;
// 		numberChange();
// 		animate(slider, {
// 			left: -1200 * (this.innerHTML)
// 		})
// 	}
// }

// function numberChange() {
// 	for (var i = 0; i < li.length; i++) {
// 		li[i].className = '';
// 	}
// 	if (index >= 6) {
// 		li[0].className = 'li';
// 	} else if (index <= 0) {
// 		li[4].className = 'li';
// 	} else {
// 		li[index - 1].className = 'li';
// 	}
// }

//字幕滚动变量
var scrollTime=null;
var len = 400;//一个完整滚动条的长度
var x = 0;
//启动滚动定时器
function roll(){
	console.log("启动");
	var tag1 = document.querySelector(".scroll>span");
	var tag2 = tag1.nextSibling
	var fun = function(){
		tag1.style.left = x + 'px';
		tag2.style.left = (x+len)+'px';
		x=x-5;
		if((x+len)===0){
			x=0;
		}
	}
	if(scrollTime){
		clearInterval(scrollTime);
	}
	scrollTime = setInterval(fun,300);
}
//绑定鼠标事件
function bindMouseEvent(){
	var e1 = document.querySelector(".scroll>span");
	var e12 = e1.cloneNode(true);
	len = e1.clientWidth + 100;//动态改变滚动条的长度，避免文字过多重叠
	e12.style.left = (x+len)+"px";
	e1.parentElement.appendChild(e12);
	e1.addEventListener("mouseenter",function(e){
		clearInterval(scrollTime);
	})
	e1.addEventListener('mouseleave',function(e){
		roll();
	})

}

// var warn = document.getElementById("warn");
// var warn = document.getElementById("warn1");
// var warn11 = document.getElementById("warn11");
// function rol(){
// 	var locate=parseInt(getStyle(warn11,"left"));
// 	warn11.style.left = locate-1+"px";
// 	if (locate==-360) {
// 		warn11.style.left=1200+"px";
// 	}
// }
// setInterval(rol,15);
// warn1.appendChild(warn11.cloneNode(true));
// function warnScroll(){
// warn.scrollLeft+=1;
//     if(warn.scrollLeft>=warn11.offsetWidth){
//         warn.scrollLeft=0;
//     }
// }
// var scroll=setInterval(warnScroll,16);
// warn.onmouseover = function(){
//     clearInterval(scroll);
// }
// warn.onmouseout = function(){
//     scroll = setInterval(warnScroll,16);
// }

//轮播图
onload=function(){
	var arr = document.getElementsByClassName("slide");
	for(var i=0;i<arr.length;i++){
		arr[i].style.left = i*100+"px";
	}
}
function LeftMove(){
	var arr = document.getElementsByClassName("slide");//获取三个子div
	for(var i=0;i<arr.length;i++){
		var left = parseFloat(arr[i].style.left);
		left-=3;
		var width = 280;//图片的宽度
		if(left<=-width){
			left=(arr.length-1)*width;//当图片完全走出显示框，拼接到末尾
			clearInterval(moveId);
		}
		arr[i].style.left = left+"px";
	}
}
function divInterval(){
	moveId=setInterval(LeftMove,10);//设置一个10毫秒定时器
}
	
	
timeId=setInterval(divInterval,2000);//设置一个3秒的定时器。
	
function stop(){
	clearInterval(timeId);
}
function start(){
	clearInterval(timeId);
	timeId=setInterval(divInterval,2000);
}
	
//页面失去焦点停止
onblur = function(){
	stop();
}
//页面获取焦点时开始
onfocus = function(){
	start();
}
