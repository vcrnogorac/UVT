let broj1 = 100;
let broj2 = 294;

let kandidat = broj1;
if( broj2 > broj1)
    kandidat = broj2;
while(true)
{
    if( kandidat % broj1 ==0 && kandidat % broj2 == 0)
    {
        console.log("NZS za ", broj1 , " i ", broj2,
         " je ", kandidat);
        break;
    }
    kandidat++;
}