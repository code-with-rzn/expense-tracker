console.log("JavaScript is connected!");
let expenses = [];
const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseList = document.getElementById("expense-list");
const totalElement = document.getElementById("total");
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const description = descriptionInput.value;
    const amount = amountInput.value;
    const category = categoryInput.value;
    const expense = {
    description: description,
    amount: Number(amount),
    category: category
};
expenses.push(expense);
displayExpenses();
calculateTotal();

console.log(expenses);

    console.log(description);
    console.log(amount);
    console.log(category);

});
function displayExpenses() {

    expenseList.innerHTML = "";

    expenses.forEach(function(expense) {

        const listItem = document.createElement("li");

        listItem.textContent =
            expense.description + " | " +
            expense.category + " | $" +
            expense.amount;

        expenseList.appendChild(listItem);

    });
}

function calculateTotal() {

    let total = 0;

    expenses.forEach(function(expense) {

        total = total + expense.amount;

    });

    totalElement.textContent = total.toFixed(2);
}

