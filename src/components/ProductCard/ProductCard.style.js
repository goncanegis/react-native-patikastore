import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ECEFF1',
    margin: 5,
    borderRadius: 7,
    width: Dimensions.get('window').width / 2.15,
    height: 300,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '65%',
    marginBottom: 5,
    borderRadius: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  outOfStock: {
    fontWeight: 'bold',
    color: 'red',
  },
});
