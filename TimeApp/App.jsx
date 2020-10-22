import 'react-native-gesture-handler';
import * as React from 'react';
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomStackNavigator from './src/routes/BottomStackNavigator';
import SignIn from './src/screens/SignIn';

const Stack = createStackNavigator();

const App = () => {
     const isSignedIn = false;
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
      {isSignedIn ? (
        <Stack.Screen  name="BottomStackNavigator" component={BottomStackNavigator} />
      ) : (
          <Stack.Screen  name="SignIn" component={SignIn} />
      )}
      <Stack.Screen  name="BottomStackNavigator" component={BottomStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

App.propTypes = {
  color: PropTypes.string,
}
export default App;