function solve(sumNumber) {
    let sumNumberString = sumNumber.toString();
    let sum = 0;
    for (let i = 0; i < sumNumberString.length; i++) {
        sum += Number(sumNumberString[i])
  
    }
    console.log(sum)

}
solve(55)