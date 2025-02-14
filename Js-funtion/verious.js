//  giveing you a string tell me it even or not
function evensizestring (str){
    
    const size = str.length
    console.log(size)
    if(size % 2 === 0){
        console.log('even size')
        return true
    }
    else{
        console.log('odd size')
        return false
    }
}
// console.log(evensizestring('Dhaka')) 
// console.log(evensizestring('chattogram')) 

function doDubboleOrTeippl(number, doDubble){
    if(doDubble === true){
        const result = number * 2;
        return result
    }
    else{
        const  result = number * 3;
        return result;
    }
}
// console.log(doDubboleOrTeippl(10, true))
// console.log(doDubboleOrTeippl(10, false))

function numberFoEelement (number){
    const len = number.length;
    return len
}
console.log(numberFoEelement([12,4223,345,345,65,6,]))

function getAge(person){
    const age = person.age;
    return age
}