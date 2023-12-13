import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const MapScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:5000/search', {
          params: {
            location: `${restaurant.coordinates.latitude},${restaurant.coordinates.longitude}`,
          },
        });
        setNearbyPlaces(response.data.businesses);
      } catch (error) {
        console.error('Error fetching nearby places:', error);
      }
    };

    fetchNearbyPlaces();
  }, [restaurant.coordinates]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: restaurant.coordinates.latitude,
          longitude: restaurant.coordinates.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: restaurant.coordinates.latitude,
            longitude: restaurant.coordinates.longitude,
          }}
          title={restaurant.name}
        />
        {nearbyPlaces.map((place) => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.coordinates.latitude,
              longitude: place.coordinates.longitude,
            }}
            title={place.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
