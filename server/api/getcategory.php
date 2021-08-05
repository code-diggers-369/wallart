<?php

include "./database.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = mysqli_query($connection_string, "SELECT * FROM category") or die("Select Query Error");

    $data = mysqli_fetch_all($query, MYSQLI_ASSOC);

    echo json_encode($data);
} else {
    echo "Something Want Wrong";
}
