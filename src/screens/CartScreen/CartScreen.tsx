import { Heading, Spinner, VStack } from '@gluestack-ui/themed';
import { Container } from '../../components/elements';

import { ScrollView } from '@gluestack-ui/themed';
import { ActionSheet, ProductCard } from '../../components/modules';
import { useContext } from 'react';
import { CartContext } from '../../components/context/CartContext';
import { Text } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';
import { IProductPayload } from '../../services/types.d';
import { UIContext } from '../../components/context';

export const CartScreen: React.FC = (): JSX.Element => {
  const { isOpen, handleActionSheet } = useContext(UIContext);
  const {
    currentProduct,
    onPrepareProduct,
    state: cartState,
  } = useContext(CartContext);
  const { cart } = cartState;

  const handleOnCheckCartProduct = (product: IProductPayload) => {
    onPrepareProduct(product);
    handleActionSheet();
  };

  return (
    <>
      <Container>
        <Heading mb={12} mt="16%" size="3xl">
          Cart List
        </Heading>
        {cart.length !== 0 ? (
          <>
            <VStack space="md">
              <ScrollView>
                {cartState?.isLoading ? (
                  <Spinner size="large" />
                ) : (
                  <VStack space="2xl">
                    {cart.map((item) => (
                      <Pressable
                        key={item?.id}
                        onPress={() => {
                          handleOnCheckCartProduct(item);
                        }}
                      >
                        <ProductCard product={item} />
                      </Pressable>
                    ))}
                  </VStack>
                )}
              </ScrollView>
            </VStack>

            <ActionSheet
              handleActionSheet={handleActionSheet}
              isOpen={isOpen}
              isToCart
              product={currentProduct}
            />
          </>
        ) : (
          <Text
            color="$secondary300"
            fontWeight="$semibold"
            textAlign="center"
            size="3xl"
            top="30%"
          >
            Cart list empty
          </Text>
        )}
      </Container>
    </>
  );
};
