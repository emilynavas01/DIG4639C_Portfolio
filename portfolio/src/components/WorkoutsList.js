// This is the WorkoutsList component that displays a list of workouts based on the selected category
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WorkoutList = ({ category, navigation }) => {
  // Create a state variable to store the selected workout
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  // Define a function to handle selecting a workout
  const handleSelectWorkout = (workout) => {
    // Update the selected workout state
    setSelectedWorkout(workout);
  };

  // Create an array of workouts based on the selected category
  const workouts = [
    { name: 'Workout A', duration: '30 minutes' },
    { name: 'Workout B', duration: '45 minutes' },
    { name: 'Workout C', duration: '60 minutes' },
  ].filter((workout) => workout.category === category);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      {workouts.map((workout) => (
        <TouchableOpacity
          key={workout.name}
          style={[
            styles.workout,
            selectedWorkout === workout && styles.selectedWorkout,
          ]}
          onPress={() => handleSelectWorkout(workout)}
        >
          <Text style={styles.workoutName}>{workout.name}</Text>
          <Text style={styles.workoutDuration}>{workout.duration}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WorkoutDetail', { workout: selectedWorkout })}
        disabled={!selectedWorkout}
      >
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  workout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginVertical: 10,
  },
  selectedWorkout: {
    backgroundColor: '#ccc',
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  workoutDuration: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WorkoutList;
