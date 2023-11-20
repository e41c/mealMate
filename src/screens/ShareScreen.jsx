// ShareScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShareScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Share Screen</Text>
      {/* Add sharing functionality or UI here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default ShareScreen;
