// var cetak = document.getElementById('test');
// cetak.innerHTML = 'test print';

// function cetak(nama){
//   console.log(`Halo Coders ${nama} , Ini adalah Script`)
// }

// function kuadrat(angka) {
//   angka *= angka;
// }
// var nilai = 10;
// console.log(nilai);
// kuadrat(nilai);
// console.log(nilai);

var herbivora = new Array('kambing', 'sapi', 'kuda');
var karnivora = new Array('harimau', 'serigala', 'anjing');
var omnivora = new Array('ayam', 'monyet', 'beruang');
var binatang = new Array(herbivora, karnivora, omnivora);

binatang.forEach(function(a) {
  a.forEach(function(b) {
    console.log(b + '.');
  });
});
