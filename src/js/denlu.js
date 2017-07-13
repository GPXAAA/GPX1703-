
require(['config'],function(){
	require(['jquery','common'],function($){
		// console.log($);
		// $('h1').css('border','1px solid #ddd');
		$.ajax({
			url:'api/user.php',
			dataType:'json',
			success:res=>{
				console.log(res);
			}
		});
	});
});
