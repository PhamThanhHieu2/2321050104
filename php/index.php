<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Buổi 1</title>
</head>
<body>
    <?php 
        // 1.cú pháp in ra màn hình
        echo "Hello World! <br>";

        echo "PHP <br>";

        // 2. Biến
        // Cú pháp: $ + tên biến = giá trị của biến
        $ten = "Thanh Hieu";
        $tuoi = 20;

        // Nối chuỗi .
        echo "Xin chao " . $ten . " " .$tuoi . " tuoi <br>";

        // 3. Hằng 
        define("soPi" ,"3.14");
        echo soPi . "<br>";

        //4. Phân biệt dấu '' và "" dấu '' nó hiểu là chuỗi chứ không phải là biến
        echo '$ten' . "<br>";
        echo "$ten" . "<br>";

        //5. Chuỗi 
        #5.1 Kiểm tra độ dài chuỗi tính cả dấu tron tên
        echo strlen($ten) . "<br>";

        #5.2 Đếm số từ
        echo str_word_count($ten) . "<br>";

        #5.3 Tìm kiếm ký tự trong chuỗi
        echo strpos($ten, "H") . "<br>";

        #5.4 Thay thế ký tự trong chuỗi
        echo str_replace("Hieu", "Han", $ten) . "<br>";

        //6. Toán tử
        $soThuNhat = 10;
        $soThuHai = 10;

        $tong = $soThuNhat + $soThuHai;
        if($tong < 15){
            echo "tổng là " .$tong. "nhỏ hơn 15 <br>";
        }elseif($tong ==15){
            echo "tổng là " .$tong. "<br>";
        }else{
            echo "tổng là " .$tong. " lớn hơn 15 <br>";
        }
        // + - * /
        # += -= *= /= %=
        # so sanh == != >< >= <= ===
        // echo $soThuNhat %= $soThuHai;

        //7. Câu điều kiện

        // kiểm tra tổng stn va sth 
        // neu < 15 thì hienj thị nhỏ hơn 15
        // neu = 15 ....
        // neu > 15...

        //8. Switch case 
        $color = "red";
        switch ($color){
            case "red":
                echo "is red";
                break;
            case "blue":
                echo "is blue";
                break;
            default:
                echo "no color";
                break;      
        }

        //9. for
        for ($i=0; $i < 100; $i ++){
            echo $i . "<br>";
        }
    ?>
</body>
</html>