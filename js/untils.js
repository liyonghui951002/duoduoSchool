//读取cookie:
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
// setCookie("name","hayden","s20");
//设置cookies
function setCookie(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec * 1);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
//删除cookies
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function getsec(str) {
	var str1 = str.substring(1, str.length) * 1;
	var str2 = str.substring(0, 1);
	if(str2 == "s") {
		return str1 * 1000;
	} else if(str2 == "h") {
		return str1 * 60 * 60 * 1000;
	} else if(str2 == "d") {
		return str1 * 24 * 60 * 60 * 1000;
	}
}

//弹出层 //title:标题； text：文本内容； type：弹出类型（warning，error，success，info）；
function swalert(title, text, type,callback) {
	swal({
			title: title,
			text: text,
			type: type,
			confirmButtonText: "确定",
		},
		function(isConfirm) {
			callback(isConfirm);
		});
}
//封装ajax
//url:URL地址；allDataJson：参数；callback：回调；
function request(url, allDataJson, callback) {
	$.ajax({
		url: url,
		type: "post",
		dataType: "json",
		data: allDataJson,
		success: function(result) {
			callback(result);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			callback("请求失败，请重试");
		}
	});
}
//弹出测试信息
function test(data) {
	alert(JSON.stringify(data));
}