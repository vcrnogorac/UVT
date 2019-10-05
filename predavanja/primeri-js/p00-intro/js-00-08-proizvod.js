function proizvodFor(pocetak, kraj, korak) {
    let p = 1;
    for (let i = pocetak; i <= kraj; i+=korak)
        p *= i;
    return p;
}

console.log("Proizvod brojeva (pomocu for ciklusa) je ",
    proizvodFor(1,17,3));
