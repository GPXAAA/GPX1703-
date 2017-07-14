
require(['config'],function(){
	require(['jquery','common'],function($){
		// console.log($);
		// 
			// 页面刷新/重新打开，显示欢迎登录界面
		// 获取cookie：document.cookie
		var $phone;
		var $psw;
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


		var $tbody = $('.datalist tbody');

			

			$.each(currentGoods,function(idx,item){
				// 创建元素
				$('<tr/>').html(`
					<td><input type="checkbox" /></td>
					<td>${idx+1}</td>
					<td>${item.img}</td>
					<td>${item.name}</td>
					<td>${item.money}</td>
					<td><button class="del">&times;</button></td>
				`).appendTo($tbody);
			});

			// 全选
			$('#all').click(function(){
			


				// 简洁
				// $tbody.find(':checkbox').prop('checked',$('#all').prop('checked'));

				$tbody.find(':checkbox').prop('checked',this.checked);

				// 选中行效果
				$tbody.children()[this.checked ? 'addClass' : 'removeClass']('selected');
				
			});


			// 点击任意位置选中当前行
			$tbody.on('click','td',function(){
				var $currentTr = $(this).parent();

				$currentTr.toggleClass('selected')

				.find(':checkbox').prop('checked',$currentTr.hasClass('selected'));
			})

			// 删除行
			.on('click','.del',function(){
				// 强烈建议使用的获取父元素的方法:closest
				var $currentTr = $(this).closest('tr');

				$currentTr.remove();
			})



		
		
		

		
});
});
