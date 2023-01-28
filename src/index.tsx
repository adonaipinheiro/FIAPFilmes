import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Trendingslist from './components/TrendingsList';
import {GetTrendingsType, getTrendings, useAPI} from './services';

export default function App() {
  const {data, loading} = useAPI<GetTrendingsType>(() =>
    getTrendings(1),
  );

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#020033'}
      />
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Text>Carregando...</Text>
        ) : (
          <Trendingslist data={data?.results} />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020046',
  },
});
