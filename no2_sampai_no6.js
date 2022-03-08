// Jawaban no 2
//     a.karena pada saat deklarasi let terdaftar, valuenya adalah false
// sedangkan pengkondisian dalam if akan berjalan ketika value dari terdaftar
// adalah true
//     b.karena keduanya memiliki jenis deklarasi yang berbeda.variabel b memiliki
// tipe deklarasi let, sedangkan variabel nama memiliki tipe deklarasi const.
//     c.tidak.karena variabel asal berada di scope yang berbeda dengan console.log("asal diakses = " + asal);.
// Scope dari variabel asal berada pada fungsi perkenalan.

// Jawaban no 3
const foo = ['Budi', 'Sita', 'Ayu'];
[a, b, c] = foo;
console.log(a);
console.log(b);
console.log(c);

//Jawaban no 4
let bdays = ['10-17', '05-19', '20-19'];
bdays = bdays.map(bday =>
    bday.replace('-', '/'));
console.log(bdays);

//Jawaban no 5
let value = [1, 2, 3, 4, 5, 6];
value = value.map(val => val * 2);
console.log(value);

//Jawaban no 6
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map(val => Math.round(val));
console.log(arr);