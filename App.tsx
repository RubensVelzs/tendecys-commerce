import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { TabNavigation } from './src/components/modules';
import { config } from '@gluestack-ui/config';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
