import { createContext } from 'react';
import { IProductPayload } from '../../../services/types';
import { ICartStateProps } from '../../providers/CardProvider/types';

export interface ICartContextProps {
  /**
   * Function that save a product in local device storage.
   * @param {T} p - request payload.
   */
  addToCart: (p: IProductPayload) => Promise<void>;
  /**
   * Current product that will be pay or deleted of the cart.
   */
  currentProduct: IProductPayload;
  /**
   * Function that request to local storage delete a product.
   * @param {T} taskId request param.
   */
  deleteProduct: (productId: string) => void;
  /**
   * Get cart products.
   */
  getCart: () => void;
  /**
   * Function that prepare a product to payment or delete cart process.
   */
  onPrepareProduct: (product: IProductPayload) => void;
  /**
   * Cart state.
   */
  state: ICartStateProps;
}

export const CartContext = createContext({} as ICartContextProps);
