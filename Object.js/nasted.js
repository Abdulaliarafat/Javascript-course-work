const collage = {
    name: 'Cmd',
    class: ['23', '34', '76', '78'],
    event:['seince fair', 'victory day', '21 feb'],
    uniqe: {
        color:'blue',
    result:{
        gpa: 5,
        marit: 'top'
    }
    }
}   

// console.log(collage.name)
collage.uniqe.result.marit = 'top top must'
console.log(collage.uniqe.result.marit)
collage.event[1] = '16 th december'
delete collage.class
console.log(collage)
