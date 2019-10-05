function sumaFor(n) {
    let s = 0;
    for (let i = 1; i <= n; i++)
        s += i;
    return s;
}

function sumaWhile(n) {
    let i = 1;
    let s = 0;
    while (i <= n) {
        s += i;
        i++;
    }
    return s;
}

function sumaDoWhile(n) {
    let i = 1;
    let s = 0;
    do {
        s += i;
        i++;
    }
    while (i <= n);
    return s;
}

function sumaNajbrze(n) {
    return (n*(n+1))/2;
}


let n = 100;
console.log("Suma prvih ", n, " brojeva (pomocu for ciklusa) je ",
    sumaFor(n));
n = 101;
console.log("Suma prvih ", n, " brojeva (pomocu while ciklusa) je ",
    sumaWhile(n));
n = 102;
console.log("Suma prvih ", n, " brojeva (pomocu do-while ciklusa) je ",
    sumaDoWhile(n));
n = 103;
console.log("Suma prvih ", n, " brojeva (matematicki) je ",
    sumaNajbrze(n));
