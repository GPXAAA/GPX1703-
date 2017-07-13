
require(['config'],function(){
	require(['jquery','common'],function($){
		// console.log($);
		$('#password').on('keydown',()=>{
		
		var g1=/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)(?![\da-zA-Z]+$)(?![\d!#$%^&*]+$)(?![a-zA-Z!#$%^&*]+$).{6,}$/;
		var z1=/^(?![\d]+$)(?![a-zA-Z]+$)([\da-zA-Z]+){6,}$/;
		var d1=/^[0-9]{6,}$/;

		if(z1.test($('#password').val())){
			$('#output1').html('密码强度：一般');
			
		}else if(d1.test($('#password').val())){
			$('#output1').html('密码强度：弱');
			
			
		}else if(g1.test($('#password').val())){ 	
			$('#output1').html('密码强度：强');
		
		}
	});
		
		
		
		$('#btn').on('click',()=>{
      		
			if($('#password').val()==$('#password2').val()){
				$('#output3').html('输入密码一致');
			$.ajax({
				url:'../api/adduser.php',
				// dataType:'json',
				
				data:{
					// name:$('#username').val(),
					password:$('#password').val(),
					// phone:$('#phone').val()
				},
				success:res=>{
				console.log(res);

			}

		});
			

			location.href = '../html/zhuche3.html';

			}else{
		$('#output3').html('输入密码不一致');
	}
	

		})
		
	

		

		


	
	});
});
