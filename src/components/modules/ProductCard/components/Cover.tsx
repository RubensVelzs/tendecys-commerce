import { Image } from '@gluestack-ui/themed';
import { IProductPayload } from '../../../../services/types.d';

export interface ICoverProps {
  /**
   * Product payload props.
   */
  product: IProductPayload;
}

export const Cover: React.FC<ICoverProps> = (props): JSX.Element => {
  const { product } = props;
  return (
    <Image
      alt=""
      borderTopLeftRadius={10}
      borderTopRightRadius={10}
      h={200}
      mb={6}
      source={{
        uri: product?.imageUrl as string,
      }}
      w="100%"
    />
  );
};
