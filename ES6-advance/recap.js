const products =[
    {id:1,name:'iphone',color:'black',price:1200,brand:'apple'},
    {id:2,name:'xiaomi',color:'gold',price:200,brand:'xiaomi'},
    {id:3,name:'sumsung',color:'blue',price:100,brand:'sumsang'},
    {id:4,name:'iphone',color:'black',price:1200,brand:'apple'},
    {id:5,name:'sumsung',color:'gold',price:1200,brand:'sumsung'}
]
// ...............filter.....return array with maching
const product=products.filter(p=>p.brand==='apple')
console.log(product)
// ...............find.............need object ..return..single
// const singleProduct=products.find(product=>product.id===3)
// console.log(singleProduct)
// ...............foreach............just console
// products.forEach(p=>{
//     if(p.name==='sumsung'){
//         console.log(p)
//     }
// })
// // ...............map...................need +-*...return array
// const priceIncrise=products.map(p
//     if(p.brand==='apple'){
//         p.price= p.price + 1000;
//     }
//     return p
// })
// console.log(priceIncrise)