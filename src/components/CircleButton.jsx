import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
/* eslint-disable-next-line */
import { string } from 'prop-types';

const CircleButton = ({ children }) => (
  <View style={styles.circleButton}>
    <Text style={styles.circleButtonLabel}>{ children }</Text>
  </View>
);

CircleButton.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});

export default CircleButton;
