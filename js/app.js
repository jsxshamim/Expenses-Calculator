// getValues from input with validation
function getValue(id) {
    const getInput = document.getElementById(id);
    const getInputValue = parseInt(getInput.value);
    if (isNaN(getInputValue)) {
        throw { message: id + " input should be number" };
    } else if (getInputValue < 0) {
        throw { message: id + " input should be positive number" };
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

// Handle Expenses Calculate
document.getElementById("calculate-btn").addEventListener("click", () => {
    try {
        const salary = getValue("salary");
        const foodExpenses = getValue("food");
        const rentExpenses = getValue("rent");
        const clothExpenses = getValue("cloth");

        const totalExpenses = foodExpenses + rentExpenses + clothExpenses;
        document.getElementById("total-expenses").innerText = totalExpenses;

        const balance = salary - totalExpenses;
        document.getElementById("balance").innerText = balance;
    } catch (error) {
        console.log(error.message);
    } finally {
        resetValue("salary", "food", "rent", "cloth");
    }
});
