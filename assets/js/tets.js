function user(name, add, age) {
    this.name = name;
    this.add = add;
    this.age = age;
}

const a = new user();
a.name = 'nhan';
a.age = 15;
a.add = 'asda';
console.log(a);