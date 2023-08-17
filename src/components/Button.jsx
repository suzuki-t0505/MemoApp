import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { string } from 'prop-types';

const Button = ({ label }) => (
  <View style={styles.buttonContainer}>
    <Text style={styles.buttonLabel}>{label}</Text>
  </View>
);

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});

export default Button;
