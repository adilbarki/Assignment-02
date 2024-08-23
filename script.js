// Program 1: Checking Age Eligibility (AND)
// let age = parseInt(prompt("Enter your age: "));

// if (age >= 18 && age <= 60) {
//     alert("You are eligible!");
// } else {
//     alert("You are not eligible!");
// }



// Program 2: Login Access (OR)
// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");
// if (username === "admin" || password === "pass123") {
//     alert("Login successful!");
// } else {
//     alert("Invalid credentials!");
// }



// Program 3: Checking for Night Time (NOT)
// let hour = +(prompt("Enter the hour (0-23): "));
// if (!(hour >= 6 && hour <= 18)) {
//     alert("It's night time!");
// } else {
//     alert("It's day time!");
// }



// Program 4: Checking for Even or Odd num
// let num = +(prompt("Enter number: "));
// if (num % 2 === 0) {
//     alert("The number is even!");
// } else {
//     alert("The number is odd!");
// }



// Program 5: Checking for Weekend or Weekday
let day = prompt("Enter the day").toLowerCase();
let weekendDays = ["saturday", "sunday"];
let allDays = ["monday", "tuesday", "wednesday", "thursday", "friday", ...weekendDays];
if (allDays.includes(day)) {
    if (weekendDays.includes(day)) {
        alert("It's a weekend!");
    } else {
        alert("It's a weekday!");
    }
} else {
    alert("Invalid day. Please enter a day between Monday and Sanday.");
}