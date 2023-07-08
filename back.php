<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/css.css">
</head>
<body>
<?php
    // $provinces = [
    //     1 => "تهران",
    //     2 = 
    // ];
    print_r($_POST);
    if(isset($_POST['radioG']) and isset($_POST['nametext']) and isset($_POST['date']))
    {
        echo '<p class="alert2">
       شما فیلد ها را با موفقیت پر کرده اید
       </p>';
        $radioG = $_POST['radioG'];
        $nametext = $_POST['nametext'];
        $date = $_POST['date'];
        $num = $_POST['number'];
        $THS = $_POST['pets'];
        $state = $_POST['state'];
        $city = $_POST['city'];
        $adres = $_POST['adres'];
        $maharat = $_POST['maharat'];
        $img = $_POST['img'];
        }
    else{
       echo '<p class="alert">
       شما فیلد ها را کامل پر نکرده اید
       </p>';
    }
    
?>
<div>
 <label for="gs">جنسیت شما :</label>
<h2 name="gs"><?= $radioG?></h2>

 <label for="name">نام و نام خانوادگی شما :</label>
<h2><?= $nametext?></h2>

<label for="gs">تاریخ تولد شما :</label>
<h2><?= $date ?></h2>

<label for="gs">شماره همراه شما : </label>
<h2><?= $num ?></h2>

<label for="gs">تحصیلات شما : </label>
<h2>ت<?= $THS ?></h2>

<label for="gs">شهر و استان شما :</label>
<h2><?=$state?>و<?=$city?></h2>

<label for="gs">ادرس محل زندگی شما</label>
<h2><?=$adres?></h2>

<label for="gs">مهارت های شما</label>
<h2><?=$maharat?></h2>

<!-- <img src="<?=$img?>"></img> -->

</div>


<!-- <table>
    <?php foreach($_POST as $key => $value): ?>
        <tr>
            <th><?= $key ?></th>
            <td><?= $value ?></td>
        </tr>
    <?php endforeach;?>
</table> -->
</body>
</html>
