//用户名 获取焦点时显示
function user(){
	var p=document.getElementsByClassName("inp")[0].nextSibling.nextSibling;
	p.innerHTML="请输入4-10位用户名";
}
//用户名 失去焦点时为空
function user2(){
	var p=document.getElementsByClassName("inp")[0].nextSibling.nextSibling;
	p.innerHTML=null;
}
//密码 获取焦点时显示
function password(){
	var p=document.getElementsByClassName("inp")[1].nextSibling.nextSibling;
	p.innerHTML="请输入6-12位密码";
}
//密码 失去焦点时为空
function password2(){
	var p=document.getElementsByClassName("inp")[1].nextSibling.nextSibling;
	p.innerHTML=null;
}
//
var arr=["image/zEhUN.jpg","image/Zin4c.jpg","image/ZITGj.jpg","image/zJ6iV.jpg","image/ZKc9S.jpg","image/zKDXU.jpg"];
var lu;
function gcode(){
	var a=parseInt(Math.random(0,1)*6);
	var img=document.getElementsByClassName("codeImg");
	var image=new Image();
	img[0].innerHTML=null;
	image.src=arr[a];
	img[0].appendChild(image);
	lu=a;
}
//登录 点击时
function join(){
	var username=document.getElementsByTagName("input")[0].value;
	var password=document.getElementsByTagName("input")[1].value;
	var code=document.getElementsByTagName("input")[2].value;

	if(username.length>10 || username.length<4){
		alert("用户名位数不对");
	}
	if(password.length>12 ||password.length<6){
		alert("密码位数不对");
	}
	if(code==arr[lu].substr(6,5)){
		alert("登陆成功！");
	}else{
		alert("验证码错误");
	}
}