const prompt = require("prompt-sync")();
const NomorSatu = require("./models/NomorSatu");
const NomorDua = require("./models/NomorDua");
const NomorTiga = require("./models/NomorTiga");
const NomorEmpat = require("./models/NomorEmpat");

class Main {
  static display() {
    let moreNumbers = true;

    while (moreNumbers) {
      console.log("SELAMAT DATANG DI TUGAS JS-Backend");
      console.log("1. Tampil Data Primitif");
      console.log("2. Tampil Data Non-Primitif");
      console.log("3. Tampil Operator dan Perbandingan");
      console.log("4. Menentukan Genap atau Ganjil");
      console.log("5. Mencetak Nama Hari Berdasarkan Nomor");
      console.log("6. Loop angka 1-10");
      console.log("7. Hitung Luas Lingkaran");
      console.log("8. Hitung Kuadratkan Array");

      const angka = parseInt(prompt("Silahkan Masukkan angka: "));

      switch (angka) {
        case 1:
          NomorSatu.showPrimitiveTypes();
          break;
        case 2:
          NomorSatu.showNonPrimitiveTypes();
          break;
        case 3:
          NomorSatu.demoOperators();
          break;
        case 4:
          NomorDua.ganjilGenap();
          break;
        case 5:
          NomorDua.cetakNamaHari();
          break;
        case 6:
          NomorTiga.cetakAngka();
          break;
        case 7:
          NomorEmpat.hitungLuasLingkaran();
          break;
        case 8:
          NomorEmpat.kuadratkanAngka();
          break;
        default:
          console.log(
            "Waduh, salah nih bos. Masukinnya nomor 1 sampai 8 aja ya."
          );
          break;
      }

      const lagi = prompt("Mau nyoba nomor yang lain? (y/n): ").toLowerCase();
      if (lagi !== "y") {
        moreNumbers = false;
      }
    }
  }
}

Main.display();
