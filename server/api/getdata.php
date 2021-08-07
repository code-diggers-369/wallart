<?php
// 
header('Content-type: application/json; charset=utf-8');
// 

include "./database.php";

$category_id = $_GET['category_id'] ? $_GET['category_id'] : 0;
$page = $_GET['page_no'] ? $_GET['page_no'] : 1;

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $category_id) {

    // 
    $results_per_page = 10;
    $start_from = ($page - 1) * $results_per_page;

    // 
    $query = mysqli_query($connection_string, "SELECT * FROM wallpaper_data WHERE category_id = $category_id LIMIT $start_from, $results_per_page") or die("Select Query Error");

    $data = mysqli_fetch_all($query, MYSQLI_ASSOC);

    echo json_encode($data);
} else {
    echo "Something Want Wrong";
}
