<?php

include "./database.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['img']) && isset($_POST['category_id'])) {
    $id = uniqid(rand());
    $category_id = $_POST['category_id'];

    $target_path = "images/$id.png";

    $finish = 0;

    if (move_uploaded_file($_FILES['img']['tmp_name'], "../" . $target_path)) {

        $query = mysqli_query($connection_string, "INSERT INTO wallpaper_data(path,category_id) VALUES ('$target_path','$category_id')") or die("Select Query Error");
        $finish = 1;
    } else {
        $finish = 0;
    }

    echo $finish;
} else {
    echo "Something Want Wrong";
}
