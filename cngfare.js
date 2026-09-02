//Question -4 : Dhaka Cng Fare Meter
function getCngFare(distance, isNight=false, waitingMinutes=0){
        
        let fare=50;
        if(distance>2){
         fare += (distance-2)*15;
        }
         fare += waitingMinutes*2;
         if(isNight)
         {
            fare=fare*1.2;
         }
        return fare; 
}
  let bill=getCngFare(5,true,10);
  console.log(`CNG Fare: ${bill} Taka`);

  //Out put:
  // CNG Fare:138 Taka



