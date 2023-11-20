// RestaurantDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Restaurant Details Screen</Text>
      {/* Add more details as needed */}
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

export default RestaurantDetailsScreen;
