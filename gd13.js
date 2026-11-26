class Karyawan {
  constructor (nama) {
  this. nama = nama;

  }

  hitungLembur(jam) {
  console.log(this.nama + " lembur " + jam + " jam, upah Rp " + (jam * 50000) + ".");
  }
}
class Programmer extends Karyawan {}

class Magang extends Karyawan {
hitungLembur(jam) {
throw new Error(this.nama + " tidak berhak lembur!");

}

}

function prosesLemburSemua(daftar) {
daftar.forEach((x) => x.hitungLembur(3));

}

// Uji coba eksekusi:
const budi = new Programmer("Budi_XXXX");
const rina = new Maganq("Rina XXXX");
prosesLemburSemua( [budi, rina]); // program crash di sini