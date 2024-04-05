import { IProductPayload } from "../../../services/types";


export interface ICartStateProps {
  /**
   * If `true`, the state will have a loading value.
   */
  isLoading: boolean;
  /**
   * Cart payload props collection.
   */
  cart: IProductPayload[];
}

export enum CartReducerTypesEnum {
  CART_REQUEST = 'CART_REQUEST',
  CART_SUCCESS = 'CART_SUCCESS',
  CART_FAIL = 'CART_FAIL',
}
