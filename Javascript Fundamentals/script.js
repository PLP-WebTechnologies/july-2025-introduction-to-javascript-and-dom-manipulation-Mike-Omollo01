// Part 1: Variable declarations and conditionals
let age = 20;
const isAdult = age >= 18;

const statusText = document.getElementById('status');
if (isAdult) {
    statusText.textContent = "You are an adult.";
} else {
    statusText.textContent = "You are not an adult.";
}

// Part 2: Custom functions

// Function to greet user
function greetUser() {
    alert("Hello! Welcome to the JavaScript Assignment.");
}

// Function to add items to the list
function addItemsToList(items) {
    const list = document.getElementById('itemsList');
    list.innerHTML = ""; // Clear existing items
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// Attaching event listener to button
document.getElementById('greetBtn').addEventListener('click', greetUser);

// Part 3: Loop examples

// Example 1: For loop counting from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

// Example 2: While loop counting down from 5
let countdown = 5;
while (countdown > 0) {
    console.log(`While loop countdown: ${countdown}`);
    countdown--;
}

// Part 4: DOM interactions

// Interaction 1: Changing text content based on condition (see above)

// Interaction 2: Adding items to a list dynamically
const fruits = ["Apple", "Banana", "Cherry"];
addItemsToList(fruits);

// Interaction 3: Event listener on button (see above)
