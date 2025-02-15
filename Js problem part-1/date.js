const today = new Date('2062-11-08');
const date = new Date('2062-10-19')
console.log(date)

// this is not right culculation
console.log(date.getMonth())
console.log(date.getDay())
// main thing..
const spacificDate = new Date(2091,0,26)
console.log(spacificDate)
spacificDate.setMonth(10)
console.log(spacificDate.toLocaleDateString('en-Us'))
