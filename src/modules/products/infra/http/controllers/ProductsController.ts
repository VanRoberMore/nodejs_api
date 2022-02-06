


class ProductsController {
    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createProductService = new CreateProductService();

        const newProduct = await createProductService.execute(data);

        return response.json(newProduct);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { product_id } = request.params;
        const data = request.body;

        const updateProductService = new UpdateProductService();

        const dataToUpdate = { ...data, product_id: Number(product_id) };

        const productUpdated = await updateProductService.execute(dataToUpdate);

        return response.json(productUpdated);
    }

    async index(request: Request, response: Response): Promise<Response> {
        const productRepository = new ProductRepository();

        const allProducts = await productRepository.index();

        return response.json(allProducts);

    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { product_id } = request.params;

        const findProductByIdService = new FindProductByIdService();

        const productById = await findProductByIdService.execute(Number(product_id));

        return response.json(productById);

    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { product_id } = request.params;

        const deleteProductService = new DeleteProductService();

        const productById = await deleteProductService.execute(Number(product_id));

        return response.json(productById);

    }





}