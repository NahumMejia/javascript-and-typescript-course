//3.-User interface 
/*Create a User interface with 
properties: name, email, and an optional age. Then create an object that implements it. */

interface user {
    name: string;
    email: string;
    age?: number;
}

const user1: user = {
    name: 'nahum',
    email: 'hola@gmail.com',
    age: 20
}