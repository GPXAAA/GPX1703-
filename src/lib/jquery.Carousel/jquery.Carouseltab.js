;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.Carouseltab = function(options){

		// 默认参数
		var defaults = {
			width:960,//ok
			height:270,//ok
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
			$self.addClass('Carouseltab');

			// 定义宽高
			$self.css({
				width:opt.width,
				height:opt.height
			})

			// 生成大图
			var $ul = $('<ul/>');
			var $li1= $('<li/>').addClass('li1 tab');
			var $li2= $('<li/>').addClass('li2 tab');
			var $li3= $('<li/>').addClass('li3 tab');
			var $li4= $('<li/>').addClass('li4 tab');

			var $ul01 = $('<ul/>').addClass('tb01');
			var $ul02 = $('<ul/>').addClass('tb02');
			var $ul03 = $('<ul/>').addClass('tb03');
			var $ul04 = $('<ul/>').addClass('tb04');

			var $uljg1 = $('<ul/>').addClass('jg01');
			var $uljg2 = $('<ul/>').addClass('jg02');
			var $uljg3 = $('<ul/>').addClass('jg03');
			var $uljg4 = $('<ul/>').addClass('jg04');

			var $ul2 = $('<ul/>').addClass('tb2');
			var $ul3 = $('<ul/>').addClass('tb3');
			var $ul4 = $('<ul/>').addClass('tb4');



			$.each(opt.imgs1,function(idx,url){
				$('<li/>').html(`<a href=""><img src="${url}"></a>`).addClass('t1').appendTo($li1);
			});
			$li1.appendTo($ul);

			$.each(opt.imgs2,function(idx,url2){
				$('<li/>').html(`<a href=""><img src="${url2}"></a>`).addClass('t2').appendTo($li2);
			});
			$li2.appendTo($ul);

			$.each(opt.imgs3,function(idx,url3){
				$('<li/>').html(`<a href=""><img src="${url3}"></a>`).addClass('t3').appendTo($li3);
			});
			$li3.appendTo($ul);

			$.each(opt.imgs4,function(idx,url4){
				$('<li/>').html(`<a href=""><img src="${url4}"></a>`).addClass('t4').appendTo($li4);
			});
			$li4.appendTo($ul);


			$.each(opt.tub2,function(idx,tub2){
				$('<li/>').html(`<img src="${tub2}">`).addClass('tub1').appendTo($ul2);
			});
			$.each(opt.tub3,function(idx,tub3){
				$('<li/>').html(`<img src="${tub3}">`).addClass('tub2').appendTo($ul3);
			});
			$.each(opt.tub4,function(idx,tub4){
				$('<li/>').html(`<img src="${tub4}">`).addClass('tub3').appendTo($ul4);
			});
			// $li4.appendTo($ul);
			// 
			// 
			$.each(opt.text1,function(idx,text1){
				$('<li/>').html(`<a href="">${text1}</a>`).addClass('text1').appendTo($ul01);
			});
			$.each(opt.text2,function(idx,text2){
				$('<li/>').html(`<a href="">${text2}</a>`).addClass('text2').appendTo($ul02);
			});
			$.each(opt.text3,function(idx,text3){
				$('<li/>').html(`<a href="">${text3}</a>`).addClass('text3').appendTo($ul03);
			});
			$.each(opt.text4,function(idx,text4){
				$('<li/>').html(`<a href="">${text4}</a>`).addClass('text4').appendTo($ul04);
			});


			$.each(opt.jg1,function(idx,jg1){
				$('<li/>').html(`<span class="jgsp">${jg1}</span>`).addClass('jg1').appendTo($uljg1);
			});
			$.each(opt.jg2,function(idx,jg2){
				$('<li/>').html(`<span class="jgsp">${jg2}</span>`).addClass('jg2').appendTo($uljg2);
			});
			$.each(opt.jg3,function(idx,jg3){
				$('<li/>').html(`<span class="jgsp">${jg3}</span>`).addClass('jg3').appendTo($uljg3);
			});
			$.each(opt.jg4,function(idx,jg4){
				$('<li/>').html(`<span class="jgsp">${jg4}</span>`).addClass('jg4').appendTo($uljg4);
			});
			



			// $('.t1')
			$ul01.appendTo($li1);
			$ul02.appendTo($li2);
			$ul03.appendTo($li3);
			$ul04.appendTo($li4);

			$uljg1.appendTo($li1);
			$uljg2.appendTo($li2);
			$uljg3.appendTo($li3);
			$uljg4.appendTo($li4);


			$ul2.appendTo($li2);
			$ul3.appendTo($li3);
			$ul4.appendTo($li4);

			$ul.appendTo($self);

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
				// for(var i=1;i<=3;i++){
				// 	var $span = $('<span/>').text(i);
				$.each(opt.tex,function(idx,tex){
				var $span = $('<span/>').html(`${tex}`);
			
					// 给第一个span添加高亮
					if(tex==index+1){
						$span.addClass('active');
					}
					$span.appendTo($page);
			});
				$page.appendTo($self);
			}
			



			var timer;

			// 上一页下一页
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
				if(index > 3){
					index = 0;
				}else if(index<0){
					index = 3;
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

