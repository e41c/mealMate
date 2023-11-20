// HomeScreen.js
import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import { SearchBar } from './SearchBar';

const HomeScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    setIsSearching(true); 

    
    const results = [
      { id: 1, name: 'Restaurant 1' },
      { id: 2, name: 'Restaurant 2' },
      { id: 3, name: 'Restaurant 3' },
      { id: 4, name: 'Restaurant 4' },
      { id: 5, name: 'Restaurant 5' },
      { id: 6, name: 'Restaurant 6' },
      { id: 7, name: 'Restaurant 7' },
      { id: 8, name: 'Restaurant 8' },
      { id: 9, name: 'Restaurant 9' },
      { id: 10, name: 'Restaurant 10' },
      { id: 11, name: 'Restaurant 11' },
      { id: 12, name: 'Restaurant 12' },
      { id: 13, name: 'Restaurant 13' },
      { id: 14, name: 'Restaurant 14' },
      { id: 15, name: 'Restaurant 15' },
      { id: 16, name: 'Restaurant 16' },
      { id: 17, name: 'Restaurant 17' }

    ];

    setSearchResults(results);
    setIsSearching(false); 
  };

  
  useEffect(() => {
   
  }, [searchResults]);

  return (

    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} setIsSearching={setIsSearching} />
      {isSearching ? (
        <Text style={styles.loadingText}>Searching...</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.resultItem}
              onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.resultList}
        />
      )}
      {/* <View style={styles.homeContent}>
        <Text style={styles.screenText}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RestaurantDetails')}
        >
          <Text>Go to Restaurant Details</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );


    // <View>
    //   <SearchBar />
    //   <View style={styles.container}>
      
    //   <Text style={styles.screenText}>Home Screen</Text>
    //   <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate('RestaurantDetails')}
    //   >
    //     <Text>Go to Restaurant Details</Text>
    //   </TouchableOpacity>
    // </View>
    // </View>
    
  
};

const styles = StyleSheet.create({
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
