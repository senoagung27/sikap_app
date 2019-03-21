<?php

header("Content-type:application/json");

//koneksi ke database
$connection = mysqli_connect("localhost", "id2543125_seno", "12345", "id2543125_tk_itats") or die("Error " . mysqli_error($connection));

$getfile = file_get_contents('php://input');

$content = json_decode($getfile, true);

$id_tempat = $content['id_tempat'];
$nama = $content['nama'];
$alamat = $content['alamat'];
$fasilitas = $content['fasilitas'];
$wahana = $content['wahana'];
$harga_masuk = $content['harga_masuk'];

$query = "INSERT INTO tbl_wisata(id_tempat,nama,alamat,fasilitas,wahana,harga_masuk)
		VALUES('$id_tempat', '$nama', '$alamat', '$fasilitas', '$wahana', $harga_masuk)";

  if(!mysqli_query($connection,$query))
    {
        die('Error : Query Not Executed. Please Fix the Issue!  ' . mysqli_error($connection));
    }
     else{
            echo "Data Inserted Successully!!!";
     }
	 
$connection = mysqli_connect("localhost", "id2543125_seno", "12345", "id2543125_tk_itats") or die("Error " . mysqli_error($connection));

//menampilkan data dari database, table tb_pustaka
$sql = "select * from tbl_wisata";
$result = mysqli_query($connection, $sql) or die("Error " . mysqli_error($connection));

//membuat array
while ($row = mysqli_fetch_assoc($result)) {
    $ArrAnggota[] = $row;
}

echo json_encode($ArrAnggota, JSON_PRETTY_PRINT);
//hasil array saya tampung di variabel dengan nama $json
$json = json_encode($ArrAnggota, JSON_PRETTY_PRINT);

//tutup koneksi ke database
mysqli_close($connection);

if (file_put_contents("itats_wisata.json", $json))
    echo "File JSON itats_wisata.json sukses dibuat...";
else 
    echo "Oops! Terjadi error saat membuat file JSON...";

?>