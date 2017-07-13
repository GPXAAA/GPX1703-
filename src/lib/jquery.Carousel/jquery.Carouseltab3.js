;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.Carouseltab3 = function(options){

		// 默认参数
		var defaults = {
			width:450,//ok
			height:338,//ok
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

			// var len = opt.imgs.length;
			// var len2 = opt.imgs2.length;
			// var len3 = opt.imgs3.length;

			// 添加特定类名
			$self.addClass('Carouseltab3');

			// 定义宽高
			$self.css({
				width:opt.width,
				height:opt.height
			})

			// 生成大图
			var $ul = $('<ul/>').addClass('ul1');
			var $ul3 = $('<ul/>').addClass('ul3');
			var $ul4 = $('<ul/>').addClass('ul4');

			$.each(opt.imgs1,function(idx,url){
				$('<li/>').html(`<img src="${url}">`).addClass('t1').appendTo($ul);

			});

			$.each(opt.imgs3,function(idx,url){
				$('<li/>').html(`<img src="${url}">`).addClass('t3').appendTo($ul3);
			});

			$.each(opt.imgs4,function(idx,url){
				$('<li/>').html(`<img src="${url}">`).addClass('t4').appendTo($ul4);
			});
			$('<span/>').html(`x`).addClass('close').appendTo($self);

			

			


			
			$ul.appendTo($self);
			$ul3.appendTo($self);
			$ul4.appendTo($self);

			// 水平排列
			if(opt.type === 'horizontal'){
				$ul.width(opt.width*len);
				$ul.addClass('horizontal');
			}
			// var tab=$('.tab');
			// console.log(tab.length);

		
			
			// var len = opt.tab.length;
		

			// 默认显示图片
			var index = opt.index;
			

			// 生成分页
			if(opt.page){
				var $page = $('<div/>').addClass('page');
				var $page0 = $('<div/>').addClass('page0');
				// for(var i=1;i<=3;i++){
				// 	var $span = $('<span/>').text(i);
				$.each(opt.imgs2,function(idx,tex){
				var $span = $('<span/>').html(`<img src="${tex}" alt="" />`);
			
					// 给第一个span添加高亮
					if(tex==index+1){
						$span.addClass('active');
					}

					$span.appendTo($page0);
					$page0.appendTo($page);
			});
				$page.appendTo($self);
			}
			



			var timer;

			if(opt.buttons){
				$('<div/>').addClass('prev1').appendTo($self);
				$('<div/>').addClass('next1').appendTo($self);
			}

			if(opt.buttons){
				$('<div/>').addClass('prev').appendTo($self);
				$('<div/>').addClass('next').appendTo($self);
			}



			// 上一页下一页
			$self.on('click','.prev1',function(){
				$page0.animate({left:-300});
				
				// showPic();
			}).on('click','.next1',function(){
				$page0.animate({left:0});
				// showPic();
			})


			$self.on('click','.prev',function(){
				index--;
				showPic();
			}).on('click','.next',function(){
				index++;
				showPic();
			})


			// 移入移出
			// .on('mouseenter',function(){
			// 	clearInterval(timer);
			// }).on('mouseleave',function(){
			// 	timer = setInterval(autoPlay,opt.duration);
			// })


			// 点击页码
			.on('mouseenter','.page span',function(){
				index = $(this).index();
				showPic();
			})
			var res=0;
			
			$('.ul1').on('click',function(){
				
				console.log(res);
				if(res<2 ){
				$('.ul3').css({display:'block'}).siblings().css({display:'none'});
				$('.text').css({display:'none'});
				$('.close').css({display:'block'});
				$('.prev').css({display:'block'});
				$('.next').css({display:'block'});
				res+=2;
				
				console.log(res);
				console.log(666);
				}
				// $('.ul1').css({display:'none'};
			})
		
			// console.log(777);
			// console.log(res);
			
				$('.ul3').on('click',function(){
				
				if(res>=2){
					
					console.log($('.text'));
					console.log(res);
				$('.ul4').css({display:'block'});
				$('.close').css({display:'block'});
				$('.prev').css({display:'block'});
				$('.next').css({display:'block'});
				$('.text').css({display:'none'});
				res+=2;
			
				}
			})

				$('.ul4').on('click',function(){
				
				if(res>=4){
					res-=2;
					console.log($('.text'));
					console.log(res);
				$('.ul3').css({display:'block'});
				$('.ul4').css({display:'none'});
				$('.close').css({display:'block'});
				$('.prev').css({display:'block'});
				$('.next').css({display:'block'});
				$('.text').css({display:'none'});
			
				}
			})


				$('.close').on('click',function(){
				
				console.log(4333);
				if(res>0){
					console.log($('.text'));
					// res-=2;
				$('.ul1').css({display:'block'});
				$('.page').css({display:'block'});
				$('.prev1').css({display:'block'});
				$('.next1').css({display:'block'});
				$('.ul4').css({display:'none'});
				$('.ul3').css({display:'none'});
				$('.prev').css({display:'none'});
				$('.next').css({display:'none'});
				$('.close').css({display:'none'});
				$('.text').css({display:'block'});
				res-=2;
			}
				
			})


			
			
			




			// 自动轮播
			// if(opt.autoPlay){
			// 	$self.trigger('mouseleave');
			// }

			function autoPlay(){
				index++;
				showPic();
			}

			function showPic(){
				// 到达最后一张时，重新回到第一张
				if(index > 7){
					index = 0;
				}else if(index<0){
					index = 7;
				}

				// 滚动显示每一张图片
				var obj;

				// 水平
				if(opt.type === 'horizontal'){
					obj = {left:-index*opt.width};
				}
				//1
				// 淡入淡出
				else if(opt.type==='fade'){
					
					$ul.find('li').css({position:'absolute',left:0,top:0});
					$ul.children().eq(index).fadeIn().siblings().fadeOut();

				}
				// 切换
				else if(opt.type==='show'){
					$ul.children().eq(index).css({display:'block'}).siblings().css({display:'none'})
					clearInterval(timer);

					$('.ul3').children().eq(index).css({display:'block'}).siblings().css({display:'none'})
					clearInterval(timer);

					$('.ul4').children().eq(index).css({display:'block'}).siblings().css({display:'none'})
					clearInterval(timer);

					
					// $ul.find('img').attr('src','img/00'+index+'.jpg')
				}
				//1

				//滚动
				else{
					obj = {top:-index*opt.height};
				}
				$ul.stop().animate(obj);

				// 高亮分页
				if(opt.page){

					$page.children().eq(index).addClass('active').siblings().removeClass();
				}
			}
		});

		// return this;
	}


})(jQuery);

