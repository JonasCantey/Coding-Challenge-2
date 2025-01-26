//Task 1
console.log("Task One");

let products = ["Keyboard", "Mouse", "Headset", "Desk", "Monitor"]
products.push("MousePad")
products.pop()



console.log(products);


//Task 2
console.log("Task Two")

let scores = [80, 59, 90, 93, 74]
scores [1] = 69

const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / scores.length;
 
console.log(scores)
console.log(average);