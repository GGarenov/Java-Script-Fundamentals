function characterInRange(charA, charB) {
    let numFromcharA = charA.charCodeAt(0);
    let numFromcharB = charB.charCodeAt(0);

    let startIndex = numFromcharA > numFromcharB ? numFromcharB : numFromcharA;
    let endIndex = numFromcharA > numFromcharB ? numFromcharA : numFromcharB;
    buff = "";
    for (let i = startIndex + 1; i < endIndex; i++){
        buff += String.fromCharCode(i) + " "
    }
    console.log(buff)
    
}