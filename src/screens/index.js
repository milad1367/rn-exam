import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import ItemScreen from './item';
const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeScreen}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: null,
          }}
        />
        <Stack.Screen name="Item" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;