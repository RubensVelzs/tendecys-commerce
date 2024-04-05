/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductPayload } from '../../../../services/types';
import { ICartStateProps, CartReducerTypesEnum } from '../types.d';

const resquestState = {isLoading: true };
const successState = {isLoading: false };


export const initialState = {
  isLoading:false,
  cart: [] as IProductPayload[],
};

export const CartReducer = (state: ICartStateProps, action: any) => {
  switch (action.type) {
    case CartReducerTypesEnum.CART_REQUEST:
      return {
        ...state,
        ...resquestState,
      };
    case CartReducerTypesEnum.CART_SUCCESS:
      return {
        ...state,
        ...successState,
        cart: action.payload,
      };

   
    default:
      return state;
  }
};
