
require(['config'],function(){
	require(['jquery','common'],function($){
		// console.log($);

		
		$('#btn').on('click',()=>{
      	
			// if($('#password').val()==$('#password2').val()){
			// 	$('#output3').html('输入密码一致');
			$.ajax({
				url:'../api/adduser.php',
				// dataType:'json',
				
				data:{
					// name:$('#username').val(),
					// password:$('#password').val(),
					// phone:$('#phone').val()
				},
				success:res=>{
				console.log(res);

			}

		});
			

			location.href = '../index.html';

	// 		}else{
	// 	$('#output3').html('输入密码不一致');
	// }
	

		})
		
	

		

		


	
	});
});
