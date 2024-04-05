import { createContext } from 'react';

export interface IUIContextProps {
  /**
   * If `true`, the corresponding components will be displayed.
   */
  isOpen: boolean;
  /**
   * Function that display the corresponding components.
   */
  handleActionSheet: () => void;
}

export const UIContext = createContext({} as IUIContextProps);
