<?php
define("Harga_Tiket_Dewasa", 50000);
define("Harga_Tiket_Anak", 30000);
define("Tambahan_Akhir_Pekan", 10000);
define("Persentase_Diskon_Promo", 0.10);
define("Batas_Total_Diskon", 150000);

function hitungTotalHarga($jenisTiket, $jumlahTiket, $hari)
{
    if (!is_numeric($jumlahTiket) || $jumlahTiket <= 0) {
        echo "Jumlah tiket harus berupa angka positif.\n";
        return;
    }

    $hargaAwal = validasiJenisTiket($jenisTiket);
    if (is_null($hargaAwal)) {
        echo "Jenis tiket tidak valid.\n";
        return;
    }

    $hari = formatHari($hari);
    if (is_null($hari)) {
        echo "Nama hari tidak valid.\n";
        return;
    }

    $harga = hitungHargaAwal($hargaAwal, $hari);
    $totalSebelumDiskon = hitungTotalSebelumDiskon($harga, $jumlahTiket);
    $diskon = hitungTotalDiskon($totalSebelumDiskon);

    tampilkanRincian($hargaAwal, $harga, $totalSebelumDiskon, $diskon, $jumlahTiket, $jenisTiket, $hari);
}

function validasiJenisTiket($jenisTiket)
{
    $jenisTiket = ucfirst(strtolower($jenisTiket));
    return match($jenisTiket) {
        'Dewasa' => Harga_Tiket_Dewasa,
        'Anak' => Harga_Tiket_Anak,
        default => null,
    };
}

function formatHari($hari) {
    $hari = ucfirst(strtolower($hari));
    $daftarHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    return in_array($hari, $daftarHari) ? $hari : null;
}

function hitungHargaAwal($harga, $hari)
{
    if (in_array($hari, ["Sabtu", "Minggu"])) {
        $harga += Tambahan_Akhir_Pekan;
    }
    return $harga;
}

function hitungTotalSebelumDiskon($harga, $jumlahTiket)
{
    return $harga * $jumlahTiket;
}

function hitungTotalDiskon($totalHarga)
{
    $diskon = 0;
    if ($totalHarga > Batas_Total_Diskon) {
        $diskon += $totalHarga * Persentase_Diskon_Promo;
    }
    return $diskon;
}

function tampilkanRincian($hargaAwal, $harga, $totalSebelumDiskon, $diskon, $jumlahTiket, $jenisTiket, $hari)
{
    echo str_pad("Harga awal per tiket:", 35) . "Rp" . number_format($hargaAwal, 0, ',', '.') . "\n";
    if ($hargaAwal != $harga) {
        echo str_pad("Tambahan akhir pekan per tiket:", 35) . "+ Rp10.000\n";
        echo str_pad("Harga per tiket akhir pekan:", 35) . "Rp" . number_format($harga, 0, ',', '.') . "\n";
    }
    echo str_pad("Total harga:", 35) . "Rp" . number_format($totalSebelumDiskon, 0, ',', '.') . "\n";
    if ($diskon > 0) {
        echo str_pad("Diskon diterapkan:", 35) . "- Rp" . number_format($diskon, 0, ',', '.') . "\n";
    }
    echo str_pad("=", 55, "=") . "\n";
    echo str_pad("Total akhir untuk $jumlahTiket tiket " . ucfirst(strtolower($jenisTiket)) . " hari " . $hari . ": ", 35) .
"Rp" . number_format($totalSebelumDiskon - $diskon, 0, ',', '.') . "\n";
}

function cetakHeader($judul)
{
    echo str_pad("=", 55, "=") . "\n";
    echo str_pad("=             $judul             =", 55, " ", STR_PAD_BOTH) . "\n";
    echo str_pad("=", 55, "=") . "\n";
}

cetakHeader("Pemesanan Tiket Bioskop");
$jenisTiket = readline(str_pad("Jenis tiket (Dewasa/Anak):", 35));
$jumlahTiket = readline(str_pad("Jumlah tiket:", 35));
$hari = readline(str_pad("Masukkan hari:", 35));
echo str_pad("=", 55, "=") . "\n";

hitungTotalHarga($jenisTiket, $jumlahTiket, $hari);