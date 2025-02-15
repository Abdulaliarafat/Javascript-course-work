// 12 inch 1 feet
// explining to 6.25 inch.......
function inchToFeet(inch){
    const feet = inch / 12;
    // const feet = inch * 0.0823333
    return feet;
}
// const manhight = inchToFeet(75);
// console.log(manhight);

// explining to 6 ft and 3 inch........

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumbeer = parseInt(feetFraction);
    const inchRemining = inch % 12;
    const result = feetNumbeer +' ft ' + inchRemining + ' inch';
    return result;

}
// console.log(inchToFeet2(75));
 function mailKilo(mile){
    const kilo = mile * 1.60934;
    return kilo;
 }
 console.log(mailKilo(20).toFixed(2))

  function kiloToMile(kilo){
    const mile = kilo * 0.621371;
    return mile
  }
  console.log(kiloToMile(70).toFixed(2))