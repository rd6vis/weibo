var serverUrl = "http://10.10.20.39:8080/";

var indexUrl = serverUrl + "weiboVis/index.html";
var networkUrl = serverUrl + "weiboVis/html/network.html";
var accountUrl = serverUrl + "weiboVis/html/account.html";
var weiboUrl = serverUrl + "weiboVis/html/weibo.html";
var eventUrl = serverUrl + "weiboVis/html/event.html";

var search_resultUrl = serverUrl + "weiboVis/html/search_result.html";

var bondUrl = function(){
	document.getElementById("linktoindex").onclick = function(){window.location.href = indexUrl};
	document.getElementById("linktonetwork").onclick = function(){window.location.href = networkUrl}; 
	// document.getElementById("linktoaccount").onclick = function(){window.location.href = accountUrl}; 
	// document.getElementById("linktoweibo").onclick = function(){window.location.href = weiboUrl};  
	// document.getElementById("linktoevent").onclick = function(){window.location.href = eventUrl}; 
};

bondUrl();

function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]); 
    return null; 
}

function nameMap(oldname){
	if(oldname == "name")
		return "用户名";
	else if(oldname == "time")
		return "注册时间";
	else if(oldname == "location")
		return "注册地";
	else if(oldname == "impact")
		return "影响力";
	else if(oldname == "level")
		return "有害级别";
	else if(oldname == "identification")
		return "认证信息";
	else
		return oldname;
} 