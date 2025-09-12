// Script Validasi Form Kontak
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = this.name.value.trim();
  let email = this.email.value.trim();
  let message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("⚠ Harap isi semua field sebelum submit!");
  } else {
    alert("✅ Pesan berhasil dikirim! Terima kasih, " + name + " 🙌");
    this.reset();
  }
});

// Script Kalkulator
const parameterDiv = document.getElementById("parameter");
const rumusP = document.getElementById("rumus");
const hasilP = document.getElementById("hasil");
const bangunSelect = document.getElementById("bangun");

bangunSelect.addEventListener("change", tampilkanInput);
function tampilkanInput() {
  const bangun = bangunSelect.value;
  let html = "";
  if (bangun === "persegi") {
    html = '<label>Sisi:</label><input type="number" id="sisi" class="w-full border rounded p-2">';
    rumusP.innerText = "L = s × s";
  } else if (bangun === "persegiPanjang") {
    html = '<label>Panjang:</label><input type="number" id="panjang" class="w-full border rounded p-2">' +
           '<label>Lebar:</label><input type="number" id="lebar" class="w-full border rounded p-2">';
    rumusP.innerText = "L = p × l";
  } else if (bangun === "segitiga") {
    html = '<label>Alas:</label><input type="number" id="alas" class="w-full border rounded p-2">' +
           '<label>Tinggi:</label><input type="number" id="tinggi" class="w-full border rounded p-2">';
    rumusP.innerText = "L = ½ × a × t";
  } else if (bangun === "lingkaran") {
    html = '<label>Jari-jari:</label><input type="number" id="jari" class="w-full border rounded p-2">';
    rumusP.innerText = "L = π × r²";
  } else if (bangun === "trapesium") {
    html = '<label>Sisi Sejajar 1 (a):</label><input type="number" id="a" class="w-full border rounded p-2">' +
           '<label>Sisi Sejajar 2 (b):</label><input type="number" id="b" class="w-full border rounded p-2">' +
           '<label>Tinggi (t):</label><input type="number" id="t" class="w-full border rounded p-2">';
    rumusP.innerText = "L = ½ × (a + b) × t";
  }
  parameterDiv.innerHTML = html;
}

function hitung() {
  const bangun = bangunSelect.value;
  let luas = 0;
  if (bangun === "persegi") {
    let s = +document.getElementById("sisi").value;
    luas = s * s;
  } else if (bangun === "persegiPanjang") {
    let p = +document.getElementById("panjang").value;
    let l = +document.getElementById("lebar").value;
    luas = p * l;
  } else if (bangun === "segitiga") {
    let a = +document.getElementById("alas").value;
    let t = +document.getElementById("tinggi").value;
    luas = 0.5 * a * t;
  } else if (bangun === "lingkaran") {
    let r = +document.getElementById("jari").value;
    luas = Math.PI * r * r;
  } else if (bangun === "trapesium") {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let t = +document.getElementById("t").value;
    luas = 0.5 * (a + b) * t;
  }
  hasilP.innerText = "Luas = " + luas.toFixed(2) + " " + document.getElementById("satuan").value + "²";
}

function resetForm() {
  parameterDiv.innerHTML = "";
  rumusP.innerText = "--";
  hasilP.innerText = "Isi parameter lalu klik Hitung Luas.";
}

tampilkanInput();
