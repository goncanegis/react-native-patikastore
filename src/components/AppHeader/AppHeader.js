import React from 'react';
import {Text, View} from 'react-native';
import styles from './AppHeader.style';

const AppHeader = (props) => {
  return (
    <View>
      <Text style={styles.title}>PATIKASTORE</Text>
    </View>
  );
};

export default AppHeader;
