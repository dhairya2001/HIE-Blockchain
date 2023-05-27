<?php
// MySQL database credentials
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create the table if it doesn't exist
$sql = "CREATE TABLE IF NOT EXISTS users (
    metamaskid VARCHAR(255) UNIQUE,
    user_type ENUM('admin', 'doctor', 'patient')
)";
$conn->query($sql);

// Example usage: inserting a new user
$metamaskid = "example_metamask_id";
$user_type = "admin";

$sql = "INSERT INTO users (metamaskid, user_type) VALUES ('$metamaskid', '$user_type')";
if ($conn->query($sql) === TRUE) {
    echo "New user created successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
