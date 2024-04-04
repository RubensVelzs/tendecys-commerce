import { Box } from '@gluestack-ui/themed';

export interface IContainerProps {
  /**
   * Children Element.
   */
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = (props): JSX.Element => {
  const { children } = props;

  return (
    <Box padding={12} height="100%">
      {children}
    </Box>
  );
};
