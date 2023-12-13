import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button, Platform } from 'react-native';
import { SearchBar } from './SearchBar';
import axios from 'axios';
import { Share } from 'react-native';  // Add this import
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [errorM, setErrorM] = useState('');
  const [url, setUrl] = useState('http://localhost:5000/search')

  useEffect(() =>{
    if(Platform.OS === 'android'){
        setUrl('http://10.0.2.2:5000/search')
    }
  },[])
  const handleSearch = (query, cuisine, location) => {
    if (!location) {
      setErrorM('Location is required');
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setErrorM('');

    axios
      .get(url, {
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
        message: 'BugNinza: \nhttp://www.ytoube.com/@BugNinza',
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

      {/* Navigation to Share Screen */}
      <View style={styles.homeContent}>
        <Text style={styles.screenText}>Home Screen</Text>
        <Button title="Go to Share Screen" onPress={onShare} />
        <StatusBar style="auto" />
      </View>
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
  resultList: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
