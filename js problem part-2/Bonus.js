const num = [45,65,23,47]
// for(let i = 0; i  < num.length; i++){
//     const number = num[1];
// }
for(const number of num){
    
}
const products = [
    {id:1,name:'walton phone',price:19000},
    {id:2,name:'xiomi',price:21000},
    {id:3,name:'i-phone  laptop',price:119000},
    {id:4,name:'one-plus Laptop',price:100000},
    {id:5,name:'panasonic phone',price:29000},
    {id:6,name:'sumsung',price:10000},
    {id:7,name:'sempony Phone',price:9000},
    {id:8,name:'nokia-11 Phone',price:17000},
];

function matchProduct(products,search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
const result = matchProduct(products,'laptop')
console.log(result);