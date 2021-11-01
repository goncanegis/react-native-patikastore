import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import AppHeader from './components/AppHeader/AppHeader';
import SearchInput from './components/SearchInput/SearchInput';
import product_data from './data/product_data.json';
import ProductCard from './components/ProductCard/ProductCard';

const App = () => {
  const renderProduct = ({item}) => <ProductCard product={item} />;

  return (
    <SafeAreaView style={styles.appContainer}>
      <AppHeader />
      <SearchInput />
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={product_data}
          renderItem={renderProduct}
          numColumns={2}
          horizontal={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    color: 'black',
  },
});

export default App;
