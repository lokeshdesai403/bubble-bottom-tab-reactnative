import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScreenStackNavigation from './src/navigation/BottomTabNavigation';
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContentStyles}>
        <NavigationContainer>
          <ScreenStackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContentStyles: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffff',
  },
});
