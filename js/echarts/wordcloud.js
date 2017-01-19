var wordCloud = function(option){
	var _container = option.container;
	var _d = option.data;
	// ·������
	require.config({
		paths: {
			echarts: '../js/echarts/'
		}
	});
	
	// ʹ��
	require(
		[
			'echarts',
			'echarts/chart/wordCloud', // ʹ����״ͼ�ͼ���barģ�飬��������
		],
		function (ec) {
			// ����׼���õ�dom����ʼ��echartsͼ��
			var myChart = ec.init(document.getElementById(_container)); 
		   

	function createRandomItemStyle() {
		return {
			normal: {
				color: 'rgb(' + [
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160)
				].join(',') + ')'
			}
		};
	}

	option = {

		title: {
			text: '',
			link: ''
		},
		tooltip: {
			show: true,
		},
		series: [{
			name: 'Google Trends',
			type: 'wordCloud',
			size: ['80%', '80%'],
			textRotation : [0, 45, 90, -45],
			textPadding: 0,
			autoSize: {
				enable: true,
				minSize: 14
			},
			data: _d.word_cloud
		}]
	};
				
	
			// Ϊecharts������������ 
			myChart.setOption(option); 
		}
	);
}