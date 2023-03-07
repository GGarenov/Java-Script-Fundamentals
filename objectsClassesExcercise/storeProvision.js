function storeProvision(store, orderStore) {
    let myStore = {}
    for (i = 0; i < store.length; i += 2){
        let name = store[i];
        let quanitity = store[i + 1];
        myStore[name] = Number(quanitity);
    }
    
    for (i = 0; i < orderStore.length; i += 2){
        let name = orderStore[i];
        let quanitity = Number(orderStore[i + 1]);
        if (myStore.hasOwnProperty(name)) {
            myStore[name] += quanitity;
        } else {
            myStore[name] = quanitity
        }
    } 

    for (let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`)
    }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])