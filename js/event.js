var o = {
		title:"title",
		titleStyle:{
			top:"30%",
			left:0,
			width:"6%",
			height:"100%"
		},
		contentDiv:["content1","content2","content3"],
		show_name:["事件关键词","关联人数趋势","微博数量趋势"],
	}
var s = new scroll(o);

/*load info*/
var t = {
	"事件详情":"额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额额",
	"事件时间":"2000-01-01",
	"事件发布人":"用户1、用户1、用户1、用户1、用户1、用户1、用户1、用户1",
	"事件链接":"adffasf/afafafasfsf/fafafsfa/",
	"影响力":"10",
}

for(var key in t){
	var tempDiv = $("<div class='event-infolist'>"+key+": "+ t[key] +"</div>");
	$("#baseinfo").append(tempDiv);
}

/*load column*/
var categorylist=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

var colorlist=['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'];

var o = {                                      
				type:"column",                   	/*line  column  area*/
				
				LegendEnable:  true ,            	/*是否显示标签*/
				LegendLayout:'horizontal',          /*Legend水平或垂直（horizontal,vertical）*/
				LegendAlign:'center',               /* Legend水平方向位置（left,center,right）*/
				LegendVerticalAlign:'bottom',     	/* Legend垂直方向位置（top,middle,bottom）*/
				Legendx: 0,                         /*确定以上之后相对的x位移*/
				Legendy: 0 ,                        /*确定以上之后相对的y位置*/
				
				yText:'Rainfall (mm)',              /*y轴标签*/
				yLabels:true,                       /*y轴刻度尺是否显示*/
				
				gridLineWidthX:0,                   /*x轴网格线宽度*/
				gridLineWidthY:1,                   /*y轴网格线宽度*/
				
				pointPadding:0.1 ,                  /*柱状体之间的间距*/
				unit:'mm' ,                          /*提示框数据单位*/
				
				title:'关联人数趋势'
};
var data=[{
            name: 'Beijing',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }];

column('#people',colorlist,categorylist,o,data);
o.title = "微博数量趋势";
data.splice(1,2);
column('#weibo',colorlist,categorylist,o,data);

/*load wordcloud*/
var o = {
	"container":"keyword"
};
var w = new wordCloud(o);
