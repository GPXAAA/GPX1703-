require(['config'],function(){
	require(['jquery','gdszoom','list',],function(){
// jQuery(function($){
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
							<li>
								<img src="${item.img}" alt="" />
								<p><a href="../html/details.html">${item.name}</a></p>
								<p>${item.content}</p>
								<p><span>抢购价：</span><strong>${item.money}</strong></p>
								<span class="sp"><a href="../html/details.html">立即抢购</a></span>
							</li>
						`
					});

					$ul.html(html).appendTo('.datalist');

					pageNo++;
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
								<li>
								<img src="${item.img}" alt="" />
								<p><a href="../html/details.html">${item.name}</a></p>
								<p>${item.content}</p>
								<p><span>抢购价：</span><strong>${item.money}</strong></p>
								<span class="sp"><a href="../html/details.html">立即抢购</a></span>
								</li>
								`
							});

							$ul.html(html).appendTo('.datalist');

							pageNo++;
						}
					});

					// 更新lastPage
					lastPage = pageNo;
				}

			});
		})
	})
