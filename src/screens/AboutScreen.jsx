// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>About Screen</Text>
      {/* Add information about your app/company */}
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

export default AboutScreen;
