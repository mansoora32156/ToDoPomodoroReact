import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainScreen from './Components/MainScreen';
import { TodoProvider } from './Components/TodoContext';
import Pomodoro from './Pomodoro';


const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="To-Do" component={TodoScreen} />
        <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};



const TodoScreen = () => {
  return (
    <TodoProvider>
      <MainScreen />
    </TodoProvider>
  );
};

const PomodoroScreen = () => {
  return <Pomodoro />;
};

export default App;
