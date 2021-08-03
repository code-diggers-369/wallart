<?php

include "./database.php";

$category_id = $_GET['category_id'];

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $category_id) {
    $query = mysqli_query($connection_string, "SELECT * FROM wallpaper_data WHERE category_id = $category_id") or die("Select Query Error");

    $data = mysqli_fetch_all($query, MYSQLI_ASSOC);

    echo json_encode($data);
} else {
    echo "Something Want Wrong";
}
