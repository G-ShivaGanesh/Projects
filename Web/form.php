<?php

$conn = mysqli_connect ( 'localhost' , 'root' , '' , 'logins');
if( !$conn )
{ 
    die( 'Not connected' );
}else{
    echo( 'Connected' );
}
?>