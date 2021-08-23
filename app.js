let raceNumber = Math.floor(Math.random()*1000);
let registeredEarly = true;
let age  = 35;

// Checking if the runner didn't register early.
// Comprobando si (if) el o la corredor/a no se registró temprano.
if (registeredEarly===false){
raceNumber += 1000;}

// Checking if: person is over 18 AND registered early.
// Comprobando si (if): la persona es mayor de 18 años Y se registró temprano.
if (age>18 && registeredEarly=== true && raceNumber <1000){
  console.log(`Your race starts at 9:30 am and your race number is: ${raceNumber}`);

// Else if: registered early OR is over 18.
// Además si (Else if): se registró temprano O es mayor de 18 años.
} else if (registeredEarly=== true || age > 18){
  console.log(`Your race starts at 11:00 am and your race number is: ${raceNumber}`);
// Else if: person is under 18 AND didn't register early.
// Además si (Else if): la persona es menor de 18 Y no se registró temprano.
} else if (age < 18 && registeredEarly===false){
   console.log(`Your race starts at 12:30 pm and your race number is: ${raceNumber}`);
 } else{
   console.log('Please see the registration desk to get your number');
 }