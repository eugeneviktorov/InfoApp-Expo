import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Swiper from 'react-native-swiper';

const MenuBlock = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={stylesblock.square} onPress={onPress} activeOpacity={1}>
      <Text style={stylesblock.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const handlePressLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <Swiper style={stylesblock.wrapper} initialPage={0} loop={false} showsPagination={true}>
      <View style={stylesblock.row}>
        <MenuBlock title="Project 1" onPress={() => handlePressLink('https://google.com')}/>
        <MenuBlock title="Project 2" onPress={() => handlePressLink('https://google.com')}/>
      </View>

      <View style={stylesblock.row}>
        <MenuBlock title="Project 3" onPress={() => handlePressLink('https://google.com')}/>
        <MenuBlock title="Project 4" onPress={() => handlePressLink('https://google.com')}/>
      </View>
    </Swiper>
  );
}

const stylesblock = StyleSheet.create({
  wrapper:{
    height: 130,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  square: {
    width: '45%',
    aspectRatio: 2,
    backgroundColor: '#005AF5',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});