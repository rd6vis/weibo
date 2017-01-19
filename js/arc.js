var arc = function(option){
	var _container = option.container;
	var _w = $("#"+_container).width();
	var _h = $("#"+_container).height();
	
	var width = _w;  
	var height = _h;
	var _r = _w>_h ? _h : _w;
	
	var dataset = [{'a':2,'b':10},{'a':2,'b':14},{'a':2,'b':12},{'a':2,'b':11},{'a':2,'b':10},{'a':2,'b':15},{'a':2,'b':8},{'a':2,'b':14},{'a':2,'b':12},{'a':2,'b':13},{'a':2,'b':9},{'a':2,'b':14},{'a':2,'b':17},{'a':2,'b':14},{'a':2,'b':9},{'a':2,'b':14},{'a':2,'b':13},{'a':2,'b':12},{'a':2,'b':10},{'a':2,'b':19},{'a':2,'b':10},{'a':2,'b':14},{'a':2,'b':10},{'a':2,'b':14},]; 
	var svg = d3.select("#"+_container).append("svg")  
							.attr("width",width)  
							.attr("height",height);  
	var pie = d3.layout.pie()
				  .value(function(d){
					  return d.a;
				  });  
	var outerRadius = _r / 4;  
	var innerRadius = _r / 6; 
	var arc = d3.svg.arc()  
					.innerRadius(innerRadius)  
					.outerRadius(function (d) { 
				 return d.data.b*14;         
	});        
	var color = d3.scale.category10();       
	var arcs = svg.selectAll("g")  
				  .data(pie(dataset))  
				  .enter()  
				  .append("g")  
				  .attr("transform","translate("+_w/2+","+_h/2+")");                  
	arcs.append("path")  
		.attr("fill",function(d,i){  
			return '#8DB6CD';  
		})  
		.attr("stroke", "black")
		.attr("d",function(d){  
			return arc(d);  
		});  
	var pie1 = d3.layout.pie();  
	var outerRadius1 = _r / 6;  
	var innerRadius1 = _r / 8; 
	var arc1 = d3.svg.arc()  
					.innerRadius(function (d) {  
			   return d.data.b*4;
	})  
					.outerRadius(function (d) { 
				 return outerRadius1; 
	});  
	arcs.append("path")  
		.attr("stroke", "black")
		.attr("fill",function(d,i){  

			return '#F08080';  
		})  
		.attr("d",function(d){ 
			return arc1(d);  
		});
}		