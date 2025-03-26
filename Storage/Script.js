let data; // deklarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu');

tampil();

function simpan(){
    let nama = document.getElementById('nama').value;
    // ambil value dari input
    let keperluan = document.getElementById('keperluan').value;
    console.log(keperluan);
    console.log(nama);

    // cek local storage kosong
    if(localStorage.getItem('Ls_BukuTamu') == null){
        data = [] // buat array kosong
    } else {
        // ambil data dari  local storage kosong
        data = JSON.parse(localStorage.getItem('Ls_BukuTamu'));

    }

    
    data.push({Nama_Pengunjung: nama, Perlu: keperluan}); 
    // masukkan value input nama di dlm array

    // kosongkan daftar tamu
    daftar_tamu.innerHTML = '';
    // panggil fungsi tampil
    tampil();
    
    localStorage.setItem('Ls_BukuTamu',JSON.stringify(data) );
    // simpan ke local storage
}


function tampil(){
    localStorage.getItem('Ls_BukuTamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('Ls_BukuTamu'));

    data.forEach((item) => {
        daftar_tamu.innerHTML += `<li> ${item.Nama_Pengunjung} - ${item.Perlu} </li>`
    })
}