
function fibonacijevBroj(n)
{
    if( n == 1 || n==2 )
        return 1;
    let stari = 1;
    let novi = 1;
    let i = 1;
    while (i < n-1) {
        let temp = novi + stari;
        stari = novi;
        novi = temp;
        i++;
    }    
    return novi;    
}

/*
let brojElemenata = 20;
for( let i = 1; i<= brojElemenata; i++)
  console.log(fibonacijevBroj(i));
*/

let traziSe = 988;
let clan = 1;
while( fibonacijevBroj(clan) < traziSe)
    clan++;
if( fibonacijevBroj(clan) == traziSe)
    console.log( traziSe, " jeste fibonacijev broj, po redu ", clan );
else
console.log( traziSe, " nije fibonacijev broj, nalazi se izmedju ", 
  clan-1, " i ", clan, " pozicija" );
