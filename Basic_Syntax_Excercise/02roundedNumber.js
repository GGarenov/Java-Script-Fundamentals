function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    console.log(parseFloat(number.toFixed(precision)))
}
rounding(3.1445345676434686534)
rounding(10.5,3)