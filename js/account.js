var id = getQueryString("keyword");
var o = {
	title:"title",
	titleStyle:{
		top:"30%",
		left:0,
		width:"6%",
		height:"100%"
	},
	contentDiv:["content1","content2","content3","content4","content5"],
	show_name:["行为时间规律","微博展示","粉丝关系展示","好友关系展示","交互关系展示"],
}
var s = new scroll(o);

/*load info*/
$.ajax({
	url:serverUrl + "weiboVis/accountVis",
	// url:serverUrl + "weiboVis/data/account.json",
	type:"get",
	data:{
		keyword:id
	},
	datatype:'json',
	success:function(data){
		render(data);
	}
});

function render(data){
	var t = data["info"];
	$("#baseinfo-img").append($("<img src='"+ t.photo +"'/>"));

	for(var key in t){
		if(key == "photo")
			continue;
		var tempDiv = $("<div class='account-infolist'>"+nameMap(key)+": "+ t[key] +"</div>");
		$("#baseinfo").append(tempDiv);
	}

	/*load arc*/
	var o ={
		"container":"time"
	}
	var a = new arc(o);

	/*load force*/
	var o = {
		"container":"fans",
		"data":data["link_force"]["fans"]
	}

	var f1 = new force(o);
	o.container = "friend";
	var f2 = new force(o);
	o.container = "active";
	var f3 = new force(o);

	/*load wordcloud*/
	var o = {
		"container":"showweibo",
		data:{
			"word_cloud":data.weibo.wordcloud,
		}
	};
	for(i=0;i<o.data.word_cloud.length;i++){
		o.data.word_cloud[i].value=o.data.word_cloud[i].value*30;
	}
	var w = new wordCloud(o);
}