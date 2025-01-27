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

//Task Three
console.log("Task Three")

let employee = {
    name: "Jane Romero",
    age: 24,
    department: "Sales",
    isActive: true
};
employee.department = "HR";
employee.position = "Talent Acquisition";



console.log(employee)

//Task Four
console.log("Task Four")

let Jason = {
    name: "Jason Samoa",
    email: "JS4431@gmail.com",
    purchaseAmount: 4451,
};
let Michelle = {
    name: "Michelle Vancouver",
    email: "MVuop92@gmail.com",
    purchaseAmount: 1021,

};
let Michael = {
    name: "Michael Bublae",
    email: "MB5571@gmail.com",
    purchaseAmount: 14232,
};
let Andrew = {
    name: "Andrew Smith",
    email: "AS321@gmail.com",
    purchaseAmount: 3400
}

let customers = [Jason, Michelle, Michael]
customers.push(Andrew);


console.log(customers)

//Task Five
console.log("Task Five")

let order = {
    orderID: "45FD7",
    customerName: "Juan Lebro",
    amount: 45000,
};

let amount = order.amount
let taxAmount = amount * 0.1



console.log(order);
console.log(taxAmount);

