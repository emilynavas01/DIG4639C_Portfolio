import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ title, navigation }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Workouts')}>
        <Text>Workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;