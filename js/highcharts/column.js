var column=function (
						container,/*容器*/
						colorlist,/*颜色表*/
						categorylist,/*类别列表*/
						optionlist,/*配置表(
											type: column,
											LegendEnable:是否显示标签
											LegendLayout:Legend水平或垂直（horizontal,vertical）
											LegendAlign:Legend水平方向位置（left,center,right）
											LegendVerticalAlign:Legend垂直方向位置（top,middle,bottom）
											Legendx:确定以上之后相对的x位移
											Legendy:确定以上之后相对的y位置
											yText:y轴标签内容
											yLabels:y轴刻度尺是否显示
											pointPadding:柱状体之间的间距)
											unit:提示框数据单位*/											
						data/*数据*/
						) 
	{
    Highcharts.setOptions({
        colors: colorlist
    });
    
    $(container).highcharts({
        title: {
            text: optionlist.title
        },
		chart: {
            type: optionlist.type,
			backgroundColor:"rgba(0,0,0,0)"
        },
		legend: {
			enabled:optionlist.LegendEnable,
            layout: optionlist.LegendLayout,
            align: optionlist.LegendAlign,
            verticalAlign: optionlist.LegendVerticalAlign,
            x: optionlist.Legendx,
            y: optionlist.Legendy
		},
		credits: {
			enabled: false
		},
        xAxis: {
            categories: categorylist,
			gridLineWidth:optionlist.gridLineWidthX
        },
        yAxis: {
            title: {
                text: optionlist.yText
            },
			labels: {
                enabled: optionlist.yLabels
            },
			gridLineWidth:optionlist.gridLineWidthY
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}'+ optionlist.unit+'</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: optionlist.pointPadding
            }
        },
        series: data
    });
};		