// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementByid('sapa')
//2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
  //3. Jalan kode ini iketika tombol di-klik
  alert('Halo! Thanks for visting')
});
