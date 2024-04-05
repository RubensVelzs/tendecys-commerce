import {
  ToastDescription,
  Toast as T,
  ToastTitle,
  VStack,
} from '@gluestack-ui/themed';

export interface IToastProps {
  /**
   *
   */
  toastId: string;
}
export const Toast: React.FC<IToastProps> = (props): JSX.Element => {
  const { toastId } = props;
  return (
    <T action="success" nativeID={toastId} variant="solid">
      <VStack space="xs">
        <ToastTitle>Order Successfully</ToastTitle>
        <ToastDescription>
          Your order has been sent successfully
        </ToastDescription>
      </VStack>
    </T>
  );
};
