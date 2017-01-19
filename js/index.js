$("#index_select_button").on("click",function(){
	window.location.href = search_resultUrl + "?id=" + $("#index_selectbox").val();
})

$("#index_selectbox").keydown(function(e){
	if (e.keyCode == 13) {
		window.location.href = search_resultUrl + "?id=" + $("#index_selectbox").val();
	}
});

/*DIV add content*/
$.ajax({
	url:serverUrl + "weiboVis/index",
	// url:serverUrl + "weiboVis/data/search_result.json",
	type:"get",
	data:{
		keyword:""
	},
	datatype:'json',
	success:function(data){
		bindListToDiv("hotweibo",data.weibo);
		bindListToDiv("account",data.account);
		bindListToDiv("hotevent",data.event);
	}
});

function bindListToDiv(e,list){
	var div = $("#"+e);
	for(var i=0;i<list.length;i++){
		var temp = $("<div id='"+ list[i].Id+"'class='div-list'>"+ (i+1) +"、" +list[i].content+"</div>");
		div.append(temp);

		if(e == "hotweibo"){
			$(temp).on("click",function(){
				window.location.href = weiboUrl + "?keyword=" + encodeURI(this.id);
			})
		}else if(e == "account"){
			$(temp).on("click",{d:list[i]},function(e){
				window.location.href = accountUrl + "?keyword=" + encodeURI(e.data.d.content);
			})
		}else if(e == "hotevent"){
			$(temp).on("click",function(){
				window.location.href = eventUrl + "?keyword=" + encodeURI(this.id);
			})
		}

	}
}

/*sigma*/
var network = function(option){
	var _container = option.container;

	var sig = new sigma(
	{
		renderer: {
			container: document.getElementById(_container),
			type: 'canvas'
	    },
		settings: {
			minNodeSize: 1,
			maxNodeSize:2,
			maxEdgeSize:0.5,
			drawLabels:false
		}
	});

	sigma.parsers.gexf(
		'./data/autolayout.gexf',
		sig,
		function(s) {
			s.graph.nodes().forEach(function(n) {
				n.originalColor = n.color;
			});
			s.graph.edges().forEach(function(e) {
				e.originalColor = e.color;
				e.type = 'curve';
			});

			s.refresh();
		}
	);
}

var o ={
	container:"index_network"
}
var n = new network(o);
