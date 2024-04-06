import { useState } from 'react';

export interface IUseDisclosureProps {
  /**
   * If `true`, the corresponding components will be displayed.
   */
  isOpen: boolean;
  /**
   * Function that display the corresponding components.
   */
  handleOpenAction:()=>void
}

export const useDisclosure = (): IUseDisclosureProps => {
  const [isDisclosure, setIsDisclosure] = useState<boolean>(false);

  const handleOpenAction = () => setIsDisclosure(!isDisclosure);
  

  return {
    isOpen: isDisclosure,
    handleOpenAction
  };
};
