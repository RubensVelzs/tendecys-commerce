import { useMemo, useState } from 'react';
import { UIContext } from '../../context';
import { useDisclosure } from '../../hooks';

export interface IUIProviderProps {
  /**
   * Children component to display.
   */
  children: React.ReactNode;
}

export const UIProvider: React.FC<IUIProviderProps> = (props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleActionSheet = () => setIsOpen(!isOpen);

  return (
    <UIContext.Provider value={{ isOpen, handleActionSheet }}>
      {children}
    </UIContext.Provider>
  );
};
