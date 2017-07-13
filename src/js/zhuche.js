
require(['config'],function(){
	require(['jquery','common'],function($){
		// console.log($);
		// 
		var i=randomNum(1000,9999);
		console.log(i);
		$('<h2/>').html(`${i}`).appendTo($('#output2'));
		console.log($('#yzm').val());
		
		
		$('#btn').on('click',()=>{

      	var ret =/^[\d]{5,20}$/;
		if(ret.test($("#phone").val())){
			$('#output1').html('手机号合法');
			if($('#yzm').val()==i){

				$('#output3').html('验证码正确');

				$('.top2-2').css({display:'none'});
				$('.top2-3').css({display:'block'});
				$('.top2-4').css({display:'none'});

				// $('#top2-22').find('img').css({top:-40});
			}else{
		$('#output3').html('验证码错误');
	}
	}else{
            $('#output1').html('手机号不合法');
            };

          });

		$('#password').on('keydown',()=>{
		
		var g1=/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)(?![\da-zA-Z]+$)(?![\d!#$%^&*]+$)(?![a-zA-Z!#$%^&*]+$).{6,}$/;
		var z1=/^(?![\d]+$)(?![a-zA-Z]+$)([\da-zA-Z]+){6,}$/;
		var d1=/^[0-9]{6,}$/;

		if(z1.test($('#password').val())){
			$('#output4').html('密码强度：一般');
			
		}else if(d1.test($('#password').val())){
			$('#output4').html('密码强度：弱');
			
			
		}else if(g1.test($('#password').val())){ 	
			$('#output4').html('密码强度：强');
			$('.top2-2').css({display:'none'});
			$('.top2-3').css({display:'none'});
			// $('.top2-4').css({display:'none'});
		}
	});

		$('#btn2').on('click',()=>{

		if($('#password').val()==$('#password2').val()){
				$('#output5').html('输入密码一致');
				$('.top2-2').css({display:'none'});
				$('.top2-3').css({display:'none'});
				$('.top2-4').css({display:'block'});

				}else{
		$('#output5').html('输入密码不一致');
	}
	});


		$('#btn3').on('click',()=>{


			$.ajax({
				url:'../api/adduser.php',
				// dataType:'json',
				
				data:{
					email:$('#email').val(),
					password:$('#password').val(),
					phone:$('#phone').val()
				},
				success:res=>{
				console.log(res);

			}

		});
			location.href = '../index.html';
	
			});

	// 		$('#top2-22').find('img').css({top:-40});
	// 		}else{
	// 	$('#output3').html('验证码错误');
	// }
	// }else{
 //            	$('#output1').html('手机号不合法');
 //            };


		})
		
	

		

		


	
	});

