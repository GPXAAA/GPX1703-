(function(){
	let datalist = document.querySelector('#datalist');
	let page = document.querySelector('#page');

	let pageNo = 1;
	let qty = 8;

	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = ()=>{
		if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
			var res = JSON.parse(xhr.responseText);

			// 生成分页
			let pageLen = Math.ceil(res.total/res.qty);
			page.innerHTML = '';
			for(var i=1;i<=pageLen;i++){
				var span = document.createElement('span');
				span.innerHTML = i;
				if(i===pageNo){
					span.className = 'active';
				}
				page.appendChild(span);
			}

			let ul = document.createElement('ul');

			ul.innerHTML = res.data.map(item=>{
				return `
					<li>
						<h4>${item.name}</h4>
						<img src="${item.img}" alt="" />
					</li>
				`
			}).join('');

			datalist.innerHTML = '';
			datalist.appendChild(ul);
		}
	}

	xhr.open('get','../api/list(2).php?pageNo='+pageNo + '&qty='+qty,true);
	xhr.send();

			// 分页切换
	page.onclick = e=>{
		if(e.target.tagName.toLowerCase() === 'span'){
			pageNo = Number(e.target.innerText);

			xhr.open('get','../api/list(2).php?pageNo='+pageNo + '&qty='+qty,true);
			xhr.send();
		}
	}
})();