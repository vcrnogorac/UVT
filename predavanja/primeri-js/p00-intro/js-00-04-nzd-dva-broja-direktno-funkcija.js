function nzd(a, b) {
    let k = a;
    if ( b < a)
        k = b;
    while (true) {
        if (a % k == 0 && b % k == 0)
            return k;
        k--;
    }
}

let broj1 = 100;
let broj2 = 24;

let kandidat = nzd(broj1, broj2);
console.log("NZD za ", broj1, " i ", broj2, " je ", kandidat);


let broj3 = 200;
let broj4 = 34;

let nzd4 = nzd(nzd(broj1, broj2), nzd(broj3, broj4));
console.log("NZD za ", broj1, ", ", broj2, ", ", broj3, " i ", broj4,
    " je ", nzd4);

