import { Alert, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../env';

import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';

const MemoListScreen = ({ navigation }) => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      /* eslint-disable-next-line */
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const { currentUser } = getAuth();

    const getMemos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, `users/${currentUser.uid}/memos`));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const updatedAt = data.updatedAt.toDate();
          console.log(doc.id, doc.data());
          const memo = {
            updatedAt,
            id: doc.id,
            bodyText: data.bodyText,
          };
          setMemos((prevMemos) => [...prevMemos, memo]);
        });
      } catch (error) {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。');
      }
    };
    // getMemos();

    if (currentUser) {
      const unsubscribe = getMemos();
      return unsubscribe;
    }
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
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
