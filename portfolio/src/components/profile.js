import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  const [weightLifted, setWeightLifted] = useState(0);

  const handleSaveProfile = () => {
    // handle save profile logic here
  }

  const handleWorkoutComplete = () => {
    setWorkoutsCompleted(workoutsCompleted + 1);
  }

  const handleWeightLifted = (value) => {
    setWeightLifted(value);
  }

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Text>Age:</Text>
      <TextInput
        value={age}
        onChangeText={(value) => setAge(value)}
      />
      <Text>Height:</Text>
      <TextInput
        value={height}
        onChangeText={(value) => setHeight(value)}
      />
      <Text>Weight:</Text>
      <TextInput
        value={weight}
        onChangeText={(value) => setWeight(value)}
      />
      <TouchableOpacity onPress={handleSaveProfile}>
        <Text>Save Profile</Text>
      </TouchableOpacity>
      <Text>Workouts Completed: {workoutsCompleted}</Text>
      <TouchableOpacity onPress={handleWorkoutComplete}>
        <Text>Complete Workout</Text>
      </TouchableOpacity>
      <Text>Weight Lifted: {weightLifted}</Text>
      <TextInput
        keyboardType="numeric"
        value={weightLifted}
        onChangeText={handleWeightLifted}
      />
    </View>
  );
}

export default Profile;