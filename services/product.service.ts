import { IProduct } from '../models';
import { Product } from '../database';

export const productService = {
  createProduct: (data: Partial<IProduct>) => {
    const product = new Product(data);

    return product.save();
  },

  getAllProducts: async () => {
    const products = await Product.find();

    return products;
  }
};
