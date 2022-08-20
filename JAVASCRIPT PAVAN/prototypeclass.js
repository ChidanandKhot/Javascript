class Student {

    constructor(email, name)
    {
        this.email=email;
        this.name=name;
    }
}

Student.prototype.age=23;   // we can add properties to class by using prototype and we can call it anywhere.

obj=new Student("test@gmail.com", "Virat");
console.log(obj.email ,obj.name, obj.age);
//console.log(obj.age);

obj2=new Student("test2@gamil.com","Dhoni",);
//obj2.place="Bengalore";

console.log(obj2.email, obj2.name, obj.age );

