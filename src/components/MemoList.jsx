import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
/* eslint-disable-next-line */
import { Feather } from '@expo/vector-icons';

const MemoList = () => (
  <View>
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2022年12月24日 10:00</Text>
      </View>
      <View>
        <Feather name="x" size={16} color="#B0B0B0" />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

export default MemoList;
