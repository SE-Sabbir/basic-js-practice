function sum (text,...numbers) {
    const result = numbers.reduce((sum , number) => sum + number, 0)
    console.log(result)
}
sum("The sum is:", 5, 10, 15, 20, 25, 30,)