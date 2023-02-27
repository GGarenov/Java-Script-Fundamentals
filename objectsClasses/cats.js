function createCats(catStrings) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  
  let cats = [];
  for (let catStr of catStrings) {
    let [name, age] = catStr.split(' ');
    let cat = new Cat(name, age);
    cats.push(cat);
    cat.meow();
  }

}
