import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';

import CustomButton from '../components/Button';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
        <Header title="Welcome to My App" />
        <Text style={styles.title}>HomeScreen</Text>
        <View style={styles.container}>
      
            <CustomButton title="Press Me" onPress={() => alert('Button pressed!')} />

            <Text style={styles.text}>You clicked {count} times</Text>


            <Button
                onPress={() => setCount(count + 1)}
                title="Click me!"
            />
      
            <StatusBar style="auto" />
        </View>
        <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
