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
