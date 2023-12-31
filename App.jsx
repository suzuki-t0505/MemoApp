import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { firebaseConfig } from './env';

// require('firbase/firestore');
initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerStyle: { backgroundColor: '#467FD3' },
        headerTitleStyle: { color: '#ffffff' },
        headerTitle: 'Memo App',
        headerTintColor: '#ffffff',
        headerBackTitle: 'Back',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="MemoList" component={MemoListScreen} />
      <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
      <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
      <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
