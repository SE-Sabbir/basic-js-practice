const names = ["sabbir" , "rahul" , "nahid" , "rabbi"]
names.unshift("motiur")

console.log('the result of name =>' , names)

// for loops

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// forEach fuction

names.forEach((result) => {
    console.log('result of forEach => ', result)
});