import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const ViewCartBtn = ({ active }) => {
  return (
    active && (
      <View activeOpacity={1} style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            View Cart

            {"    -> "}

          </Text>
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    position: 'absolute',
    bottom: 2,
    width: '100%',
  },
  button: {
    backgroundColor: '#e78e3d',
    borderRadius: 20,
    padding: 16,
    width: '90%',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default ViewCartBtn;
