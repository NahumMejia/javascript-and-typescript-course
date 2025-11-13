//8.- Class with Inheritance
/*Create a class Animal with a method makeSound(), 
and child classes Dog and Cat that override this method.*/

class Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    makeSound(): void {
        console.log("Generic Sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Wof Wof wof');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Meow Meow');
    }
}

const perro = new Dog("Firulais");
perro.makeSound();

const gato = new Cat("Michi");
gato.makeSound();
