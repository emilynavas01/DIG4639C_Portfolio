import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const WorkoutCategory = ({ category, navigation }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    navigation.navigate('WorkoutsList', { category });
  };

  const categoryStyle = isSelected ? styles.categorySelected : styles.category;

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