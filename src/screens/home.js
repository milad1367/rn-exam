import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    
    return (
      <View style={styles.container}>
          <Text>this is home screen</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
  
export default HomeScreen;