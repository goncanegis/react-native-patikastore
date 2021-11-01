import React from 'react';
import {TextInput} from 'react-native';
import styles from './SearchInput.style';

const SearchInput = (props) => {
  return <TextInput style={styles.inputArea} placeholder="Ara..." editable />;
};

export default SearchInput;
