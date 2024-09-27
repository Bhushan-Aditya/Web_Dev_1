const budgetInput = document.getElementById("budget");
const setBudgetButton = document.getElementById("set-budget");
const budgetAmount = document.getElementById("budget-amount");
const remainingAmount = document.getElementById("remaining-amount");
const budgetMessage = document.getElementById("budget-message");

const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const addExpenseButton = document.getElementById("add-expense");
const expensesList = document.getElementById("expenses-list");

let budget = 0;
let remaining = 0;

setBudgetButton.addEventListener("click", () => {
    budget = parseFloat(budgetInput.value);
    if (isNaN(budget) || budget <= 0) {
        budgetMessage.textContent = "Please enter a valid budget.";
        return;
    }
    remaining = budget;
    updateBudgetDisplay();
    budgetMessage.textContent = "";
});

addExpenseButton.addEventListener("click", () => {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description.trim() === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    remaining -= amount;
    updateBudgetDisplay();

    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${description}: ₹${amount}`;
    expensesList.appendChild(expenseItem);

    descriptionInput.value = "";
    amountInput.value = "";
});

function updateBudgetDisplay() {
    budgetAmount.textContent = budget;
    remainingAmount.textContent = remaining;

    if (remaining < 0) {
        remainingAmount.style.color = "red";
        budgetMessage.textContent = "You have exceeded your budget!";
    } else {
        remainingAmount.style.color = "black";
        budgetMessage.textContent = "";
    }
}