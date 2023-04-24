import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const WorkoutList = ({ category, navigation }) => {
  const workouts = [
    { id: '1', name: 'Workout A' },
    { id: '2', name: 'Workout B' },
    { id: '3', name: 'Workout C' },
  ];

  const handleWorkoutPress = (workoutId) => {
    navigation.navigate('WorkoutDetail', { workoutId });
  };

  const renderWorkoutItem = ({ item }) => (
    <TouchableOpacity style={styles.workoutItem} onPress={() => handleWorkoutPress(item.id)}>
      <Text style={styles.workoutName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <FlatList
        data={workouts}
        renderItem={renderWorkoutItem}
        keyExtractor={(item) => item.id}
        style={styles.workoutsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  workoutsList: {
    flex: 1,
  },
  workoutItem: {
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WorkoutList;