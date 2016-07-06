function Human() {
    this.name = 'Unknown';
    this.age = 'Unknown';
    this.gender = 'Unknown';
    this.height = 'Unknown';
    this.weight = 'Unknown';
}

function Worker() {
    this.company = 'Terrasoft';
    this.salary = 'Unknown';
    this.work = function () {
        return 'work!!!';
    }
}

function Student() {
    this.course = 'GoFrontend';
    this.scholarship = 'Unknown';
    this.watch = function () {
        return 'watch TV shows!!!';
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var Ihor = new Worker();

Ihor.name = 'Ihor';
Ihor.salary = '$2000';
console.log(Ihor);
console.log('Ihor.age -----', Ihor.age);
console.log('Ihor.gender -----', Ihor.gender);

var Roman = new Worker();
Roman.name = 'Roman';
Roman.salary = '$1000';
console.log(Roman);
console.log('Roman.age -----', Roman.age);
console.log('Roman.gender -----', Roman.gender);

var Max = new Student();
Max.name = 'Max';
Max.scholarship = '$400';
console.log(Max);
console.log('Max.age -----', Max.age);
console.log('Max.gender -----', Max.gender);

var Irina = new Student();
Irina.age = 18;
Irina.scholarship = '$200';
console.log(Irina);
console.log('Irina.age -----', Irina.age);
console.log('Irina.gender -----', Irina.gender);