import { Box } from '@gluestack-ui/themed';
import { Cover } from './components/Cover';
import { Content } from './components/Content';
import { IProductPayload } from '../../../services/types.d';
import { Pressable } from 'react-native';
import { ActionSheet } from './components/ActionSheet';
import { useState } from 'react';

export interface IProductCardProps {
  /**
   *
   */
  product: IProductPayload;
}

export const ProductCard: React.FC<IProductCardProps> = (
  props,
): JSX.Element => {
  const { product } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleActionSheet = () => setIsOpen(!isOpen);

  return (
    <>
      <Pressable onPress={handleActionSheet}>
        <Box
          bg="white"
          borderColor="$secondary400"
          borderRadius={10}
          borderWidth={0.2}
        >
          <Cover product={product} />
          <Content product={product} />
        </Box>
      </Pressable>

      <ActionSheet
        handleActionSheet={handleActionSheet}
        isOpen={isOpen}
        product={product}
      />
    </>
  );
};
