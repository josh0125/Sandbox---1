import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar.jpg',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
});

export default Profile;
