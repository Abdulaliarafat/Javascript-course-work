function add (num1,num2){
    const sum = num1 + num2;
    return sum;
}
function subtrac (num1,num2){
    const sub = num1 - num2;
    return sub;
}
function multipul (num1,num2){
    const multi = num1 * num2;
    return multi;
}
function divided (num1,num2){
    const div = num1 / num2;
    return div;
}
function calculator (a,b,operation){
       if(operation === 'add'){
        const result = add(a,b);
        return result
       }
       else if(operation === 'subtrac'){
        const result = subtrac(a,b)
        return result
       }
       else if(operation === 'multiply'){
        const result = multipul(a,b)
        return result
       }
       else if(operation === "divided"){
        const result = divided(a,b).toFixed(2)
        return result
       }
       else{
         return "Operation not allowed"
       }
}
const result = calculator(10,45,"add")
console.log(result)
