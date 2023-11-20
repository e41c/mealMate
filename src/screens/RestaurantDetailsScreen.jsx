import React from 'react';
import { View, Text, StyleSheet, Image,Button } from 'react-native';

const RestaurantDetailsScreen = () => {
  const restaurant = {
    name: 'Sample Restaurant',
    cuisine: 'Italian',
    address: '123 Main Street',
    image: require('./../../assets/food.jpg'), // Replace with your image path
  };

  return (
    <View style={styles.container}>
      <Image source={restaurant.image} style={styles.image} resizeMode="cover" />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
        <Text style={styles.address}>{restaurant.address}</Text>
      </View>
        <Button
          title="Give Rating"
          color="#841584"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cuisine: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: 'black',
  },
});

export default RestaurantDetailsScreen;
