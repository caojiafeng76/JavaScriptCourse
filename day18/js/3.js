class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    static getCount() {
        console.log('Show the Total Count Of Human');
    }

    sayHi() {
        console.log('My Name Is ' + this.name + ',' + this.gender + ',I\'m ' + this.age + ' Years Old');
    }

    eat() {
        console.log('I Can Eat Something');
    }
}

class Student extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);
    }

    doHomework() {
        console.log('I Should Do Some Homework Everyday');
    }
}

let stu = new Student('张三', 20, '男');
stu.sayHi();
stu.doHomework();
stu.eat();
Human.getCount();
