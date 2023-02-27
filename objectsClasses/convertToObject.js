function convertToObject(jsonString){
let jsonObj = JSON.parse(jsonString); // prevrushtame json v string

for (let key in jsonObj) { 
    let value = jsonObj[key];
    console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')