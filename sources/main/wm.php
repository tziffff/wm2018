

<?php
$servername = "193.196.143.168";
$username = "rk7s-gruppe6";
$password = "rk7s-gruppe6";
$dbname = "rk7s-gruppe6";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM COUNTRY ORDER BY RAND()";
$result = $conn->query($sql);



if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["ID"]. " - Name: " . $row["NAME"].  " <br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>

