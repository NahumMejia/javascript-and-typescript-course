// 13. Enum
// Create an enum State with the values: 
// Pending, Processing, Shipped, Delivered. Use this enum in a Pedido interface.

enum State {
    pending = 'Pending',
    processing = 'Processing',
    shipped = 'Shipped',
    delivered = 'Delivered',
}

interface Order {
    id: number;
    description: string;
    price: number;
    status : State;
}