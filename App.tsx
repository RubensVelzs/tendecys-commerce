import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { TabNavigation } from './src/components/modules';
import { config } from '@gluestack-ui/config';
import { CartProvider, UIProvider } from './src/components/providers';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <CartProvider>
          <UIProvider>
            <TabNavigation />
          </UIProvider>
        </CartProvider>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
