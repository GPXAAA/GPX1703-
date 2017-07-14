/*
	首页js文件
 */
require(['config'],function(){
	require(['jquery','gdszoom','list','Carousel','Carousel2','Carousel3','Carousel4','Carouseltab','Carouseltab2'],function(){
	
	$('#lbt1').Carousel2({
				imgs:['../src/img/771x245.jpg','../src/img/771x245 (1).jpg','../src/img/771x245 (2).jpg',
				'../src/img/771x245 (3).jpg','../src/img/771x245 (4).jpg','../src/img/771x245 (5).jpg',
				'../src/img/771x245 (6).jpg','../src/img/771x245 (7).jpg'
				],
				type:'fade',
				page:true,
				autoPlay:false
			});

		$('#lbt2').Carousel({
				imgs:['../src/img/1.jpg','../src/img/2.jpg','../src/img/3.jpg',
				'../src/img/4.jpg','../src/img/5.jpg'
				],
				width:226,height:241,
				type:'horizontal',
				page:true
			})

		$('#lbt3').Carousel3({
				imgs:['../src/img/A26-034-21J.jpg','../src/img/A36-125-DHV.jpg','../src/img/A28-21K-74L.jpg',
				'../src/img/A31-6G6-6E0_02.jpg','../src/img/A1I-184-02Z.jpg','../src/img/S8F-6F6-0KL.jpg',
				'../src/img/A65-809-15K.jpg','../src/img/A4S-2EQ-026_02.jpg'
				],
				txt:['Kingston 金士顿 HyperX Fury系列 240GB 固态硬盘-2.5',
				'hinkpad 12.5英寸笔记本电脑 X270 20HNA01HCD &#40;i7-7500U 内存8G 硬盘128G&#43;1T Win10&#41',
				'输入蛋券 SJ05 立减10元 手机直降折上折&#33',
				'Stevison 史蒂芬 CY-2028 养生壶 全自动加厚 玻璃煎药壶 多功能花茶器 煮茶壶',
				'2017款 Apple MacBook Air 13.3英寸笔记本电脑 银色  Core i5/8GB内存/256G硬盘',
				'香港直邮 FOREO LUNA mini2 露娜电动充电式洁面仪-樱桃红',
				'Macro 万家乐 K100B 燃气灶嵌入台式双灶具天然气灶',
				'锦元  经典紫檀 小叶紫檀18mm手串'
				],
				txt1:['<span class="price">&yen;629.00</span>',
				'<span class="price">&yen;9699.00</span>',
				'<span class="price">&yen;589.00</span>',
				'<span class="price">&yen;89.00</span>',
				'<span class="price">&yen;7488.00</span>',
				'<del class="mr10">&yen;1088.00</del><span class="price">&yen;898.00</span>',
				'<span class="price">&yen;428.00</span>',
				'<span class="price">&yen;998.00</span>'
				],

				width:144,height:108,
				type:'horizontal',
				page:false,
				autoPlay:true
			});

			$('#lbt4').Carousel4({
				imgs:['../src/img/A26-108-22V.jpg','../src/img/A10-5LF-6T7.jpg','../src/img/A28-800-749.jpg',
				'../src/img/A1I-184-01Z.jpg','../src/img/A6D-048-074.jpg','../src/img/S8F-5DJ-0GR.jpg',
				'../src/img/A04-112-66K_02.jpg','../src/img/S6C-033-1JR.jpg','../src/img/A6M-69J-02H_07.jpg',
				'../src/img/A28-800-777-04.jpg','../src/img/A24-053-3AK-03_02.jpg','../src/img/A29-6GJ-2Q6.jpg',
				'../src/img/A29-6GJ-2Q6.jpg','../src/img/A41-5LF-3DN_10.jpg','../src/img/A46-6CJ-2AY.jpg',
				'../src/img/A51-4FS-1G3.jpg',
				],
				txt:['Seagate 希捷 酷鱼 1T 台式机硬盘 ST1000DM010 - 7200转 SATA3 64M 7mm',
				'SONY 索尼 MDR-1000X Hi-Res无线 降噪 立体声 耳机 灰米色',
				'华为 Mate 9 MHA-AL00 香槟金 内存6GB&#43;128GB 移动联通电信4G手机 全网通 双卡双待华为 Mate9 金 128G 输入蛋券 SJ20 立减20元 手机直降折上折&#33',
				'Apple苹果 MacBook Air 13.3英寸笔记本 银色 MMGF2CH\/A &#40;Core i5 处理器\/8GB内存\/128GB SSD闪存',
				'微软&#40;Microsoft&#41;Surface Pro 4 二合一平板电脑 Intel Core i5 128G存储4G内存 12.3英寸 触控',
				'香港直邮 日本资生堂ANESSA安耐晒金装防晒霜 SPF50 60ML',
				'富士 FUJIFILM X-A10 &#40;XC 16-50II&#41; 微单电套机 经典银黑 小巧轻便 微距拍摄 180度翻折屏',
				'PHILIPS飞利浦 Fidelio  M1MKIIBO\/27 耳罩耳机带麦克风 黑橙色',
				'MOPS Avegant 高清VR眼镜一体电玩城和移动私人影院 智能穿戴硬件品牌',
				'华为 nova CAZ-AL10 香槟金&#40;白&#41; 内存4G&#43;64G 移动联通电信4G手机 全网通 双卡双待输入蛋券 SJ20 立减20元 手机直降折上折&#33',
				'TOSHIBA 东芝 新黑甲虫系列 2.5寸 2TB USB3.0 移动硬盘 黑色 HDTB320YK3CA',
				'TOMIC 特美刻 双层带滤网泡茶杯 水晶玻璃杯 便携车载水杯 1BSB1132 黑色 350ml',
				'TOMIC 特美刻 双层带滤网泡茶杯 水晶玻璃杯 便携车载水杯 1BSB1132 黑色 350ml',
				'索尼 SONY KD-55X8000E 55英寸 4K高清智能LED液晶平板电视 银色',
				'OPPLE 欧普照明 LED创意可充电触控台灯 护眼灯 MT-HY03T-71-百变金刚 绿色',
				'Midea 美的 空调 大1.5匹 定频冷暖 阿里云智能 KFR-35GW\/WCBD3&#64',
				],
				txt1:['<span class="price">&yen;296.00</span>',
				'<span class="price">&yen;2229.00</span>',
				'<span class="price">&yen;3579.00</span>',
				'<span class="price">&yen;5988.00</span>',
				'<span class="price">&yen;5499.00</span>',
				'<del class="mr10">&yen;228.00</del><span class="price">&yen;208.00</span>',
				'<span class="price">&yen;3299.00</span>',
				'<del class="mr10">&yen;1979.00</del><span class="price">&yen;339.00</span>',
				'<span class="price">&yen;3299.00</span>',
				'<span class="price">&yen;1549.00</span>',
				'<span class="price">&yen;579.00</span>',
				'<span class="price">&yen;149.00</span>',
				'<span class="price">&yen;149.00</span>',
				'<span class="price">&yen;5888.00</span>',
				'<span class="price">&yen;199.00</span>',
				'<span class="price">&yen;2399.00</span>',
				],
				tub:['../src/img/rqbk.png','../src/img/mxsp.png','../src/img/zj.png',
				'../src/img/mxsp.png','../src/img/rqbk.png','../src/img/jbj.png',
				'../src/img/rqbk.png','../src/img/rqbk.png','../src/img/rxtj.png'
				,'','../src/img/rqbk.png',' ',
				' ','../src/img/mxsp.png','../src/img/zj.png',
				'../src/img/mxsp.png',
				],
				qg:['../src/img/rqbk.png','../src/img/mxsp.png','../src/img/zj.png',
				'../src/img/mxsp.png','../src/img/rqbk.png','../src/img/jbj.png',
				'../src/img/rqbk.png','../src/img/rqbk.png','../src/img/rxtj.png'
				,'','../src/img/rqbk.png',' ',
				' ','../src/img/mxsp.png','../src/img/zj.png',
				'../src/img/mxsp.png',
				],

				width:180,height:135,
				type:'horizontal',
				page:false,
				// autoPlay:false
			})

			$('#lbt5').Carousel2({
				imgs:['../src/img/230x123.jpg','../src/img/230x123 (1).jpg','../src/img/230x123 (2).jpg',
				'../src/img/230x123 (3).jpg','../src/img/230x123 (4).jpg','../src/img/230x123 (5).jpg',
				'../src/img/230x123 (6).jpg','../src/img/230x123 (7).jpg'
				],
				width:230,height:123,
				type:'horizontal',
				page:true,
				// autoPlay:false
			});


			jQuery(($)=>{
				console.log($('#sfq'));


			$('#sfq').on('mouseover','li',function(){
				var $currentli = $(this);
				console.log($currentli[0])
	
				$('.lis').stop(true).animate({width:164},500);
				$(this).stop(true).animate({width:664},500);
			});



				$('#t7d').on('mouseover','a',function(){
				console.log(666);
				console.log($(this));
			 	// clearInterval(timer);
			 	$(this).stop(true).animate({top:-40},1);
			 }).on('mouseout','a',function(){
			 	console.log(777);
			 	// timer = setInterval(autoPlay,opt.duration);
			 	$(this).stop(true).animate({top:0},1);
			 })
			})

			$('#tab1').Carouseltab({
				imgs1:['../src/img/A04-026-5SF.jpg','../src/img/A04-026-5UV.jpg','../src/img/A10-5LF-6VZ.jpg',
				'../src/img/A04-026-5RA.jpg','../src/img/A6D-048-074.jpg'
				],
				imgs2:['../src/img/A04-112-66K_02.jpg','../src/img/A1I-184-02Y.jpg','../src/img/A1O-184-02H.jpg',
				'../src/img/A6M-6DV-030.jpg','../src/img/A6M-69J-02G-06.jpg'
				],
				imgs3:['../src/img/A28-800-7CR.jpg','../src/img/A05-403-1GS.jpg','../src/img/A25-023-06T.jpg',
				'../src/img/A0O-389-05J.jpg','../src/img/A22-4L5-5NE.jpg'
				],
				imgs4:['../src/img/A04-038-637.jpg','../src/img/A31-763-5Q1.jpg','../src/img/A16-2HG-80Q.jpg',
				'../src/img/A1R-184-023.jpg','../src/img/A1I-184-024_05.jpg'
				],
				tex:['您也许感兴趣','新品发布','发烧好评',
				'狠惠配'
				],
				// tub1:['../img/rqbk.png','../img/mxsp.png','../img/zj.png',
				// '../img/mxsp.png',
				// ]
				tub2:['../src/img/xpsf.png','../src/img/xpsf.png','../src/img/xpsf.png',
				'../src/img/xpsf.png','../src/img/rxtj.png'
				],
				tub3:['../src/img/mxsp.png','../src/img/mxsp.png','../src/img/qwdj.png',
				'../src/img/qwdj.png','../src/img/mxsp.png'
				],
				tub4:['../src/img/mxsp.png','../src/img/qwdj.png','../src/img/mxsp.png',
				'../src/img/mxsp.png','../src/img/mxsp.png'
				],
				text1:['SONY 索尼 DSC-RX100 M3 数码相机 黑色 F1.8-2.8大光圈/2010万像素/1英寸Exmor R CMOS',
				'SONY 索尼 SRS-XB10 便携 迷你 音响 IPX5防水设计 重低音 无线 蓝牙 音箱 蓝色',
				'SONY 索尼 DSC-W830 数码相机 银色 2010万像素/8倍光变/2.7英寸液晶屏',
				'微软(Microsoft)Surface Pro 4 二合一平板电脑 Intel Core i5 256G存储8G内存 12.3英寸 带触控笔',
				'微软(Microsoft)Surface Pro 4 二合一平板电脑 Intel Core i5 128G存储4G内存 12.3英寸 触控笔'
				],
				text2:['富士 FUJIFILM X-A10 (XC 16-50II) 微单电套机 经典银黑 小巧轻便 微距拍摄 180度翻折屏',
				'Apple MacBook Air 13.3英寸笔记本电脑 银色 Core i5/8GB内存/128G硬盘 MQD32CH/A',
				'Apple iPad Pro 平板电脑 12.9英寸 64G WLAN版/A10X芯片/Retina显示屏 MQDC2CH/A 银色',
				'嗨车族 IWALK智能双轮体感车 自平衡车 两轮电动车 代步车手机APP遥控体感车 黑色',
				'MOPS 忻风便携空气净化器 智能防雾霾PM2.5口罩 浅蓝 智能硬件 自主研发'
				],
				text3:['华为 荣耀 V9 全网通 标配版 4GB 64GB 铂光金 移动联通电信4G手机 双卡双待',
				'breo 倍轻松 头部按摩器 idream1168',
				'SanDisk 闪迪 32GB Class10 ExtremePro至尊 超 极 速 SDHC卡 95MB/S',
				'OMRON 欧姆龙 上臂式电子血压计HEM-7211',
				'Logitech 罗技 G900 有线/无线 双模式 游戏鼠标 RGB 鼠标'
				],
				text4:['Canon 佳能 EOS 80D 单反相机 含 EF-S 18-200mm f/3.5-5.6 IS 远摄变焦镜头',
				'Royalstar 荣事达 EM1220 多功能套装煮茶器电热水壶功夫煮 养生壶',
				'ROMOSS 罗马仕 PB05 超薄聚合物 移动电源充电宝 5000毫安 白色 双输出 适用于苹果安卓',
				'APPLE 苹果 iPhone7 Plus A1661 亮黑色 128G 移动联通电信4G手机',
				'Apple苹果 MacBook Pro 15.4英寸笔记本 深空灰 MLH32CH/A (Multi-Touch Bar/Core i7/16GB/256GB)'
				],

				jg1:['<span class="price">¥4080.00</span>',
				'<span class="price">¥359.00</span>',
				'<span class="price">¥735.00</span>',
				'<span class="price">¥6799.00</span>',
				'<span class="price">¥5499.00</span>'
				],
				jg2:['<span class="price">¥3299.00</span>',
				'<span class="price">¥6188.00</span>',
				'<span class="price">¥6388.00</span>',
				'<span class="price">¥2399.00</span>',
				'<span class="price">¥329.00</span>'
				],
				jg3:['<span class="price">¥2666.00</span>',
				'<span class="price">¥599.00</span>',
				'<span class="price">¥179.00</span>',
				'<span class="price">¥599.00</span>',
				'<span class="price">¥795.00</span>'
				],
				jg4:['<span class="price">¥8499.00</span>',
				'<span class="price">¥199.00</span>',
				'<span class="price">¥59.00</span>',
				'<span class="price">¥6488.00</span>',
				'<span class="price">¥15658.00</span>'
				],
				type:'show',
				page:true,	
			});

			$('#t7lbt').Carousel2({
				imgs:['../src/img/480x205.jpg',
				'../src/img/480x205 (1).jpg',
				'../src/img/480x205 (2).jpg'
				],
				width:480,height:205,
				type:'horizontal',
				page:true
			});

			$('#t8lbt').Carousel2({
				imgs:['../src/img/480x205.jpg',
				'../src/img/480x205 (1).jpg',
				'../src/img/480x205 (2).jpg'
				],
				width:480,height:205,
				type:'horizontal',
				page:true
			});

			$('#t9lbt').Carousel2({
				imgs:['../src/img/480x205.jpg',
				'../src/img/480x205 (1).jpg',
				'../src/img/480x205 (2).jpg'
				],
				width:480,height:205,
				type:'horizontal',
				page:true
			});

			$('#t10lbt').Carousel2({
				imgs:['../src/img/480x205.jpg',
				'../src/img/480x205 (1).jpg',
				'../src/img/480x205 (2).jpg'
				],
				width:480,height:205,
				type:'horizontal',
				page:true
			});
			$('#t11lbt').Carousel2({
				imgs:['../src/img/480x205.jpg',
				'../src/img/480x205 (1).jpg',
				'../src/img/480x205 (2).jpg'
				],
				width:480,height:205,
				type:'horizontal',
				page:true
			});

			$('#tabd1').Carouseltab2({
				imgs1:['../src/img/S5M-5CX-3SD_02.jpg','../src/img/S5M-5TS-3WK.jpg',
				'../src/img/S5M-5TS-3WL.jpg',
				'../src/img/S5M-5TS-3WP.jpg'
				],
				imgs2:['../src/img/S5J-53P-0ZJ.jpg'
				],
				imgs3:['../src/img/S7D-5CT-00M.jpg','../src/img/S7D-4Y6-062.jpg',
				'../src/img/S7D-4Y6-068.jpg',
				'../src/img/S7D-4Y6-06A.jpg'
				],
				tex:['手表','笔记本','奶粉'
				],

				text1:['Timex 天美时 T2P142 腕表',
				'Citizen 西铁城 Eco-Drive BM8475-00F 男款光动能腕表',
				'Citizen 西铁城 Eco-Drive Axiom AU1065-07E 男款光动能腕表',
				'Citizen 西铁城 BJ6475-18E Drive CTO 男士光动能腕表'
				],
				text2:['翻新: ThinkPad  T430 酷睿 i5 3rd Gen 3320M (2.60 GHz) 4 GB内存 320GB硬盘  14.0" Win10',
				],
				text3:['保税仓发货 包邮包税 澳洲Bellamys 贝拉米 有机婴儿牛奶粉3段(12个月以上宝宝) 900g 2罐装',
				'英国直邮英国原装牛栏 1段 0-6个月 奶粉900G 4罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 2罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 4罐装'
				],
				jg1:['<span class="price">¥229.00</span>',
				'<span class="price">¥879.00</span>',
				'<span class="price">¥789.00</span>',
				'<span class="price">¥819.00</span>'
				],
				jg2:['<span class="price">¥1799.00</span>'
				],
				jg3:['<span class="price">¥365.00</span>',
				'<span class="price">¥519.00</span>',
				'<span class="price">¥259.00</span>',
				'<span class="price">¥499.00</span>'
				],
	
				type:'show',
				page:true,	
			});

			$('#tabd2').Carouseltab2({
				imgs1:['../src/img/S5M-5CX-3SD_02.jpg','../src/img/S5M-5TS-3WK.jpg',
				'../src/img/S5M-5TS-3WL.jpg',
				'../src/img/S5M-5TS-3WP.jpg'
				],
				imgs2:['../src/img/S5J-53P-0ZJ.jpg'
				],
				imgs3:['../src/img/S7D-5CT-00M.jpg','../src/img/S7D-4Y6-062.jpg',
				'../src/img/S7D-4Y6-068.jpg',
				'../src/img/S7D-4Y6-06A.jpg'
				],
				tex:['手表','笔记本','奶粉'
				],

				text1:['Timex 天美时 T2P142 腕表',
				'Citizen 西铁城 Eco-Drive BM8475-00F 男款光动能腕表',
				'Citizen 西铁城 Eco-Drive Axiom AU1065-07E 男款光动能腕表',
				'Citizen 西铁城 BJ6475-18E Drive CTO 男士光动能腕表'
				],
				text2:['翻新: ThinkPad  T430 酷睿 i5 3rd Gen 3320M (2.60 GHz) 4 GB内存 320GB硬盘  14.0" Win10',
				],
				text3:['保税仓发货 包邮包税 澳洲Bellamys 贝拉米 有机婴儿牛奶粉3段(12个月以上宝宝) 900g 2罐装',
				'英国直邮英国原装牛栏 1段 0-6个月 奶粉900G 4罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 2罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 4罐装'
				],
				jg1:['<span class="price">¥229.00</span>',
				'<span class="price">¥879.00</span>',
				'<span class="price">¥789.00</span>',
				'<span class="price">¥819.00</span>'
				],
				jg2:['<span class="price">¥1799.00</span>'
				],
				jg3:['<span class="price">¥365.00</span>',
				'<span class="price">¥519.00</span>',
				'<span class="price">¥259.00</span>',
				'<span class="price">¥499.00</span>'
				],
	
				type:'show',
				page:true,	
			});

			$('#tabd3').Carouseltab2({
				imgs1:['../src/img/S5M-5CX-3SD_02.jpg','../src/img/S5M-5TS-3WK.jpg',
				'../src/img/S5M-5TS-3WL.jpg',
				'../src/img/S5M-5TS-3WP.jpg'
				],
				imgs2:['../src/img/S5J-53P-0ZJ.jpg'
				],
				imgs3:['../src/img/S7D-5CT-00M.jpg','../src/img/S7D-4Y6-062.jpg',
				'../src/img/S7D-4Y6-068.jpg',
				'../src/img/S7D-4Y6-06A.jpg'
				],
				tex:['手表','笔记本','奶粉'
				],

				text1:['Timex 天美时 T2P142 腕表',
				'Citizen 西铁城 Eco-Drive BM8475-00F 男款光动能腕表',
				'Citizen 西铁城 Eco-Drive Axiom AU1065-07E 男款光动能腕表',
				'Citizen 西铁城 BJ6475-18E Drive CTO 男士光动能腕表'
				],
				text2:['翻新: ThinkPad  T430 酷睿 i5 3rd Gen 3320M (2.60 GHz) 4 GB内存 320GB硬盘  14.0" Win10',
				],
				text3:['保税仓发货 包邮包税 澳洲Bellamys 贝拉米 有机婴儿牛奶粉3段(12个月以上宝宝) 900g 2罐装',
				'英国直邮英国原装牛栏 1段 0-6个月 奶粉900G 4罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 2罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 4罐装'
				],
				jg1:['<span class="price">¥229.00</span>',
				'<span class="price">¥879.00</span>',
				'<span class="price">¥789.00</span>',
				'<span class="price">¥819.00</span>'
				],
				jg2:['<span class="price">¥1799.00</span>'
				],
				jg3:['<span class="price">¥365.00</span>',
				'<span class="price">¥519.00</span>',
				'<span class="price">¥259.00</span>',
				'<span class="price">¥499.00</span>'
				],
	
				type:'show',
				page:true,	
			});


			$('#tabd4').Carouseltab2({
				imgs1:['../src/img/S5M-5CX-3SD_02.jpg','../src/img/S5M-5TS-3WK.jpg',
				'../src/img/S5M-5TS-3WL.jpg',
				'../src/img/S5M-5TS-3WP.jpg'
				],
				imgs2:['../src/img/S5J-53P-0ZJ.jpg'
				],
				imgs3:['../src/img/S7D-5CT-00M.jpg','../src/img/S7D-4Y6-062.jpg',
				'../src/img/S7D-4Y6-068.jpg',
				'../src/img/S7D-4Y6-06A.jpg'
				],
				tex:['手表','笔记本','奶粉'
				],

				text1:['Timex 天美时 T2P142 腕表',
				'Citizen 西铁城 Eco-Drive BM8475-00F 男款光动能腕表',
				'Citizen 西铁城 Eco-Drive Axiom AU1065-07E 男款光动能腕表',
				'Citizen 西铁城 BJ6475-18E Drive CTO 男士光动能腕表'
				],
				text2:['翻新: ThinkPad  T430 酷睿 i5 3rd Gen 3320M (2.60 GHz) 4 GB内存 320GB硬盘  14.0" Win10',
				],
				text3:['保税仓发货 包邮包税 澳洲Bellamys 贝拉米 有机婴儿牛奶粉3段(12个月以上宝宝) 900g 2罐装',
				'英国直邮英国原装牛栏 1段 0-6个月 奶粉900G 4罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 2罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 4罐装'
				],
				jg1:['<span class="price">¥229.00</span>',
				'<span class="price">¥879.00</span>',
				'<span class="price">¥789.00</span>',
				'<span class="price">¥819.00</span>'
				],
				jg2:['<span class="price">¥1799.00</span>'
				],
				jg3:['<span class="price">¥365.00</span>',
				'<span class="price">¥519.00</span>',
				'<span class="price">¥259.00</span>',
				'<span class="price">¥499.00</span>'
				],
	
				type:'show',
				page:true,	
			});


			$('#tabd5').Carouseltab2({
				imgs1:['../src/img/S5M-5CX-3SD_02.jpg','../src/img/S5M-5TS-3WK.jpg',
				'../src/img/S5M-5TS-3WL.jpg',
				'../src/img/S5M-5TS-3WP.jpg'
				],
				imgs2:['../src/img/S5J-53P-0ZJ.jpg'
				],
				imgs3:['../src/img/S7D-5CT-00M.jpg','../src/img/S7D-4Y6-062.jpg',
				'../src/img/S7D-4Y6-068.jpg',
				'../src/img/S7D-4Y6-06A.jpg'
				],
				tex:['手表','笔记本','奶粉'
				],

				text1:['Timex 天美时 T2P142 腕表',
				'Citizen 西铁城 Eco-Drive BM8475-00F 男款光动能腕表',
				'Citizen 西铁城 Eco-Drive Axiom AU1065-07E 男款光动能腕表',
				'Citizen 西铁城 BJ6475-18E Drive CTO 男士光动能腕表'
				],
				text2:['翻新: ThinkPad  T430 酷睿 i5 3rd Gen 3320M (2.60 GHz) 4 GB内存 320GB硬盘  14.0" Win10',
				],
				text3:['保税仓发货 包邮包税 澳洲Bellamys 贝拉米 有机婴儿牛奶粉3段(12个月以上宝宝) 900g 2罐装',
				'英国直邮英国原装牛栏 1段 0-6个月 奶粉900G 4罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 2罐装',
				'英国直邮英国原装牛栏 3段 1-2岁 奶粉900G 4罐装'
				],
				jg1:['<span class="price">¥229.00</span>',
				'<span class="price">¥879.00</span>',
				'<span class="price">¥789.00</span>',
				'<span class="price">¥819.00</span>'
				],
				jg2:['<span class="price">¥1799.00</span>'
				],
				jg3:['<span class="price">¥365.00</span>',
				'<span class="price">¥519.00</span>',
				'<span class="price">¥259.00</span>',
				'<span class="price">¥499.00</span>'
				],
	
				type:'show',
				page:true,	
			});



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
				// $('.userpanel2').html('您好，欢迎'+$phone+'来新蛋购物！<button id="btnn">退出</button>');

				// 隐藏表单
				$('.userpanel').css({display:'none'});
			}

			// 退出
			// 显示表单
			else{
				$('.userpanel').css({display:'block'});
				$('.userpanel2').css({display:'none'});
			}
			
		}


		// 退出
		// 删除cookie
		// 利用设置过期时间达到删除的效果。
		$('#btnn').on('click',function(){
				var now = new Date();
				now.setDate(now.getDate()-7);

				document.cookie = 'username=null;expires=' + now;
				document.cookie = 'password=null;expires=' + now;


				showStaus();
			})
		

			// var $a=$('#t7d').find('a');
		
		


	})
})

