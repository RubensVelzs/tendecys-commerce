import { useEffect, useState } from 'react';

import {
  Box,
  Divider,
  Heading,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import { Container } from '../../components/elements';

import { StatusBar } from 'react-native';
import { ProductCard } from '../../components/modules';

import { IProductPayload } from '../../services/types.d';
import { productResources } from '../../services/product';

export const HomeScreen: React.FC = (): JSX.Element => {
  const [d, setState] = useState<IProductPayload[]>([]);

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
              {d.map(({ id, ...item }) => (
                <ProductCard key={id} product={item} />
              ))}
            </VStack>
          </ScrollView>
        </VStack>
      </Container>
    </>
  );
};
