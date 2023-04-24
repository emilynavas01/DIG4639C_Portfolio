// This is the Profile component that displays user information and progress
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Profile = () => {
  // Declare the state variable 'progress' using the 'useState' hook
  const [progress, setProgress] = useState(0);

  // Declare a function to update the 'progress' state
  const handleUpdateProgress = () => {
    // Increment the 'progress' state by 1
    setProgress(progress + 1);
  };

  return (
    <View>
      {/* Display user information */}
      <Text>Name: John Doe</Text>
      <Text>Age: 25</Text>
      <Text>Height: 5'10"</Text>
      <Text>Weight: 160 lbs</Text>

      {/* Display user progress */}
      <Text>Workouts completed: {progress}</Text>
      <Text>Weight lifted: 1000 lbs</Text>

      {/* Button to update progress */}
      <Button title="Complete Workout" onPress={handleUpdateProgress} />
    </View>
  );
};

export default Profile;
