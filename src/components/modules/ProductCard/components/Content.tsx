import { Box, Divider, Heading, Text, VStack } from '@gluestack-ui/themed';
import { IProductPayload } from '../../../../services/types.d';

export interface IContentProps {
  /**
   *
   */
  product: IProductPayload;
}

export const Content: React.FC<IContentProps> = (props): JSX.Element => {
  const { product } = props;

  return (
    <Box p={12}>
      <Heading size="xl" mb={4}>
        {product?.name as string}
      </Heading>

      <Divider mb={8} />

      <VStack mb={12} space="xs">
        <Box
          mb={4}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          w="100%"
        >
          <Text fontWeight="$semibold">Price:</Text>
          <Text fontWeight="$semibold">
            {product?.price as number} {product?.currency as string}
          </Text>
        </Box>

        <Box
          mb={4}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text fontWeight="$semibold">Weigth:</Text>
          <Text fontWeight="$semibold">
            {product?.dimensions?.weight as number}
            {product?.units?.weight as string}
          </Text>
        </Box>
      </VStack>

      <Text color="$textDark700" mb={4}>
        {product?.description}
      </Text>
    </Box>
  );
};
