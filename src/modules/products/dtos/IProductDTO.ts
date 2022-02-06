export default interface IProductDTO {
    product_id?: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category_id: number;
    created_at?: Date;
    updated_at?: Date;
}
