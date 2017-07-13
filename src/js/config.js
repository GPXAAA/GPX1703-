// 配置
// 依赖
require.config({
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery-3.2.1',
		Carousel:'../lib/jquery.Carousel/jquery.Carousel',
		Carousel2:'../lib/jquery.Carousel/jquery.Carousel2',
		Carousel3:'../lib/jquery.Carousel/jquery.Carousel3',
		Carousel4:'../lib/jquery.Carousel/jquery.Carousel4',
		Carouseltab:'../lib/jquery.Carousel/jquery.Carouseltab',
		Carouseltab2:'../lib/jquery.Carousel/jquery.Carouseltab2',
		Carouseltab3:'../lib/jquery.Carousel/jquery.Carouseltab3',
		gdszoom:'../lib/jquery-gdsZoom/jquery.gdsZoom'
	},
	shim:{
		// gdszoom依赖jquery
		gdszoom:['jquery'],
		// lxCarousel依赖jquery
		Carousel:['jquery'],
		Carousel2:['jquery'],
		Carousel3:['jquery'],
		Carouseltab:['jquery'],
		Carouseltab2:['jquery'],
		Carouseltab3:['jquery'],
		Carousel4:['jquery']
	}
	// shim:{
	
	// 	// lxCarousel依赖jquery
	// 	lxCarousel:['jquery']
	// }



});