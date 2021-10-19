
const router = require('express').Router();

import { productController } from '../controllers';
import { authMiddleware, roleMiddleware } from '../middlewares';
import { RolesEnum } from '../constants/enums/roles.enum';

const { createProduct, getProducts } = productController;
const { checkUserRole } = roleMiddleware;
const { checkAuthToken } = authMiddleware;
const { ADMIN, USER } = RolesEnum;

router.use(checkAuthToken);

router.post('/',
  checkUserRole(ADMIN),
  createProduct);

router.get('/',
  checkUserRole(USER),
  getProducts);

export const productsRouter = router;
