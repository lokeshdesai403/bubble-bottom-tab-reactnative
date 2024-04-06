import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {Constants} from '@app/constants';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const ScreenStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Constants.BOTTOM_TAB_NAVIGATION}
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};

export default ScreenStackNavigation;

const styles = StyleSheet.create({});
