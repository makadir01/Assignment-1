//Question -1:Value Detective 

function describeValue(value)
{
 let type = typeof value;
 let truth_fals= value? "truthy" : "falsy";
 return `${type}| ${truth_fals}`;
}
//Function call check truthy or falsy
  console.log(describeValue("Hello"));
  //out put
  //string| truthy


//Question-2 : Bangladesh Weekend machine
function getDayType(day){
   day = day.toLowerCase();//day to convertlowercase
 switch(day){
    case "friday":
    case "saturday":
        return "Weekend Day";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        return "Working Day";
    default: 
    return "Invalid Day"  
 }
}
//function call
  console.log(getDayType("Thursday")); 
//output:
// Working Day


//Question-3 : Username getkeeper
function validUsername(user_name){
  
    if(user_name.length<4){
        return "Too Short";
    }
    if(user_name.includes(" ")){
        return "No Space Allowed";
    }
    if(user_name.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    else
    {
        return "Available";
    }
}
//function call
console.log(validUsername("kadir123"));
//output
//Available


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


//Question -5 : Run Chase Commentator

const getChaseVerdict = (target,scored, ballsLeft)=>{

    let runsNeeded= (target-scored);
    if(runsNeeded<= 0){
        return "Won";
    }
    if (ballsLeft <= 0){
        return "Lost";
    }
    let reqiredrate= (runsNeeded/ballsLeft)*6;

    let verdict;
    if(reqiredrate<=6){
        verdict="Comportable";
    }
    if(reqiredrate<=12){
        verdict="Tough";
    }
  else{
        verdict="Almost Impossible";
    }
  return `Need ${runsNeeded} Runs in ${ballsLeft} balls | ${verdict}`;
};
 console.log(getChaseVerdict(100,60,12));
 //Output
 //Need 40 Runs in 12 balls | Almost Impossible
