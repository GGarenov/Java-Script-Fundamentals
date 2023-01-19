function solve(n) {
    for (let row = 1; row <= n; row++){
        let buff = "";
        for (let column = 0; column < row; column++){
            buff += row + " ";

        }
        console.log(buff)
    }
}
solve(3);
console.log('-----------------------')
solve(4);