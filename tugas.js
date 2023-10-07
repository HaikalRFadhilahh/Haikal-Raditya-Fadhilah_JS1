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


/* Tugas While Dan Do While */

/* Tugas Function */
