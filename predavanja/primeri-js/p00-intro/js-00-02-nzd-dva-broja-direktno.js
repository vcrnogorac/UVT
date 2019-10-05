let broj1 = 100000;
let broj2 = 2944;

let kandidat = broj1;
if( broj2 < broj1)
    kandidat = broj2;
while(true)
{
    if( broj1 % kandidat==0 && broj2 % kandidat == 0)
    {
        console.log("NZD za ", broj1 , " i ", broj2,
         " je ", kandidat);
        break;
    }
    kandidat--;
}