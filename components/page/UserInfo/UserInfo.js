import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

const SubjectBlock = ({title}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.subjectBlock}>
      <TouchableOpacity onPress={() => setShowDetails(!showDetails)} activeOpacity={1}>
        <Text style={styles.subjectTitle}>{title}</Text>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.details}>
          <Text style={styles.detailsHeader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
          <Text style={styles.detailsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
      )}
    </View>
  );
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.text}>Name Surname</Text>
        <SubjectBlock title="Information"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subjectBlock: {
    backgroundColor: '#005AF5',
    borderRadius: 25,
    padding: 16,
    marginBottom: 16,
  },
  subjectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  details: {
    marginTop: 10,
  },
  detailsHeader: {
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
    marginTop: 5,
  },
  detailsText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
  text: {
    fontSize: 32,
    padding: 10,
    marginTop: 30,
    color: '#162A4C',
  },
});