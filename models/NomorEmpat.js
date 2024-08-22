const prompt = require("prompt-sync")();
class NomorEmpat {
  static hitungLuasLingkaran() {
    const jariJari = parseFloat(prompt("Masukkan jari-jari lingkaran: "));

    if (isNaN(jariJari) || jariJari <= 0) {
      console.log("Masukin angka aja yahh! (*jangan yg minus)");
      return;
    }

    const pi = 3.14159;
    const luasLingkaran = pi * jariJari * jariJari;
    console.log(
      `Luas Lingkaran dengan jari-jari ${jariJari} adalah ${luasLingkaran}`
    );
  }

  static kuadratkanAngka() {
    let arr = [];
    let moreNumbers = true;

    while (moreNumbers) {
      const angka = parseInt(
        prompt("Masukkan angka ke-array(ini per indeks ya) : ")
      );
      if (isNaN(angka)) {
        console.log("Nginputnya ga bener nih.");
      } else {
        arr.push(angka * angka);
      }

      const lagi = prompt(
        "Mau masukin angka ke indeks selanjutnya ga? (y/n): "
      ).toLowerCase();
      if (lagi !== "y") {
        moreNumbers = false;
      }
    }
    console.log("Array yang dikuadratkan:", arr);
  }
}

module.exports = NomorEmpat;
