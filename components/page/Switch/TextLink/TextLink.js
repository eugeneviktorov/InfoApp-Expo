import React, { useState } from 'react';
import { Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <Text style={stylesblock.text}>Portfolio</Text>
  );
}

const stylesblock = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    color: '#162A4C',
  },
});