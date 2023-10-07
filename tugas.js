/* Tugas IF Else Dan Nested If */

// Sistem Login Sederhana Dengan Nested If
const username = "wkwk";
const password = "user";
if ((username == "admin" || username == "haikal") && password == "user") {
  if (username == "admin") {
    console.log("Selamat datang pak boss");
    console.log("Selamat Datang Kembali,Semoga Sehat Selalu");
  } else {
    console.log("Anda Berhasil Login,Selamat Datang Kembali!");
  }
} else {
  console.log("Username Atau Password Salah!!");
}

/* Tugas Switch Case */
const hari = "minggu";
switch (hari) {
  case "senin":
    console.log("Hari Anda Berat Bang,Selamat Upacara Pagi!");
    break;
  case "selasa":
    console.log("Hari Anda agak Luang,Selamat Belajar Express JS");
    break;
  case "rabu":
    console.log("Hari Anda Penuh,Full Kuliah Offline");
    break;
  case "kamis":
    console.log("Hari Ini Asisten Praktikum Sistem Operasi");
    break;
  case "jumat":
    console.log("Hari Ini Waktu Luang,Jangan Lupa Ambil Nasi Berkah");
    break;
  case "sabtu":
    console.log("Hari Ini Libur,Saatnya Rebahan");
    break;
  case "minggu":
    console.log("Hari Ini Santai Banget,Mendingan Ngepush Rank Mobile Legends");
    break;
  default:
    console.log("Input Hari Anda Salah,Harap Coba Lagi");
}

/* Tugas For Statement */

// Program Sederhana Untuk menghitung NEM Siswa SD
const mapel = ["Bahasa Indonesia", "Matematika", "Ilmu Pengetahuan Alam"];
const nilai = [97, 76, 81, 67];
var nem = 0;

for (var x = 0; x < mapel.length; x++) {
  console.log(
    `Nilai Siswa Dalam Mata Pelajaran ${mapel[x]} Adalah ${nilai[x]}`
  );
  nem = nem + nilai[x] / 10;
}

console.log(`Nilai NEM Siswa Adalah ${nem}`);

/* Tugas While Dan Do While */

// Mencari Kelipatan dengan Angka Tertentu dengan While
const angka = 34;
var flag = 0;
while (flag <= 1000) {
  if (flag % angka == 0 && angka != 0) {
    console.log(`[ ${flag} ]`);
  }
  flag++;
}

// Mencari Angka Genap Mencari Angka Genap Dengan Do While
var tanda = 0;
do {
  if (tanda % 2 == 0) {
    console.log(`[ ${tanda} ]`);
  }
  tanda++;
} while (tanda <= 50);

/* Tugas Function */

// Membuat Fungsi Untuk Menghitung Luas Persegi Panjang
const hitungLuasPersegi = (panjang, lebar) => {
  return panjang * lebar;
};

// Menghitung Luas Persegi Panjang dengan Fungsi
const hasil = hitungLuasPersegi(32, 15);
console.log(`Jadi Hasil Luas Persegi Panjang Adalah ${hasil} CM`);
