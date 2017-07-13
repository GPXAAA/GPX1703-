
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

		
		$('#tab1').Carouseltab3({
				imgs1:['../img/S6C-033-1P6d.jpg',
				'../img/S6C-033-1P6_02.jpg',
				'../img/S6C-033-1P6_03.jpg',
				'../img/S6C-033-1P6_04.jpg',
				'../img/S6C-033-1P6_05.jpg',
				'../img/S6C-033-1P6_06.jpg',
				'../img/S6C-033-1P6_07.jpg',
				],
				imgs2:['../img/S6C-033-1P6d.jpg',
				'../img/S6C-033-1P6_02.jpg',
				'../img/S6C-033-1P6_03.jpg',
				'../img/S6C-033-1P6_04.jpg',
				'../img/S6C-033-1P6_05.jpg',
				'../img/S6C-033-1P6_06.jpg',
				'../img/S6C-033-1P6_07.jpg',
				],

				imgs3:['../img/S6C-033-1P6d.jpg',
				'../img/S6C-033-1P6_02.jpg',
				'../img/S6C-033-1P6_03.jpg',
				'../img/S6C-033-1P6_04.jpg',
				'../img/S6C-033-1P6_05.jpg',
				'../img/S6C-033-1P6_06.jpg',
				'../img/S6C-033-1P6_07.jpg',
				],

				imgs4:['../img/S6C-033-1P6d.jpg',
				'../img/S6C-033-1P6_02.jpg',
				'../img/S6C-033-1P6_03.jpg',
				'../img/S6C-033-1P6_04.jpg',
				'../img/S6C-033-1P6_05.jpg',
				'../img/S6C-033-1P6_06.jpg',
				'../img/S6C-033-1P6_07.jpg',
				],
				width:450,height:338,
				
				type:'show',
				page:true,	
			});

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
