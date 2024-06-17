<?php
session_start();
include_once "config.php";

// Check if user is logged in
if (!isset($_SESSION['unique_id'])) {
    echo "You are not logged in.";
    exit();
}

// Fetch the outgoing user ID and the search term
$outgoing_id = $_SESSION['unique_id'];
$searchTerm = mysqli_real_escape_string($conn, $_POST['searchTerm']);

// SQL query to search users
$sql = "SELECT * FROM users WHERE NOT unique_id = ? AND (fname LIKE ? OR lname LIKE ?)";
$stmt = $conn->prepare($sql);
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}

// Use LIKE wildcard for search term
$searchTermLike = "%{$searchTerm}%";
$stmt->bind_param("iss", $outgoing_id, $searchTermLike, $searchTermLike);
$stmt->execute();
$result = $stmt->get_result();

// Check if any users are found
$output = "";
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Generate HTML for each user found
        $output .= '<a href="chat.php?user_id=' . $row['unique_id'] . '">
                      <div class="content">
                        <img src="php/images/' . $row['img'] . '" alt="">
                        <div class="details">
                          <span>' . $row['fname'] . ' ' . $row['lname'] . '</span>
                          <p>' . $row['status'] . '</p>
                        </div>
                      </div>
                    </a>';
    }
} else {
    $output = 'No user found related to your search term';
}

// Output the results
echo $output;

// Close the statement and connection
$stmt->close();
$conn->close();
?>
