var id = getQueryString("id");
$("#index_selectbox").val(id);

$.ajax({
	url:serverUrl + "weiboVis/index",
	// url:serverUrl + "weiboVis/data/search_result.json",
	type:"get",
	data:{
		keyword:id
	},
	datatype:'json',
	success:function(d){
        var weibo = $("#weibo");
        var account = $("#account");
        var events = $("#events");

        addList(weibo,d.weibo,weibo_click);
        addList(account,d.account,account_click);
        addList(events,d.event,events_click);
	},
    error:function(e){
        console.log(e);
    }
});

function weibo_click(d){
    window.location.href = weiboUrl + "?keyword=" + encodeURI(d.id);
}

function account_click(d){
    window.location.href = accountUrl + "?keyword=" + encodeURI(d.content);
}

function events_click(d){
    window.location.href = eventUrl + "?keyword=" + encodeURI(d.id);
}

function addList(container,data,click_event){
    for(var i=0;i<data.length;i++){
        var temp = $("<div class='div-list-content'>"+(i+1)+"、"+data[i].content+"</div>");
        temp.on("click",{d:data[i]},function(e){
            click_event(e.data.d);
        })
        container.append(temp);
    }
}

$("#index_select_button").on("click",function(){
	window.location.href = search_resultUrl + "?id=" + $("#index_selectbox").val();
})

$("#index_selectbox").keydown(function(e){
	if (e.keyCode == 13) {
		window.location.href = search_resultUrl + "?id=" + $("#index_selectbox").val();
	}
});
