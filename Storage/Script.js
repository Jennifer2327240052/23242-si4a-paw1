let data; // deklarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu');

tampil();

function simpan(){
    let nama = document.getElementById('nama').value;
    // ambil value dari input
    let keperluan = document.getElementById('keperluan').value;
    let jk = document.getElementById('jk').value;
    console.log(keperluan);
    console.log(nama);
    console.log(jk);

    // cek local storage kosong
    if(localStorage.getItem('Ls_BukuTamu') == null){
        data = [] // buat array kosong
    } else {
        // ambil data dari  local storage kosong
        data = JSON.parse(localStorage.getItem('Ls_BukuTamu'));

    }


    data.push({Nama_Pengunjung: nama, Perlu: keperluan, jk: jk});
    // masukkan value input nama di dlm array

    localStorage.setItem('Ls_BukuTamu',JSON.stringify(data) );
    // simpan ke local storage

    // kosongkan daftar tamu
    daftar_tamu.innerHTML = '';
    // panggil fungsi tampil
    tampil();

}


function tampil(){
    localStorage.getItem('Ls_BukuTamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('Ls_BukuTamu'));


    console.log(data.length);

    document.getElementById('total_tamu').innerHTML = `Total tamu : ${data.length}`; //tampilkan data di console

    let total_laki=0;
    let total_perempuan=0;

    data.forEach((item) => {
        if(item.jk == 'L'){
            total_laki++
        } else if (item.jk == 'P'){
            total_perempuan++
        }

        daftar_tamu.innerHTML += `<li> ${item.Nama_Pengunjung} - ${item.Perlu} </li>`
    })
    document.getElementById('tamu_laki').innerHTML = `Total Tamu laki-laki: ${total_laki}`;
    document.getElementById('tamu_perempuan').innerHTML = `Total Tamu Perempuan: ${total_perempuan}`;
}