import {
  KeyboardAvoidingView, StyleSheet, TextInput, View,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

const MemoCreateScreen = () => (
  <KeyboardAvoidingView style={styles.container} behavior="height">
    <AppBar />

    <View style={styles.inputContainer}>
      <TextInput value="" multiline style={styles.input} />
    </View>

    <CircleButton name="check" />
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoCreateScreen;
