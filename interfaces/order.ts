import OrderItem from "./order_item";


export default interface Order {
    id: number,
    name: string,
    address: string,
    zip: number,
    country: string,
    status: string,
    status_id: number,
    api_key: number,
    order_items: Array<OrderItem>,
};