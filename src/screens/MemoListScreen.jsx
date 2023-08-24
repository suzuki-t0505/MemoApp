import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

const MemoListScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      /* eslint-disable-next-line */
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

export default MemoListScreen;
