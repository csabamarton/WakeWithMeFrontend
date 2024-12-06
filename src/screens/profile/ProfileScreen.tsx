import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {NavigationProps} from '../../types/navigation.types';

const ProfileScreen = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
