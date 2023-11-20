
import React, { useState} from 'react'

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [location, setLocation] = useState('');


    const handleSearch = () => {
        
        onSearch(query, cuisine, location);
      };

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Search and Filter</Text>
    <TextInput
      style={styles.input}
      placeholder="Search by name or tags"
      value={query}
      onChangeText={setQuery}
    />
    <TextInput
      style={styles.input}
      placeholder="Cuisine"
      value={cuisine}
      onChangeText={setCuisine}
    />
    <TextInput
      style={styles.input}
      placeholder="Location"
      value={location}
      onChangeText={setLocation}
    />
     <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch', 
      paddingTop: 20, 
      paddingHorizontal: 20, 
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });