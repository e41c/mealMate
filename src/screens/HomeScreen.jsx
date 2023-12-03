// HomeScreen.js
import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import { SearchBar } from './SearchBar';

import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [errorM, setErrorM] = useState('')




const handleSearch = (query, cuisine, location) => {

  if (!location) {
    setErrorM('Location is required');
    setIsSearching(false);
    return;
  }


    setIsSearching(true); 
    setErrorM('')

    axios.get('http://localhost:5000/search', {
    
      params: {
        term: query,
        categories: cuisine,
        location: location
       
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
