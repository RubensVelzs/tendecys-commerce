import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Button,
  HStack,
  Text,
  useToast,
} from '@gluestack-ui/themed';
import React, { useContext } from 'react';
import { Content } from '../ProductCard/components/Content';
import { Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { IProductPayload } from '../../../services/types';
import { CartContext, UIContext } from '../../context';
import { Toast } from '../../elements';

export interface IActionSheetProps {
  /**
   * Function that display this component.
   */
  handleActionSheet: () => void;
  /**
   * If `true`, the component will be displayed.
   */
  isOpen: boolean;
  /**
   * If `true`, the component will have a corresponding behavior.
   */
  isToCart?: boolean;
  /**
   * Product payload props.
   */
  product: IProductPayload;
}

export const ActionSheet: React.FC<IActionSheetProps> = (
  props,
): JSX.Element => {
  const { handleActionSheet, isOpen, isToCart = false, product } = props;
  const { addToCart, deleteProduct } = useContext(CartContext);

  const toast = useToast();

  const handleAddToCartProcess = (product: IProductPayload) => {
    addToCart(product);
    handleActionSheet();
  };

  const handleDeleteProductToCartProcess = (productId: string) => {
    deleteProduct(product?.id as string);
    handleActionSheet();
  };

  const handleBuyProduct = (productId: string) => {
    toast.show({
      placement: 'top',
      render: ({ id }) => {
        const toastId = `toast-${id}`;
        return <Toast toastId={toastId} />;
      },
    });
    deleteProduct(product?.id as string);
    handleActionSheet();
  };
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={handleActionSheet}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <Content product={product} />

          {!isToCart ? (
            <Pressable
              onPress={() => handleAddToCartProcess(product)}
              style={{ marginBottom: '10%' }}
            >
              <FontAwesome name="shopping-cart" color="blue" size={40} />
            </Pressable>
          ) : (
            <HStack space="3xl">
              <Pressable
                onPress={() =>
                  handleDeleteProductToCartProcess(product?.id as string)
                }
                style={{ marginBottom: '10%' }}
              >
                <MaterialIcons
                  name="remove-shopping-cart"
                  color="blue"
                  size={40}
                />
              </Pressable>
              <Pressable
                onPress={() => handleBuyProduct(product?.id as string)}
                style={{ marginBottom: '10%' }}
              >
                <FontAwesome6 name="money-bill-wave" color="green" size={40} />
              </Pressable>
            </HStack>
          )}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};
