import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>nama saya arif rahman</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24,
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Teks tebal
    marginBottom: 20, // Jarak dari kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Atur lebar kontainer
  },
  box1: {
    backgroundColor: 'red', // Warna kotak 1 (bebas)
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'green', // Warna kotak 2 (bebas)
    width: 100,
    height: 100,
  },
});

export default App;
