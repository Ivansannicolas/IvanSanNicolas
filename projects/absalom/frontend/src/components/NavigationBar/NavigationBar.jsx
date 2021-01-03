/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { loadCharactersByOwner, loadCharactersSuccess } from '../../redux/actions/charactersActions';
import styles from './NavigationBarStyles';
import absalomIcon from '../../images/absalom-icon.png';
import SearchIcon from '../../images/search-icon.png';
import DiceIcon from '../../images/dice-icon.png';

function NavigationBar({ navigation, userId, dispatch }) {
  return (
    <View styles={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(loadCharactersSuccess([]));
            dispatch(loadCharactersByOwner(userId));
            navigation.navigate('SearchList');
          }}
        >
          <Image source={SearchIcon} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(loadCharactersByOwner(userId));
            navigation.navigate('CharacterList');
          }}
        >
          <Image source={absalomIcon} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(loadCharactersByOwner(userId));
            navigation.navigate('DiceThrower');
          }}
        >
          <Image source={DiceIcon} style={styles.navigationIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NavigationBar;
