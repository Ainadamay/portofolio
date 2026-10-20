// Ambil semua slide
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let indexSekarang = 0;

// Buat titik penunjuk sesuai jumlah slide
slides.forEach(function (slide, i) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', function () {
    tampilkanSlide(i);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Fungsi menampilkan slide tertentu
function tampilkanSlide(n) {
  slides[indexSekarang].classList.remove('active');
  dots[indexSekarang].classList.remove('active');

  indexSekarang = (n + slides.length) % slides.length;  // kembali ke awal/akhir

  slides[indexSekarang].classList.add('active');
  dots[indexSekarang].classList.add('active');
}

function slideBerikutnya() {
  tampilkanSlide(indexSekarang + 1);
}

function slideSebelumnya() {
  tampilkanSlide(indexSekarang - 1);
}

// Tombol panah
document.getElementById('nextBtn').addEventListener('click', slideBerikutnya);
document.getElementById('prevBtn').addEventListener('click', slideSebelumnya);

// Geser otomatis tiap 4 detik
setInterval(slideBerikutnya, 4000);

// Tampilkan slide pertama
tampilkanSlide(0);