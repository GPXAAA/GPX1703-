;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.Carousel4 = function(options){

		// 默认参数
		var defaults = {
			width:960,//ok
			height:239,//ok
			autoPlay:true,//ok
			small:false,
			buttons:true,//ok
			page:true,//ok
			duration:3000,//ok
			index:0,//ok
			type:'vertical',//vertical,horizontal,fade,show
			seamless:false
		}



		// var opt = Object.assign({},defaults,options);
		var opt = $.extend({},defaults,options);


		return this.each(function(idx,ele){
			var $self = $(ele);

			var len = opt.imgs.length;

			// 添加特定类名
			$self.addClass('Carousel4');

			// 定义宽高
			$self.css({
				width:opt.width*4+240,
				height:opt.height+131
			})

			// 生成大图
			var $ul = $('<ul/>');

			$.each(opt.imgs,function(idx,url,txt){
				$('<li/>').css({height:opt.height,width:opt.width}).html(`<img src="${url}">`).appendTo($ul);
			});
			$.each(opt.txt,function(idx,txt){
				$('<li/>').html(`<a href=" ">${txt}</a>`).appendTo($ul);
			});
			$.each(opt.txt1,function(idx,txt1){
				$('<li/>').html(`<p>${txt1}</p>`).appendTo($ul);
			});
			$.each(opt.tub,function(idx,tub){
				$('<li/>').html(`<img src="${tub}">`).addClass('c4').appendTo($ul);
			});
			$.each(opt.tub,function(idx,tub){
				$('<li/>').html(`<a href=" ">抢购</a>`).addClass('c5').appendTo($ul);
			});
			
			

			$ul.appendTo($self);

			// 水平排列
			if(opt.type === 'horizontal'){
				$ul.width(opt.width*len+985);
				$ul.addClass('horizontal');
			}

			// 默认显示图片
			var index = opt.index;
			

			// 生成分页
			if(opt.page){
				var $page = $('<div/>').addClass('page1');
				for(var i=1;i<=len;i++){
					var $span = $('<span/>').text(i);

					// 给第一个span添加高亮
					if(i==index+1){
						$span.addClass('active');
					}
					$span.appendTo($page);
				}
				$page.appendTo($self);
			}
			

			// // 隐藏除第一张以外的所有图片（透明度改变）
			// for(var i=1;i<$('li').length;i++){
			// 	animate($('li')[i],{opacity:0});
			// }

			// var index = 0;

			// // 上一张图片
			// var lastIdx = 0;


			// var len = $('li').length;

			// var timer = setInterval(()=>{
			// 	index++;
			// 	showPic();
			// },3000);


			// function showPic(){
			// 	if(index>len-1){
			// 		index = 0;
			// 	}

			// 	// 把当前图片透明度改成1
			// 	animate($('li')[index],{opacity:1});

			// 	// 把上一张透明度改成0
			// 	animate($('li')[lastIdx],{opacity:0});

			// 	// 更新lastIdx值
			// 	lastIdx = index;


			// 前后按钮
			if(opt.buttons){
				$('<div/>').addClass('prev').appendTo($self);
				$('<div/>').addClass('next1').html('换一批').appendTo($('#trun'));
			}
			


			var timer;

			// 上一页下一页
			$('body').on('click','.prev1',function(){
				index=0;
				showPic();
			}).on('click','.next1',function(){
				index+=5.2;
				showPic();
				
			})

			// 移入移出
			// .on('mouseenter',function(){
			// 	clearInterval(timer);
			// }).on('mouseleave',function(){
			// 	timer = setInterval(autoPlay,opt.duration);
			// })


			// 点击页码
			.on('click','.page1 span',function(){
				index = $(this).index();

				showPic();
			})

			console.log($(this));
			console.log($(this).index());

			// 自动轮播
			// if(opt.autoPlay){
			// 	$self.trigger('mouseleave');
			// }

			// function autoPlay(){
			// 	index+=5.2;
			// 	showPic();
			// }

			function showPic(){
				// 到达最后一张时，重新回到第一张
				console.log(index);
				if(index > 20){
					index = 0;
				}else if(index<0){
					index = len-1;
				}

				// 滚动显示每一张图片
				var obj;

				if(opt.type === 'horizontal'){
					obj = {left:-index*opt.width};
				}else{
					obj = {top:-index*opt.height};
				}

				$ul.stop().animate(obj);

				// 高亮分页
				// if(opt.page){

				// 	$page.children().eq(index).addClass('active').siblings().removeClass();
				// }
			}
		});

		// return this;
	}

	// $.fn.lxTab = function(){}
	// $.fn.lxPopover = function(){}

	// 系列插件
	// $.fn.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// 全局插件
	// $.lxTab = function(){

	// }

	// 系列插件
	// $.extend({
	// 	lxCarousel:function(){},
	// 	lxPopover:function(){},
	// 	lxTab:function(){}
	// });

	// $.lxTab()
})(jQuery);


//$('#lbt').lxCarousel();