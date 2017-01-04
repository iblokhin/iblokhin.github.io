<?php

 $Ret = array('errno' => 0, 'error' => '', 'html' => '');

 $Str  = "_METHOD: ".$_SERVER['REQUEST_METHOD']."\r\n\r\n";
 $Str .= "_GET: ".print_r($_GET, true)."\r\n\r\n";
 $Str .= "_POST: ".print_r($_POST, true)."\r\n\r\n";
 $Str .= "_COOKIE: ".print_r($_POST, true)."\r\n\r\n";

 file_put_contents('trace-'.time().'.txt', $Str);

 echo(json_encode($Ret));
