
require(['config'],function(){
	require(['jquery','common','gdszoom','list','Carousel','Carousel4','Carouseltab3'],function($){
		// console.log($);
		// $('#tab1').Carousel({
		// 		imgs:['../img/1.jpg','../img/2.jpg','../img/3.jpg',
		// 		'../img/4.jpg','../img/5.jpg'
		// 		],
		// 		width:226,height:241,
		// 		type:'horizontal',
		// 		page:true
		// 	})
		var $phone;
		var $psw;
			// 页面刷新/重新打开，显示欢迎登录界面
		// 获取cookie：document.cookie
		var cookies = document.cookie;
		console.log(cookies);

		if(cookies.length>0){
			cookies = cookies.split('; ');

			// 遍历cookies，拿到想要的cookie
			cookies.forEach(function(item){
				// 把cookie拆分成name,value
				var arr = item.split('=');

				if(arr[0] === 'phone'){
					$phone = arr[1];
				}else if(arr[0] === 'password'){
					$psw = arr[1];
				}
			});

			showStaus(true);
		}

		function showStaus(isLogin){

			// 登录
			// 显示登录信息
			// 隐藏表单
			if(isLogin){
				// 根据cookie信息显示页面状态
				// 显示欢迎界面
				$('#spWelcome').html('您好，欢迎'+$phone+'来新蛋购物！<button id="btnn">退出</button>');

				// 隐藏表单
				$('.up').css({display:'none'});
			}

			// 退出
			// 显示表单
			else{
				$('.up').css({display:'inline-block'});
				$('#spWelcome').html('您好，欢迎来新蛋购物！');
			}
			
		}


		// 退出
		// 删除cookie
		// 利用设置过期时间达到删除的效果。
		$('#btnn').on('click',function(){
				var now = new Date();
				now.setDate(now.getDate()-8);

				document.cookie = 'phone=null;expires=' + now;
				document.cookie = 'password=null;expires=' + now;


				showStaus();
			})



		// 用于保存当前商品信息
			var currentGoods;

			// 用于保存浏览记录
			// var historyList = [];

			// 先获取cookie
			var cookie = document.cookie.split('; ');
			cookie.forEach(function(item){
				var arr = item.split('=');
				if(arr[0] === 'currentGoods'){
					currentGoods = JSON.parse(arr[1]);
				}
				// else if(arr[0] === 'historyList'){
				// 	historyList = JSON.parse(arr[1]);
				// }
			});
			console.log(currentGoods);
			// console.log(historyList);


			// 如果当前商品已经存在historyList，则删除（放置重复）
			// for(var i=0;i<historyList.length;i++){
			// 	if(historyList[i].guid === currentGoods.guid){
			// 		historyList.splice(i,1);
			// 		break;
			// 	}
			// }

			// historyList.unshift(currentGoods);
			// console.log(historyList);
			// 重新把history写回cookie
			// 3天有效期
			// var now = new Date();
			// now.setDate(now.getDate()+3);
			// document.cookie = 'historyList=' + JSON.stringify(historyList) + ';expires=' + now;
			// console.log(JSON.stringify(historyList));
			// console.log(document.cookie);
			// 把当前商品信息写入goods
			// var img = document.createElement('img');
			// img.src = currentGoods.imgurl;
			$('.th2').html(currentGoods.name)
			// h1.innerText = currentGoods.title;

			// var price = document.createElement('p');
			// price.className = 'price';
			// price.innerText = currentGoods.price;

			// goods.appendChild(img);
			// goods.appendChild(h1);
			// goods.appendChild(price);
			// 
			$('#tab1').Carouseltab3({
				imgs1:[
				currentGoods.imgs1,
				currentGoods.imgs2,
				currentGoods.imgs3,
				currentGoods.imgs4,
				currentGoods.imgs5,
				currentGoods.imgs6,
				currentGoods.imgs7
				],
				imgs2:[
				currentGoods.imgs1,
				currentGoods.imgs2,
				currentGoods.imgs3,
				currentGoods.imgs4,
				currentGoods.imgs5,
				currentGoods.imgs6,
				currentGoods.imgs7
				],

				imgs3:[
				currentGoods.imgs1,
				currentGoods.imgs2,
				currentGoods.imgs3,
				currentGoods.imgs4,
				currentGoods.imgs5,
				currentGoods.imgs6,
				currentGoods.imgs7
				],

				imgs4:[
				currentGoods.imgs1,
				currentGoods.imgs2,
				currentGoods.imgs3,
				currentGoods.imgs4,
				currentGoods.imgs5,
				currentGoods.imgs6,
				currentGoods.imgs7
				],
				width:450,height:338,
				
				type:'show',
				page:true,	
			});
		
		// $('#tab1').Carouseltab3({
		// 		imgs1:['../img/S6C-033-1P6d.jpg',
		// 		'../img/S6C-033-1P6_02.jpg',
		// 		'../img/S6C-033-1P6_03.jpg',
		// 		'../img/S6C-033-1P6_04.jpg',
		// 		'../img/S6C-033-1P6_05.jpg',
		// 		'../img/S6C-033-1P6_06.jpg',
		// 		'../img/S6C-033-1P6_07.jpg',
		// 		],
		// 		imgs2:['../img/S6C-033-1P6d.jpg',
		// 		'../img/S6C-033-1P6_02.jpg',
		// 		'../img/S6C-033-1P6_03.jpg',
		// 		'../img/S6C-033-1P6_04.jpg',
		// 		'../img/S6C-033-1P6_05.jpg',
		// 		'../img/S6C-033-1P6_06.jpg',
		// 		'../img/S6C-033-1P6_07.jpg',
		// 		],

		// 		imgs3:['../img/S6C-033-1P6d.jpg',
		// 		'../img/S6C-033-1P6_02.jpg',
		// 		'../img/S6C-033-1P6_03.jpg',
		// 		'../img/S6C-033-1P6_04.jpg',
		// 		'../img/S6C-033-1P6_05.jpg',
		// 		'../img/S6C-033-1P6_06.jpg',
		// 		'../img/S6C-033-1P6_07.jpg',
		// 		],

		// 		imgs4:['../img/S6C-033-1P6d.jpg',
		// 		'../img/S6C-033-1P6_02.jpg',
		// 		'../img/S6C-033-1P6_03.jpg',
		// 		'../img/S6C-033-1P6_04.jpg',
		// 		'../img/S6C-033-1P6_05.jpg',
		// 		'../img/S6C-033-1P6_06.jpg',
		// 		'../img/S6C-033-1P6_07.jpg',
		// 		],
		// 		width:450,height:338,
				
		// 		type:'show',
		// 		page:true,	
		// 	});


			$('#erweima').on('mouseenter',function(){
				$('#erweima2').css({display:'block'})
			});

			$('#erweima2').on('mouseleave',function(){
				$('#erweima2').css({display:'none'})
			});

			var res=0;

			$('.minus').on('click',function(){
				res--;
				if(res>0){
				$('.num').val(res);
			}else{ 
				res=0;
				$('.num').val(res);
			}
			});

			$('.plus').on('click',function(){
				res++;
				if(res<3){
				$('.num').val(res);
			}else{ 	
				res=3;
				$('.num').val(res);
			}
			});



			
	


	});
});
