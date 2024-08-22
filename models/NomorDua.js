const prompt = require("prompt-sync")();

class NomorDua {
  static ganjilGenap() {
    const angka = parseInt(prompt("Masukkan angka: "));

    if (isNaN(angka)) {
      console.log("SORRY BANG CUMA BISA ANGKA");
    } else if (angka % 2 === 0) {
      console.log(`${angka} adalah Genap.`);
    } else {
      console.log(`${angka} adalah Ganjil.`);
    }
  }
  static cetakNamaHari() {
    const nomorHari = parseInt(prompt("Masukkan nomor hari (1-7): "));

    switch (nomorHari) {
      case 1:
        console.log("Senin");
        break;
      case 2:
        console.log("Selasa");
        break;
      case 3:
        console.log("Rabu");
        break;
      case 4:
        console.log("Kamis");
        break;
      case 5:
        console.log("Jumat");
        break;
      case 6:
        console.log("Sabtu");
        break;
      case 7:
        console.log("Minggu");
        break;
      default:
        console.log("Waduh Salah nih bos masukinnya nomor 1 sampe 7 aja ya");
        break;
    }
  }
}

module.exports = NomorDua;
