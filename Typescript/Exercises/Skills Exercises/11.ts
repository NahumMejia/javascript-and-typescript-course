//11.-Literal Types
//Create a Direction type that only accepts the values: "north", "south", "east", "west". 
// Then create a function that accepts this type.

type Direction = "North" | "South" | "East" | "West";

function mover(value:Direction){
    console.log(`Moving to ${value}`);
}