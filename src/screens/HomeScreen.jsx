// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchBar } from './SearchBar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.screenText}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RestaurantDetails')}
      >
        <Text>Go to Restaurant Details</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
  },
});

export default HomeScreen;
