<?php
session_start();
if(empty($_SESSION["name"])){
	header("location: index.php");
	exit;
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Welcome</title>
</head>
<body align="center">
	<h1>Hi, <?php echo htmlspecialchars($_SESSION["email"]); ?></h1>
	<h2><a href="signout.php">Sign Out</a>
	</h2>
</body>
</html>