var pageurl=window.location.href.toLowerCase();


var map;
function createmap()
{
	if($("#map").length!=1)return false;
	//$("#map").css("height",windown_h+"px");
	map = new BMap.Map("map");
	var point = new BMap.Point(113.661994,22.907023);
	map.centerAndZoom(point,19);
	
	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	map.addControl(top_left_control);        
	map.addControl(top_left_navigation);
	//
	map.addEventListener("click", function(e){
		map.enableScrollWheelZoom(true);
	})
	map.addEventListener("mouseout", function(e){
		map.disableScrollWheelZoom();
	})	

var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
	'<p style="margin-bottom:5px;">地址：东莞市厚街镇家具大道名家居世博园8号馆F05-11</p><p style="margin-bottom:5px;">电话：刘总：18927398934</p><p style="margin-bottom:5px;">邮箱：343847794@qq.com</p></div>';

    //创建检索信息窗口对象
	var marker1 = new BMap.Marker(new BMap.Point(113.661994,22.907023));
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "东莞贝莱国际家居设计有限公司",      //标题
			width  : 450,             //宽度
			height : 110,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    	marker1.addEventListener("click", function(e){
	    searchInfoWindow.open(marker1);
    })
    map.addOverlay(marker1); //在地图中添加marker
	marker1.setAnimation(BMAP_ANIMATION_BOUNCE);
}
createmap();



var china;
function createchina()
{
	if($("#china").length!=1)return false;
	china = new BMap.Map("china");
	var point = new BMap.Point(113.661994,22.907023);
	china.centerAndZoom(point,19);
	
	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	china.addControl(top_left_control);        
	china.addControl(top_left_navigation);
	//
	china.addEventListener("click", function(e){
		china.enableScrollWheelZoom(true);
	})
	china.addEventListener("mouseout", function(e){
		china.disableScrollWheelZoom();
	})	


	//var point = new BMap.Point(114.330608,22.905274);
	var marker = new BMap.Marker(point);  // 创建标注
	china.addOverlay(marker);              // 将标注添加到地图中
	var opts = {
	  width : 300,     // 信息窗口宽度
	  height: 120,     // 信息窗口高度
	  title : '<h3 style="margin-bottom:5px;">东莞贝莱国际家居设计有限公司</h3>' , // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	  message:""
	}
	var infoWindow = new BMap.InfoWindow('<p>地址：东莞市厚街镇家具大道名家居世博园8号馆F05-11</p><p>电话：刘总：18927398934</p><p>传真：0752-7236688</p><p>邮箱：343847794@qq.com</p>', opts);  // 创建信息窗口对象 
	marker.addEventListener("click", function(){          
		china.openInfoWindow(infoWindow,point); //开启信息窗口
	});


/*var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
	'<p style="margin-bottom:5px;">地址：东莞市厚街镇家具大道名家居世博园8号馆F05-11</p><p style="margin-bottom:5px;">电话：刘总：18927398934</p><p style="margin-bottom:5px;">传真：0752-7236688</p><p style="margin-bottom:5px;">邮箱：343847794@qq.com</p></div>';

    //创建检索信息窗口对象
	var marker1 = new BMap.Marker(new BMap.Point(113.661994,22.907023));
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(china, content, {
			title  : "东莞贝莱国际家居设计有限公司",      //标题
			width  : 450,             //宽度
			height : 110,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    	marker1.addEventListener("click", function(e){
	    searchInfoWindow.open(marker1);
    })
    china.addOverlay(marker1); //在地图中添加marker
	marker1.setAnimation(BMAP_ANIMATION_BOUNCE);*/
}
createchina();