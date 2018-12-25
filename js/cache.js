if(getCookie("duoduoName") == null) {} else {
	$(".login").html('<li><span style="color: red;">欢迎，' + getCookie("duoduoName") + '</span></li>');
}