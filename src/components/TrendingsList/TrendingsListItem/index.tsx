import React from 'react';
import {Image, View, Text} from 'react-native';

// Types
import type {GetTrendingsItemType} from '../../../services';

// Styles
import styles from './styles';

interface TrendingsListItemProps {
  item: GetTrendingsItemType;
}

export default function TrendingsListItem({
  item,
}: TrendingsListItemProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.postImg}
        resizeMode={'cover'}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
      <Text numberOfLines={2} style={styles.title}>
        {item.name}
        {item.title}
      </Text>
    </View>
  );
}
