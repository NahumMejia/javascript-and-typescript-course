//9.-Utility Types
/*Use Partial<T> and Required<T> to create variations of a 
Product interface with properties: id, name, price, and description. */

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type NonRequired = Partial<Product>;

const productVariationOne: NonRequired =  {
    price: 100.0
}

type AllRequired = Required<Product>;

const productVariationTwo: AllRequired = {
    id: 1,
    name: 'VASO',
    price: 100.0,
    description: 'Vaso mamalon',
}
