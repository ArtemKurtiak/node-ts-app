import { Document, model, Model, Schema } from 'mongoose';

import { IProduct } from '../../models';
import { DbTablesEnum } from '../../constants';

const { PRODUCT } = DbTablesEnum;

type ProductType = IProduct & Document;

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

export const Product: Model<ProductType> = model<ProductType>(PRODUCT, ProductSchema);
