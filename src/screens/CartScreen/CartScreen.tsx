import { Heading, VStack } from '@gluestack-ui/themed';
import { Container } from '../../components/elements';

import { StatusBar } from 'react-native';

export const CartScreen: React.FC = (): JSX.Element => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <VStack space="md">
          <Heading mb={12} mt="16%" size="3xl">
            Cart
          </Heading>
        </VStack>
      </Container>
    </>
  );
};
