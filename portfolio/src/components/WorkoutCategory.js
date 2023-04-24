// This is the WorkoutCategory component that displays a list of workout categories
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

// Define WorkoutCategory component
const WorkoutCategory = ({ category, navigation }) => {
  const [isSelected, setIsSelected] = useState(false);

// Define function to handle category press
  const handlePress = () => {
    setIsSelected(!isSelected);
    navigation.navigate('WorkoutsList', { category }); // Navigate to WorkoutsList screen with category parameter
  };

  const categoryStyle = isSelected ? styles.categorySelected : styles.category;

  // Render component
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={categoryStyle}>
        <Text style={styles.categoryTitle}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  categorySelected: {
    backgroundColor: '#80bfff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WorkoutCategory;