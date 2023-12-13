import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Image } from 'react-native';
import { SearchBar } from './SearchBar';
import axios from 'axios';
import { Share } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [errorM, setErrorM] = useState('');

  const handleSearch = (query, cuisine, location) => {
    if (!location) {
      setErrorM('Location is required');
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setErrorM('');

    axios
      .get('http://10.0.2.2:5000/search', {
        params: {
          term: query,
          categories: cuisine,
          location: location,
        },
      })
      .then((response) => {
        setSearchResults(response.data.businesses);
        setIsSearching(false);
      })
      .catch((error) => {
        console.error(error);
        setIsSearching(false);
      });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Meal Mate: ' + '\n' + 'Please share our App with your friends!' + '\n' + 'http://www.MealMate.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of: ' + result.activityType + '');
        } else {
          console.log('shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderItem = ({ item }) => {
    const categories = item.categories.map((cat) => cat.title).join(', ');

    return (
      <TouchableOpacity
        style={styles.resultItem}
        onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>Cuisine: {categories}</Text>
        <Text style={styles.details}>Rating: {item.rating} Stars</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} setIsSearching={setIsSearching} />
      {errorM ? <Text style={styles.errorText}>{errorM}</Text> : null}
      {isSearching ? (
        <Text style={styles.loadingText}>Searching...</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={styles.resultList}
        />
      )}

      {/* Navigation to Share Screen and Logo */}
      <View style={styles.bottomContainer}>
        <Image source={require('../../assets/splash.png')} style={styles.logo} />
        <View style={styles.buttonContainer}>
          <Button title="Share MealMate" onPress={onShare} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    backgroundColor: 'white',
  },
  homeContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
    marginVertical: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
  },
  resultList: {
    flex: 1,
    width: '100%',
  },
  bottomContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 10,
    width: '50%', // Adjust the width as needed
  },
});

export default HomeScreen;

