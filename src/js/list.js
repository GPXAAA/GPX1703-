require(['config'],function(){
	require(['jquery','gdszoom','list',],function(){
// jQuery(function($){
// 			// 页面刷新/重新打开，显示欢迎登录界面
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

		
// 
			var pageNo = 1;
			var lastPage = 1;
			// jquery发起ajax请求
			$.ajax({
				// url:'http://localhost/1703/api/football.php'
				url:'../api/list.php',
				data:{pageNo:pageNo,qty:6},

				// 设定返回数据类型
				dataType:'json',
				success:function(res){
					var $ul = $('<ul/>');
					var html = res.data.map(item=>{
						return `
							<li data-guid="${item.guid}">
								<img src="${item.img}" alt="" />
								<p><a href="../html/details.html">${item.name}</a></p>
								<p>${item.content}</p>
								<p>抢购价：<strong>${item.money}</strong></p>
								<span class="sp">立即抢购</span>
							</li>
						`
					});

					$ul.html(html).appendTo('.datalist');

					pageNo++;
													// 点击商品时，进入商品详情页
		// 进入商品详情页前，把当前商品的信息保存到cookie

		// 利用事件委托把事件绑定到goodsList
		$('.datalist').on('click','span',function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;

			if(target.tagName.toLowerCase() ===  'span'){
				console.log(678);

				var currentGUID = target.parentElement.getAttribute('data-guid');
				console.log(currentGUID);
				// 根据guid获取整个商品的信息
				console.log(6);
				var currentGoods = res.data.filter(function(item){
					
					return item.guid === currentGUID;
				})[0];
				console.log(currentGoods);
				// 把当前商品写入cookie
				var now = new Date();
				now.setDate(now.getDate()+3);
				console.log(JSON.stringify(currentGoods));
				document.cookie = 'currentGoods=' + JSON.stringify(currentGoods) + ';expires=' + now;
			}
			location.href = '../html/details.html';
		})
				}
			});

			// 滚动更多
			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();
				var winHeight = $(window).height();
				var scrollHeight = $('html').outerHeight();

				// 如何判断滚动到最底部
				if(scrollTop >= scrollHeight - winHeight - 500){
					if(pageNo == lastPage) return;
					$.ajax({
						url:'../api/list.php',
						data:{pageNo:pageNo,qty:6},

						// 设定返回数据类型
						dataType:'json',
						success:function(res){
							var $ul = $('<ul/>');
							var html = res.data.map(item=>{
								return `
								<li data-guid="${item.guid}">
								<img src="${item.img}" alt="" />
								<p><a href="../html/details.html">${item.name}</a></p>
								<p>${item.content}</p>
								<p>抢购价:<strong>${item.money}</strong></p>
								<span class="sp">立即抢购</span>
							</li>
								`
							});

							$ul.html(html).appendTo('.datalist');

							pageNo++;

										// 点击商品时，进入商品详情页
		// 进入商品详情页前，把当前商品的信息保存到cookie

		// 利用事件委托把事件绑定到goodsList
		$('.datalist').on('click','span',function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;

			if(target.tagName.toLowerCase() === 'span'){
				console.log(678);

				var currentGUID = target.parentElement.getAttribute('data-guid');
				console.log(currentGUID);
				// 根据guid获取整个商品的信息
				console.log(6);
				var currentGoods = res.data.filter(function(item){
					
					return item.guid === currentGUID;
				})[0];
				console.log(currentGoods);
				// 把当前商品写入cookie
				var now = new Date();
				now.setDate(now.getDate()+3);
				console.log(JSON.stringify(currentGoods));
				document.cookie = 'currentGoods=' + JSON.stringify(currentGoods) + ';expires=' + now;
			}

			location.href = '../html/details.html';
		})
						}
					});



					// 更新lastPage
					lastPage = pageNo;
				}

	

			});
		
			})
	})
