<?php

include "./database.php";

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = mysqli_query($connection_string, "SELECT * FROM category") or die("Select Query Error");

    $data = mysqli_fetch_all($query, MYSQLI_ASSOC);

    $tempArray = array();

    foreach ($data as $key => $info) {
        $category_id = $info['id'];

        $query = mysqli_query($connection_string, "SELECT * FROM wallpaper_data WHERE category_id = $category_id") or die("Select Query Error");

        $countImg = count(mysqli_fetch_all($query, MYSQLI_ASSOC));

        array_push($tempArray, array('id' => $info['id'], 'name' => $info['name'], 'total_img' => $countImg));
    }

    echo json_encode($tempArray);
} else {
    echo "Something Want Wrong";
}
