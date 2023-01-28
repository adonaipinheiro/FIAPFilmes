import React from 'react';
import {FlatList} from 'react-native';

// Types
import type {GetTrendingsItemType} from '../../services';

// Styles
import styles from './styles';
import TrendingsListItem from './TrendingsListItem';

interface TrendingslistProps {
  data: GetTrendingsItemType[] | undefined;
}

export default function Trendingslist({data}: TrendingslistProps) {
  return (
    <FlatList
      data={data}
      style={styles.container}
      contentContainerStyle={styles.content}
      numColumns={2}
      horizontal={false}
      renderItem={({item}) => <TrendingsListItem item={item} />}
    />
  );
}
