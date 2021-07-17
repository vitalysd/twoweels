<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $model = $_POST['model'];
    $city = $_POST['city'];
    $date = $_POST['date'];

	$to = "demashinvitaly@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Номер телефона: $phone /n
    Модель: $model /n
    Город: $city /n
    Дата: $date /n" ; 	
	mail($to, $subject, $msg, "From: $to ");

?>

<p>Спасибо за заявку</p>
