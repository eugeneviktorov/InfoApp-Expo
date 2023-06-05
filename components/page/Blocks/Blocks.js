import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';

const ButtonLink = ({ title, link }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    Linking.openURL(link);
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyle = [
    styles.button,
    isPressed && { backgroundColor: '#162A4C', opacity: 1},
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonLink title="Link 1" link="https://google.com" />
      <ButtonLink title="Link 2" link="https://facebook.com" />
      <ButtonLink title="Link 3" link="https://twitter.com" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#005AF5',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default HomeScreen;