/****************************
Create By JiangJun on 2016.09.07
*******************************/

var scroll = function(option){
	var _title_container = option.title;
	var _content_container = option.contentDiv;
	var _show_name = option.show_name || _content_container;
	
	initTitle(_title_container,option.titleStyle);
	
	for(var i=0;i<_content_container.length;i++){
		var tempDiv = $("<div id='title_"+_content_container[i] +"' class='no-move-title'>"+_show_name[i]+"</div>");
		$("#"+_title_container).append(tempDiv);
		
		$(tempDiv).on("click",{"hrefTo":_content_container[i]},function(d){
			window.location.href = "#"+d.data.hrefTo;
		});
	}
	checktitle(_content_container);
	$(document).on("scroll",{flag:_content_container},function(d){
		checktitle(d.data.flag);		
	});
}

function initTitle(id,style){
	var _top = style.top || 0;
	var _left = style.left || 0;
	var _w = style.width || "20%";
	var _h = style.height || "100%"
	
	var TitleDiv = $("<div id='" + id + "' class='title-div'></div>");
	$(TitleDiv).height(_h);
	$(TitleDiv).width(_w);
	$("body").append(TitleDiv);
	
	var div = document.getElementById(id);
	div.style.top = _top;
	div.style.left = _left;
}

function isInScreen(e){
	var temp_min = $("#"+e)[0].offsetTop;
	var temp_max = temp_min + $("#"+e).height();
	if($("body").scrollTop()<temp_max && $("body").scrollTop() + $(window).height()>temp_min){
		return true;
	}
	else
		return false;
}

function checktitle(d){
	for(var i=0;i<d.length;i++){
		if(isInScreen(d[i])){
			$("#title_"+d[i]).removeClass("no-move-title");
			$("#title_"+d[i]).addClass("no-move-title-focus");
		}else{
			$("#title_"+d[i]).removeClass("no-move-title-focus");
			$("#title_"+d[i]).addClass("no-move-title");
		}
	}
}