// for loop

const number = [,1,2,3,4,5,6,7,8]

for (let item of number) {
    if(item % 2 === 0) {
        console.log(`this is even num ${item}`)
    }
    if(item % 2 !== 0) {
        console.log(`This is odd num ${item}`)
    }
}