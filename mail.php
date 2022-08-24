
<?php


	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$msg=$_POST['msg'];

		$to='nema.anadi99@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Website Contact Form';
		$message="Name :".$name."\n"."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo '<script>alert("Message has been sent successfully!")</script>';
			echo '<meta http-equiv="refresh" content="0;url=https://bhojrasayana.000webhostapp.com/" />';
		}
		else{
			echo "Something went wrong! Try again!";
			echo '<meta http-equiv="refresh" content="0;url=https://bhojrasayana.000webhostapp.com/" />';
		}
	}
?>