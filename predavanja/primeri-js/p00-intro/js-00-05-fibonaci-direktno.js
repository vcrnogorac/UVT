let brojElemenata = 130;

let stari = 1;
let novi = 1;
console.log(stari);
console.log(novi);
let n = 2;
while (n < brojElemenata-1) {
    let temp = novi + stari;
    stari = novi;
    novi = temp;
    console.log(novi);
    n++;
}