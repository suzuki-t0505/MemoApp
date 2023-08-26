import {
  KeyboardAvoidingView, StyleSheet, TextInput, View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../env';
import CircleButton from '../components/CircleButton';

const MemoCreateScreen = ({ navigation }) => {
  const [bodyText, setBodyText] = useState('');

  const handlePress = useCallback(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const { currentUser } = getAuth();
    const createMemo = async () => {
      try {
        const docRef = await addDoc(collection(db, `users/${currentUser.uid}/memos`), {
          bodyText,
          updatedAt: new Date(),
        });
        console.log('Created!', docRef.id);
        navigation.goBack();
      } catch (error) {
        console.log('Error!', error);
      }
    };
    createMemo();
  }, [bodyText]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">

      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>

      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
};

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
