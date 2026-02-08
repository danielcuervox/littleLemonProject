import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#495e57',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  }
});