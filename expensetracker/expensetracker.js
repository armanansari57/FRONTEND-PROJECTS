const expensebtn = document.getElementById("expbtn");

const expenseName = document.getElementById("expenseName");
const category = document.getElementById("category");
const amount = document.getElementById("amount");
const date = document.getElementById("date");

const expenseList = document.getElementById("expenseList");

expensebtn.addEventListener("click", addexpense);

function addexpense() {

    let expense = {
        name: expenseName.value,
        amount: Number(amount.value),
        category: category.value,
        date: date.value
    };

    let expenseItem = document.createElement("div");

    expenseItem.textContent =
        expense.name + " | ₹" +
        expense.amount + " | " +
        expense.category + " | " +
        expense.date;

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "DELETE";

    deleteBtn.addEventListener("click", function () {
        expenseItem.remove();
    });

    expenseItem.appendChild(deleteBtn);

    expenseList.appendChild(expenseItem);
}