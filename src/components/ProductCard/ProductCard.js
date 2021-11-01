import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title} numberOfLines={2}>
        {product.title}
      </Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text>
        {product.inStock === false ? (
          <Text style={styles.outOfStock}>STOKTA YOK</Text>
        ) : null}
      </Text>
    </View>
  );
};

export default ProductCard;
