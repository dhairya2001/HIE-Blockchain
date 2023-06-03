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
    $user_type="Doctor";
    echo '<script>console.log("'.$isRegistered.'")</script>';
    $sql = "INSERT INTO users (metamaskid, user_type) VALUES ('$mid', '$user_type')";
    if ($conn->query($sql) === TRUE) 
    {
        echo "New user created successfully.";
        $isRegistered=1;
    } 
    else 
    {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    mysqli_close($conn);
    echo '<script>console.log("'.$isRegistered.'")</script>';
    
?>