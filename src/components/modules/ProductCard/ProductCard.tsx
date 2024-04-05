import { Box } from '@gluestack-ui/themed';
import { Cover } from './components/Cover';
import { Content } from './components/Content';
import { IProductPayload } from '../../../services/types.d';
import { Pressable } from 'react-native';
import { useContext, useState } from 'react';
import { UIContext } from '../../context';

export interface IProductCardProps {
  /**
   * If `true`, the component will have the corresponding beahvior.
   */
  isToCart?: boolean;
  /**
   * Product payload props.
   */
  product: IProductPayload;
}

export const ProductCard: React.FC<IProductCardProps> = (
  props,
): JSX.Element => {
  const { isToCart, product } = props;
  const { handleActionSheet } = useContext(UIContext);

  return (
    <Box
      bg="white"
      borderColor="$secondary400"
      borderRadius={10}
      borderWidth={0.2}
    >
      <Cover product={product} />
      <Content product={product} />
    </Box>
  );
};
