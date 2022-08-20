class shape {

    Display()
    {
        return "Am from Generic Method";
    }
}

class square extends shape
{

    Display()
    {
        return "Am from quare Shape" ;
    }
}

class circle extends shape{
    Display()
    {
        return "Am from Circle";
    }
}

obj= new shape();
console.log(obj.Display());

obj2= new square();
console.log(obj2.Display());

obj3= new circle();
console.log(obj3.Display());
