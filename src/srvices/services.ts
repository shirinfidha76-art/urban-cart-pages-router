import { ServiceBase } from "../srvices/service_base"

export class ProductService extends ServiceBase {

    static getProducts = async () => {
        const productResp = await fetch(
            this.getUrl("/products")
        );

        const data = await productResp.json();

        return data.products;
    };

    static getProductById = async (id: number) => {
        const productResp = await fetch(
            this.getUrl(`/products/${id}`)
        );

        const product = await productResp.json();

        return product;
    };
}