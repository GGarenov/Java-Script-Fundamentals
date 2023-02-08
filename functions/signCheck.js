function signCheck(numOne, numTwo, numThree) {
    let sign = 'Positive'
    let isNumOneNegative = numOne < 0;
    sign = checkAndChangeSign(sign, isNumOneNegative);
    let isNumTwoNegative = numTwo < 0;
    sign = checkAndChangeSign(sign, isNumTwoNegative);
    let isNumThreeNegative = numThree < 0;
    sign = checkAndChangeSign(sign, isNumThreeNegative);
    return sign;

    function checkAndChangeSign(sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        }
    }
    if (sign === 'Positive') {
        sign = 'Negative';
    } else {
        sign = 'Positive';
    }
  
}