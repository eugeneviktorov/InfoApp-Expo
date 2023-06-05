import React, { useState } from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import UserInfo from './UserInfo/UserInfo';
import Blocks from './Blocks/Blocks';
import Switch from './Switch/Switch';
import TextLink from './Switch/TextLink/TextLink';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <UserInfo />
      <TextLink />
      <Switch />
      <Blocks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});