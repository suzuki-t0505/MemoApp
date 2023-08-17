import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

const MemoListScreen = () => (
  <View style={styles.container}>
    <AppBar />
    <MemoList />
    <CircleButton style={{ top: 160, bottom: 'auto' }} name="plus" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

export default MemoListScreen;
