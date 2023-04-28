import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import COLORS from "./src/views/screen/consts/colors";
import DetailsScreen from "./src/views/screen/DetailsScreen";
import OneBoardScreen from "./src/views/screen/OneBoardScreen";
import BottomNavigator from "./src/views/navigation/BottomNavigator";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false, title: 'Home'}}>
          <Stack.Screen name="BoardScreen" component={OneBoardScreen}/>
          <Stack.Screen name="Home" component={BottomNavigator} options={{headerShown: false, title: 'Home'}}/>
          <Stack.Screen name="DetailsScreen" component={DetailsScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
