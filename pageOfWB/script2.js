//实现 导航
function getStyle(obj, attr) {
	if (obj.currenStyle) {
		return obj.currenStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}

function animate(obj, json, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var isStop = true;
		for (var attr in json) {
			if (attr == 'opacity') {
				var now = parseInt(getStyle(obj, attr) * 100);
			} else {
				var now = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr] - now) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			var current = now + speed;
			if (attr == 'opacity') {
				obj.style.opacity = current / 100;
			} else {
				obj.style[attr] = current + 'px';
			}
			if (json[attr] !== current) {
				isStop = false;
			}
		}
		if (isStop) {
			clearInterval(obj.timer);
			if (callback) {
				callback();
			}
		}
	}, 30)
}
var box = document.getElementById('box');

var slider = document.getElementById('slider');

var img = document.getElementsByTagName('img');

var left = document.getElementById('left');

var right = document.getElementById('right');

// var li = document.getElementsByTagName('li');
var li=box.getElementsByTagName('li');
// var li=document.getElementById('chooseli')[0].document.getElementsByTagName('li');
var index = 1;

var isMoving = false;
function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	numberChange();
	animate(slider, {
		left: -1200 * index
	}, function () {
		if (index >= 6) {
			slider.style.left = -1200 + 'px';
			index = 1;
		}
		isMoving = false;
	});
}

function before() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	numberChange();
	animate(slider, {
		left: -1200 * index
	}, function () {
		if (index <= 0) {
			slider.style.left = -6000 + 'px';
			index = 5;
		}
		isMoving = false;
	});
}

var timer = setInterval(next, 5000);

box.onmouseover = function () {
	clearInterval(timer);
	animate(left, {
		opacity: 80
	});
	animate(right, {
		opacity: 80
	});
}

box.onmouseout = function () {
	animate(left, {
		opacity: 0
	});
	animate(right, {
		opacity: 0
	});
	timer = setInterval(next, 5000);
}

right.onclick = next();

left.onclick = before();

for (var i = 0; i < 5; i++) {
	li[i].innerHTML = i + 1;
	li[i].onclick = function () {
		console.log(this.innerHTML);
		index = this.innerHTML;
		numberChange();
		animate(slider, {
			left: -1200 * (this.innerHTML)
		})
	}
}

function numberChange() {
	for (var i = 0; i < li.length; i++) {
		li[i].className = '';
	}
	if (index >= 6) {
		li[0].className = 'li';
	} else if (index <= 0) {
		li[4].className = 'li';
	} else {
		li[index - 1].className = 'li';
	}
}

document.getElementsByTagName('body')[0].style.zoom=0.8;

//实现动态的发表
