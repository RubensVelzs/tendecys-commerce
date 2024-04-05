import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartScreen, HomeScreen } from '../../../screens';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabNavigation: React.FC = (): JSX.Element => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarActiveTintColor: 'blue',
      }}
    >
      <Screen
        component={HomeScreen}
        name="Home"
        navigationKey="home-screen"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />

      <Screen
        component={CartScreen}
        name="Cart"
        navigationKey="cart-screen"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};
