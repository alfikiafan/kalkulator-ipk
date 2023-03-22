function konversiNilai(nilaiElemen, nilaiHurufElemen) {
    const nilai = document.getElementById(nilaiElemen);
    const nilaiHuruf = document.getElementById(nilaiHurufElemen);
    nilai.addEventListener("change", function() {
      switch (this.value) {
        case "4":
          nilaiHuruf.innerHTML = "A";
          break;
        case "3":
          nilaiHuruf.innerHTML = "B";
          break;
        case "2":
          nilaiHuruf.innerHTML = "C";
          break;
        case "1":
          nilaiHuruf.innerHTML = "D";
          break;
        case "0":
          nilaiHuruf.innerHTML = "E";
          break;
        default:
          nilaiHuruf.innerHTML = "";
          break;
      }
    });
  }
  konversiNilai("nilai1", "nilaihuruf1");
  konversiNilai("nilai2", "nilaihuruf2");
  konversiNilai("nilai3", "nilaihuruf3");
  konversiNilai("nilai4", "nilaihuruf4");
  konversiNilai("nilai5", "nilaihuruf5");

  function hitungIPK() {
    // Inisialisasi array sks dan nilai
    var sks = [];
    var nilai = [];

    // Mendapatkan nilai dari inputan dan menyimpan ke dalam array
    for (var i = 1; i <= 5; i++) {
      sks[i] = parseInt(document.getElementById("sks" + i).value);
      sks[i] = isNaN(sks[i]) ? 0 : sks[i];
      nilai[i] = document.getElementById("nilai" + i).value;
      nilai[i] = isNaN(nilai[i]) ? 0 : nilai[i];
    }

    // Menghitung nilai bobot
    var bobot = [];
    for (var i = 1; i <= 5; i++) {
      bobot[i] = nilai[i];
    }

    // Menghitung nilai total SKS dan nilai bobot
    var totalSks = 0;
    var totalBobot = 0;
    for (var i = 1; i <= 5; i++) {
      totalSks += sks[i];
      totalBobot += bobot[i] * sks[i];
    }

    // Menghitung IPK
    var ipk = totalBobot / totalSks;
    ipk = isNaN(ipk) ? 0 : ipk;
    ipkTampil = ipk.toFixed(2);
  
    // Menampilkan hasil IPK
    document.getElementById("hasil").innerHTML = "IPK Anda: " + ipkTampil.replace(".", ",");
  }