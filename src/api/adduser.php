<?php
	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	// 第一步
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'newegg';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);


	// 设置编码格式
	$conn->set_charset('utf8');

	// 接收
	
	// 用户名
	$phone = isset($_GET['phone']) ? $_GET['phone'] : ' ';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$name = isset($_GET['name']) ? $_GET['name'] : '';
	$email = isset($_GET['email']) ? $_GET['email'] : '';
	


	// md5加密密码
	// $password = md5($password);
	// 查找所有用户信息

	$sql = "insert into user(password,name,phone,email) values('$password','$name','$phone','$email')";
	echo $sql;
	// 查找指定name信息
	// if($name){
	// 	$sql .= " where name='$name'";
	// }

	// 查询数据库
	$result = $conn->query($sql);



	//使用查询结果	
	if($result){
		echo "数据写入成功";
	}
?>