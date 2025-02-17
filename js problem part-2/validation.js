function multiply(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
       return 'Please provid a number'
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply('5','number')
// console.log(result)
 function fullName(first,second){
    if(typeof first !== 'string'){
        return 'first name is string'
    }
    else if(typeof second !== "string"){
        return 'second name is string'
    }
    const full = first + ' ' + second;
    return full;
 }
 const fullNa = fullName('Rahat','rafat')
//  console.log(fullNa)
function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provid a object'
    }
    console.log(typeof product)
    const price = product.price;
    return price
}
// const price = getPrice({name:'scrabing stic', price: 300, color:'blue'});
// const price = getPrice(5)
// console.log(price)
function getSecond(number){
    if(Array.isArray(number) === false){
        return 'please provid an array'
    }
    const second = number[3];
    return second
}
const resultArr = getSecond([12,12,34,45])
console.log(resultArr)
