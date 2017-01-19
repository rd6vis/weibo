var network = function(option){
	var _container = option.container;
	
	sigma.classes.graph.addMethod('neighbors', function(nodeId) {
		var k,
			neighbors = {},
			index = this.allNeighborsIndex[nodeId] || {};

		for (k in index)
			neighbors[k] = this.nodesIndex[k];

		return neighbors;
	});
	
	sigma.classes.graph.addMethod('findNode', function(nodeId) {
		var temp = {};
		this.nodes().forEach(function(n) {
			if(n.label == nodeId){
				temp = n;
				return;
			}
		});
		return  temp;
	});
	
	var sig = new sigma(
	{
		renderer: {
			container: document.getElementById(_container),
			type: 'canvas'
	    },
		settings: {
			minNodeSize: 0,
			maxNodeSize: 5,
			maxEdgeSize:0.5,
			drawLabels:false
		}
	});
	
	sigma.parsers.gexf(
	//sigma.parsers.json(
		//'../data/sigma_data.gexf',
		'../data/autolayout.gexf',
		sig,
		function(s) {
			// This function will be executed when the
			// graph is displayed, with "s" the related
			// sigma instance.

			s.graph.nodes().forEach(function(n) {
				//n.color = '#d71345';
				n.originalColor = n.color;
				n.label = n.attributes[2];
			});
			s.graph.edges().forEach(function(e) {
				//e.color = '#bed742';
				e.originalColor = e.color;
				e.type = 'curve';
			});

			s.refresh();

			s.bind('clickNode', function(e) {				
				_clickNode(e);
			});

			// When the stage is clicked, we just color each
			// node and edge with its original color.
			s.bind('clickStage', function(e) {
				s.graph.nodes().forEach(function(n) {
					n.color = n.originalColor;
				});

				s.graph.edges().forEach(function(e) {
					e.color = e.originalColor;
				});

				// Same as in the previous event:
				s.refresh();
				
				$("#info").hide();
			});
			
			function _clickNode(e){
				if(typeof(e.id) != "string"){
					var node = e.data.node;
					var nodeId = e.data.node.id;
					var	toKeep = s.graph.neighbors(nodeId);
					toKeep[nodeId] = node;
				}
				else{
					var node = e;
					var nodeId = e.id;
					var	toKeep = s.graph.neighbors(nodeId);
					toKeep[nodeId] = node;
				}

				s.graph.nodes().forEach(function(n) {
					if (toKeep[n.id])
						n.color = n.originalColor;
					else
						n.color = 'rgba(250,250,250,0)';
				});

				s.graph.edges().forEach(function(e) {
					if (toKeep[e.source] && toKeep[e.target])
						e.color = e.originalColor;
					else
						e.color = 'rgba(250,250,250,0)';
				});

				// Since the data has been modified, we need to
				// call the refresh method to make the colors
				// update effective.
				s.refresh();
				$("#baseinfo").empty();
				$("#connectinfo").empty();
				
				var tempDiv = $("<div class='div-infolist'>账户名称： "+ node.label+"</div>"+
								"<div class='div-infolist'>账户ID： "+ node.id+"</div>");
				$("#baseinfo").append(tempDiv);
												
				// var t = node.attributes;
				// for(var key in t){
				// 	tempDiv = $("<div class='div-infolist'>"+ key +"："+ t[key]+"</div>");
				// 	$("#baseinfo").append(tempDiv);
				// }
				
				for(var key in toKeep){
					tempDiv = $("<div class='div-infolist'><a href="+ weiboUrl +"?id="+ toKeep[key].label +">"+ toKeep[key].label+"</a></div>");
					$("#connectinfo").append(tempDiv);
				}
				
				$("#info").show();
			}
			
			//bind event
			$("#search_box").keydown(function(e){
				if (e.keyCode == 13) {		
					var tmp_node = s.graph.findNode($("#search_box").val());
					_clickNode(tmp_node);
				}
			});
		}
	);
}

var o ={
	container:"network-content"
}
var n = new network(o);   