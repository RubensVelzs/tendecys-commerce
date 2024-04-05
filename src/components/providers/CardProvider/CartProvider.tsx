/* eslint-disable no-underscore-dangle */
import { useEffect, useReducer, useState } from 'react';
import { CartReducer, initialState } from './reducers';
import { IProductPayload } from '../../../services/types';
import { CartContext } from '../../context/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartReducerTypesEnum } from './types.d';

export interface ICartProviderProps {
  /**
   * Children component to display.
   */
  children: React.ReactNode;
}

export const CartProvider: React.FC<ICartProviderProps> = (
  props,
): JSX.Element => {
  const { children } = props;

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const [currentProduct, setCurrentProduct] = useState<IProductPayload>(
    {} as IProductPayload,
  );

  const onPrepareProduct = (product: IProductPayload) => {
    setCurrentProduct(product);
  };

  const getCart = async () => {
    try {
      dispatch({ type: CartReducerTypesEnum.CART_REQUEST });

      const storagedValue = await AsyncStorage.getItem('cart');
      const data = JSON.parse(storagedValue as string);

      if (data?.length !== 0) {
        dispatch({
          type: CartReducerTypesEnum.CART_SUCCESS,
          payload: data as IProductPayload[],
        });
      }
    } catch (e) {
      dispatch({ type: CartReducerTypesEnum.CART_FAIL });
    }
  };

  const addToCart = async (p: IProductPayload) => {
    try {
      dispatch({ type: CartReducerTypesEnum.CART_REQUEST });

      const isInCart = state?.cart?.some(
        (product: IProductPayload) => product?.id === p?.id,
      );

      if (!isInCart) {
        await AsyncStorage.setItem('cart', JSON.stringify([...state?.cart, p]));
        const storagedValue = await AsyncStorage.getItem('cart');
        const data = JSON.parse(storagedValue as string);

        dispatch({
          type: CartReducerTypesEnum.CART_SUCCESS,
          payload: data as IProductPayload[],
        });
      }
    } catch (e) {
      dispatch({ type: CartReducerTypesEnum.CART_FAIL });
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      dispatch({ type: CartReducerTypesEnum.CART_REQUEST });

      const cartFiltered = state?.cart?.filter(
        (product: IProductPayload) => product.id !== productId,
      );

      await AsyncStorage.setItem('cart', JSON.stringify(cartFiltered));
      const storagedValue = await AsyncStorage.getItem('cart');
      const data = JSON.parse(storagedValue as string);

      dispatch({
        type: CartReducerTypesEnum.CART_SUCCESS,
        payload: data as IProductPayload[],
      });
    } catch (e) {
      dispatch({ type: CartReducerTypesEnum.CART_FAIL });
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        currentProduct,
        getCart,
        deleteProduct,
        onPrepareProduct,
        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
