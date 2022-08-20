class Student{

    constructor(name, place)
    {
        this.name=name;
        this.place=place;
    }
}

Student.prototype.sal=25000;

Student.prototype.display=function()
                            {
                                console.log(this.name, this.place, this.sal);
                            }

obj= new Student("Rahul", "Mangalore");
//console.log(obj.name,obj.place);
obj.display();

obj2=new Student("Dravid", "Bengalore",)
obj2.display();
