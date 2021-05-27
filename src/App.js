

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

import Index from './screens/index';
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Index />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
