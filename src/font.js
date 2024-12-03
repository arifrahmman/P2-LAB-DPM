import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FontExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Text style={styles.largeText}>This is a larger text.</Text>
      <Text style={styles.redText}>This text is red and italic.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Background color
    padding: 20, // Padding around the screen
  },
  text: {
    fontSize: 28,
    color: '#333333', // Dark grey color for text
  },
  largeText: {
    fontSize: 39,
    fontWeight: 'bold', // Corrected 'fontWeight' property
    color: '#007BFF', // Blue color for large text
    marginTop: 15, // Margin between text elements
  },
  redText: {
    fontSize: 18,
    color: 'red', // Red text color
    fontStyle: 'italic',
    textDecorationLine: 'underline', // Underlined text
    marginTop: 15, // Margin between text elements
  },
});

export default FontExample;