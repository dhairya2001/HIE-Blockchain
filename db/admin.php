<?php
    $isRegistered=0;
    $servername = "localhost";
    $username = "admin";
    $password = "admin";
    $dbname = "hie_database";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $mid=$_COOKIE['metamaskId'];
    echo '<script>console.log("'.$isRegistered.'")</script>';
    $sql = "SELECT * FROM users where metamaskId =  '$mid'";
    $user_type="None";
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        $row = mysqli_fetch_assoc($result); 
        echo "id: " . $row["metamaskId"] ."<br>".$row["userType"]. "<br>";
        $isRegistered=1; 
        $user_type=$row["userType"];
    }
    mysqli_close($conn);
    echo '<script>console.log("'.$isRegistered.'")</script>';
    setcookie("userType", $user_type, time() + 3600, "/");
    if($isRegistered==1)
    {
        echo '<script>console.log("'.$_COOKIE['userType'].'")</script>';
    }
    
?>