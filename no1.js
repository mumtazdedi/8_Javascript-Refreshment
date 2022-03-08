var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true; //jawaban soal 1b
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan(nama, a) {
    let asal = "indonesia";
    return (
        "perkenalkan nama saya " + nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

/* jawaban no. 1a */
console.log("array = " + lengkap_arr[2]);

/* console.log("asal diakses = " + asal); */
console.log("a adalah = " + a);
console.log("b adalah = " + b);

/* jawaban no. 1c */
console.log(perkenalan(nama, a));