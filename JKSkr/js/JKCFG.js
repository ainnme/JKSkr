// JOSN配置参数
// 你可以在此设置一些参数在其他地方可以获取到
var JKCFG={
	"TOP_NAV_NUM":12, //右侧导航的最大数目
	"MAX_SCREEN_PX":1000, //低于这个像素栅格布局不进行有间隔的处理
	"LEFT_MENU":[
		{
			"name":"新闻中心",
			"childs":[
				{
					"name":"综合新闻",
					"childs":[
						{"name":"国际新闻1"},
						{"name":"国际新闻2"},
						{"name":"国际新闻3"},
					]
				},
				{"name":"国际新闻","href":"www.baidu.com",'data-id':6},
				{"name":"国内新闻","href":"www.baidu.com",'data-id':8},
				{
					"name":"地方新闻",
					"childs":[
						{"name":"云南新闻","href":"www.yunnan.cn"},
						{"name":"安徽新闻","href":"www.anhui.cn"}
					]
				},
			]
		},
		{
			"name":"娱乐中心",
			"childs":[{"name":"娱乐新闻"}]

		},
		{
			"name":"访问官网","href":"www.jkskr.com"
		}
	]
}