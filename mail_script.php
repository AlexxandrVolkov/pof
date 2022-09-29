<?php
$name = $_POST['name'];
$tel = $_POST['telephone'];
$tetxarea = $_POST['textarea'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$tetxarea = htmlspecialchars($tetxarea);

$name = urlencode($name);
$tel = urlencode($tel);
$tetxarea = urlencode($tetxarea);

$name = trim($name);
$tel = trim($tel);
$tetxarea = trim($tetxarea);

if (mail("mihalichgyc@gmail.com",
     "Pest Reject",
     "Имя: ".$name."\n".
     "Телефон ".$tel,
     "Сообщение ".$tetxarea,
     "From: script@mail.ru \r\n")
){
     header("Location: /thank_you.html");
}

else {
     echo ("Error");
}

?>