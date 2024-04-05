import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from '@gluestack-ui/themed';
import React from 'react';
import { Content } from './Content';
import { Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { IProductPayload } from '../../../../services/types.d';

export interface IActionSheetProps {
  /**
   *
   */
  handleActionSheet: () => void;
  /**
   *
   */
  isOpen: boolean;
  /**
   *
   */
  product: IProductPayload;
}

export const ActionSheet: React.FC<IActionSheetProps> = (
  props,
): JSX.Element => {
  const { handleActionSheet, isOpen, product } = props;

  return (
    <Actionsheet isOpen={isOpen} onClose={handleActionSheet}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <Content product={product} />

        <Pressable
          onPress={() => console.log('hello')}
          style={{ marginBottom: '10%' }}
        >
          <FontAwesome name="shopping-cart" color="blue" size={40} />
        </Pressable>
      </ActionsheetContent>
    </Actionsheet>
  );
};
