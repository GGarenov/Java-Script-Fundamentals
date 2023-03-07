function towns(data) {
    let obj = {};
    for (let name of data) {
        obj[name] = name.length;
    }
    // console.log(obj)
    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key}`)
    }
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])