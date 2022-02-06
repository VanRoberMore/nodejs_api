import IOrder_ProductDTO from './IOrder_ProductDTO';


export default interface IOrderDTO {
    order_id?: number;
    client_id: number;
    date: Date;
    status: string;
    payment_method: string;
    order_value: number;
    discount: number;
    products: IOrder_ProductDTO[];
}

