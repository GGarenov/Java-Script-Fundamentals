function passwordValidator(password) {
    let hasValidateLength = validateLength(password);
    let hasValidSpecialChar = validateNonSpecialChar(password);
    let hasValidDigit = checkForTwoNumbers(password);
    printResult(hasValidateLength, hasValidSpecialChar, hasValidDigit)
    // · "Password must be between 6 and 10 characters"
    function validateLength(password) {
        return password.length >= 6 && password.length <= 10
    }
    // · "Password must consist only of letters and digits"
    function validateNonSpecialChar(text) {
        for (let char of text) {
            let num = char.charCodeAt(0)
            let isLowerChar = checkCharForLowerCase(num);
            let isUpperChar = checkCharForUpperCase(num);
            let isNumber = checkContainNumber(num);
            if (!isLowerChar && !isUpperChar && !isNumber) {
                return false;
            }
        }
        return true;
    }
    function checkContainNumber(num) {
        return num >= 48 && num <= 57
    }
    function checkCharForUpperCase(num) {
        return num >= 65 && num <= 90;
    }
    function checkCharForLowerCase(num) {
        return num >= 97 && num <= 122
    }
    // · "Password must have at least 2 digits"

    function checkForTwoNumbers(password) {
        let counter = 0;
        for (let ch of password) {
            let isNumber = checkContainNumber(ch.charCodeAt(0))
            if (isNumber) {
                counter++;
            }
        }
        return counter >= 2
    }
    function printResult(validLength, validSymbol, validDigit) {
        if (!validLength) {
            console.log("Password must be between 6 and 10 characters")
        }
        if (!validSymbol) {
            console.log("Password must consist only of letters and digits")
        }
        if (!validDigit) {
            console.log("Password must have at least 2 digits")
        }
        if (validLength && validSymbol && validDigit) {
            console.log("Password is valid")
        }
    }
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')