import { NextFunction, Response } from 'express';

import { IExtendedRequest } from '../models';
import { productService } from '../services/product.service';
import { StatusCodesEnum } from '../constants';
import { documentUtil } from '../utils';

const { createProduct, getAllProducts } = productService;
const { CREATED, SUCCESS } = StatusCodesEnum;
const { normalizeDocument } = documentUtil;

export const productController = {
  createProduct: async (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const product = await createProduct({ ...req.body });

      const normalizedProduct = normalizeDocument(product.toJSON());

      res
        .status(CREATED)
        .json({ product: normalizedProduct });
    } catch (e) {
      next(e);
    }
  },

  getProducts: async (req: IExtendedRequest, res: Response, next: NextFunction) => {
    try {
      const products = await getAllProducts();

      res
        .status(SUCCESS)
        .json(products);
    } catch (e) {
      next(e);
    }
  }
};
