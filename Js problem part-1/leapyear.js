// year will leap year it will divided by 4
// simple logic.............

function isLeapYear (year){
  if(year % 4 === 0){
      return true;
  }
  else{
    return false
  }
}
console.log(isLeapYear(2052))

//  if the year not divided by 100 and also dividable by 4
// then also divided by 100 offsonal.......
// 400 is actual leap year
// not match is not leapyear

function isLeapYear2 (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
     else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false
    }
}
console.log(isLeapYear2(2100))
console.log(isLeapYear2(2400))
console.log(isLeapYear2(1900))
console.log(isLeapYear2(2052))

