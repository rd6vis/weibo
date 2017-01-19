

var force = function(option){
	var _container = option.container;
//	console.log("_container"+_container);
	var _d = option.data;
	
	 // 路径配置
		require.config({
			paths: {
				echarts: '../js/echarts/'
			}
		});
		
		// 使用
		require(
			[
				'echarts',
				'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
			],
			function (ec) {
				// 基于准备好的dom，初始化echarts图表
				var myChart = ec.init(document.getElementById(_container)); 
				
				var option = {
		title : {
			text: '',
			subtext: '',
			x:'right',
			y:'bottom'
		},
		tooltip : {
			trigger: 'item',
			formatter: '{a} : {b}'
		},
		toolbox: {
			show : false,
			feature : {
				restore : {show: true},
				magicType: {show: true, type: ['force', 'chord']},
				saveAsImage : {show: true}
			}
		},
		legend: {
			x: 'left',
			data:['个人','粉丝']
		},
		series : [
			{
				type:'force',
				name : "关系",
				ribbonType: false,
				categories : [
					{
						name: '个人',
						 itemStyle: {
                        normal: {
                            color : '#ff7f50'
                        }
                    }
					},
					{
						name: '粉丝',
						 itemStyle: {
                        normal: {
                            color : '#eee'
                        }
                    }
					},
					{
						name:'朋友'
					}
				],
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								color: '#333'
							}
						},
						nodeStyle : {
							brushType : 'both',
							color:"#bcd2ee",
							borderColor : 'rgba(255,215,0,0.4)',
							borderWidth : 1
						},
						linkStyle: {
						//	type: 'solid'
						}
					},
					emphasis: {
						label: {
							show: false
							// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
						},
						nodeStyle : {
							//r: 30
						},
						linkStyle : {}
					}
				},
				useWorker: false,
				minRadius : 15,
				maxRadius : 25,
				symbolSize:18,
				gravity:2.1,
				scaling: 1.8,
				roam: 'move',
				nodes:_d.nodes,
				links : _d.links
			}
		]
	};
	var ecConfig = require('echarts/config');
	 function focus(param) {
					var option = myChart.getOption();
					var data = param.data;
					//判断节点的相关数据是否正确
					if (data != null && data != undefined) {
						if (data.url != null && data.url != undefined) {
							//根据节点的扩展属性url打开新页面
							sessionStorage.setItem('name',data.name);
							window.open(data.url);
						}
					}
				}
	myChart.on(ecConfig.EVENT.CLICK, focus)

	myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
		console.log(myChart.chart.force.getPosition());
	});
			
			// 为echarts对象加载数据 
			myChart.setOption(option); 
		}
	);
}