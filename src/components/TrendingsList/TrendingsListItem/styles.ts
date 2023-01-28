import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 - 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#CCCCCC70',
    borderRadius: 8,
  },
  postImg: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;
