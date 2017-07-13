
require(['config'],function(){
	require(['jquery','common'],function($){
		// console.log($);
		console.log(666);
			
		$.ajax({
			url:'../api/user.php',
			dataType:'json',
			success:res=>{

				console.log(res.length);


			for(var i=0;i<res.length-1;i++){
				var ph=res[i]
				console.log(ph.phone);
				// console.log(res[1].phone);
				// console.log(res[5].phone);
				$('.btn').on('click',()=>{
					console.log(111);
			console.log($('#phone').val())
			if ($('#phone').val()==ph.phone){
				$('#output1').html('手机号正确');
				console.log(222);

				if ($('#password').val()==ph.password){
				$('#output2').html('密码正确');
				console.log(333);
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


			// showStaus(true);
		


			}else{
				$('#output2').html('密码错误');
				console.log(444);
			}
				}else{
				$('#output1').html('手机号未验证');
				console.log(444);
			}
		
			})
		}
		}
		
});
});
});