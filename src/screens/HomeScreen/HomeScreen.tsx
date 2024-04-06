import { useContext, useEffect, useState } from 'react';

import {
  Actionsheet,
  Box,
  Button,
  Divider,
  Heading,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import { Container } from '../../components/elements';

import { Pressable, StatusBar } from 'react-native';
import { ActionSheet, ProductCard } from '../../components/modules';

import { IProductPayload } from '../../services/types.d';
import { productResources } from '../../services/product';
import { CartContext, UIContext } from '../../components/context';

export const HomeScreen: React.FC = (): JSX.Element => {
  const [d, setState] = useState<IProductPayload[]>([]);
  const { isOpen, handleActionSheet } = useContext(UIContext);
  const { currentProduct, onPrepareProduct } = useContext(CartContext);

  const handleOnStartCart = (product: IProductPayload) => {
    onPrepareProduct(product);
    handleActionSheet();
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await productResources.findAll();
      const { products } = data;

      setState([...(products as IProductPayload[])]);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Heading mb={12} mt="16%" size="3xl">
          Available Products
        </Heading>
        <VStack space="md">
          <ScrollView>
            <VStack space="2xl">
              {d.map((item) => (
                <Pressable
                  key={item?.id}
                  onPress={() => {
                    handleOnStartCart(item);
                  }}
                >
                  <ProductCard product={item} />
                </Pressable>
              ))}
            </VStack>
          </ScrollView>
        </VStack>
        <ActionSheet
          handleActionSheet={handleActionSheet}
          isOpen={isOpen}
          product={currentProduct}
        />
      </Container>
    </>
  );
};
