
require(['config'],function(){
	require(['jquery','common'],function($){
		// console.log($);
		// 
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
				console.log(arr[1]);

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
				$('.top2-2').css({display:'none'});
				$('.top22x').css({display:'block'});
			}

			// 退出
			// 显示表单
			else{
				$('.top2-2').css({display:'block'});
				$('.top22x').css({display:'none'});
			}
			
		}

		
			
		$.ajax({
			url:'../api/user.php',
			dataType:'json',
			success:res=>{

				console.log(res.length);

			
				$('.btn').on('click',()=>{			
			// console.log($('#phone').val());
			// 	console.log(ph.phone);

			for(var i=0;i<res.length-1;i++){
				var ph=res[i]
				// console.log(ph);
					// console.log(ph.phone);
			if($('#phone').val()==ph.phone){
				$('#output1').html('手机号正确');
				// console.log($('#phone').val());
			

				// if($('#password').val()==ph.password){
				// $('#output2').html('密码正确');
				// console.log($('#password').val);
				console.log(ph.password);
				if($('#password').val()==ph.password){
					$('#output2').html('密码正确');
				// 	console.log(ph.password);


					$('.top2-2').css({display:'none'});
					$('.top22x').css({display:'block'});
				// location.href = '../index.html';

		// 绑定点击事件，实现登录状态改变
	
			var $phone = $('#phone').val();
			var $psw = $('#password').val();

			// 利用cookie保存登录信息
					// 设定有效期：添加expires参数
			// 七天有效期设置
			// 在当前事件基础上+7
			var now = new Date();
			now.setDate(now.getDate()+7);
			// now.setMinutes(now.getMinutes()+1);

			document.cookie = 'phone=' + $phone + ';expires=' + now;
			document.cookie = 'password=' + $psw + ';expires=' + now;


			}else{
				
				$('#output2').html('密码错误');
			}
				}else{
				$('#output1').html('手机号未验证');
				
			}
			}
		})
				}
		});


					

		$('.btn1').on('click',function(){
			console.log(666);
				location.href = 'index2.html';
			})	



		// 退出
		// 删除cookie
		// 利用设置过期时间达到删除的效果。
		$('.btn2').on('click',function(){
			console.log(777);
				var now = new Date();
				now.setDate(now.getDate()-8);

				document.cookie = 'phone=null;expires=' + now;
				document.cookie = 'password=null;expires=' + now;


				showStaus();
			})



		
		
		
		
		
		
});
});
		