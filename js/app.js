// getValues from input with validation
function getValue(id) {
    const getInput = document.getElementById(id);
    const getInputValue = parseInt(getInput.value);
    if (isNaN(getInputValue)) {
        throw { message: id + " input should be a number" };
    } else if (getInputValue < 0) {
        throw { message: id + " input should be a positive number" };
    } else {
        return getInputValue;
    }
}

// reset input value when data submitted successfully
function resetValue() {
    for (const id of arguments) {
        const getInput = document.getElementById(id);
        getInput.value = "";
    }
}

// Get Expenses Data in Object
const inputData = {};

// get Total Expenses
function getTotalExpenses() {
    const expenses = inputData.cloth + inputData.rent + inputData.food;
    return expenses;
}

// get balance
function getBalance() {
    const balance = inputData.salary - getTotalExpenses();
    return balance;
}

// Handle Expenses Calculate
document.getElementById("calculate-btn").addEventListener("click", () => {
    try {
        inputData.salary = getValue("salary");
        inputData.food = getValue("food");
        inputData.rent = getValue("rent");
        inputData.cloth = getValue("cloth");

        // set total expenses
        const totalExpenses = getTotalExpenses();
        document.getElementById("total-expenses").innerText = totalExpenses;

        // set balance
        const balance = getBalance();
        document.getElementById("balance").innerText = balance;
    } catch (error) {
        console.log(error.message);
    } finally {
        resetValue("salary", "food", "rent", "cloth");
    }
});

// Handle Saving Amount with error
document.getElementById("saving-btn").addEventListener("click", () => {
    // get saving percentage value
    const savingPercentage = getValue("saving");

    // calculate & set savings amount
    const savingAmount = (savingPercentage / 100) * inputData.salary;
    document.getElementById("saving-amount").innerText = savingAmount;

    // calculate & set remaining balance
    const remainingBalance = getBalance() - savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;

    // reset input value
    resetValue("saving");
});
