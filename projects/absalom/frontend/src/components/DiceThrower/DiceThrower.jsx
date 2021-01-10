import React from 'react';
import {
  View, Text, Image, ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './DiceThrowerStyles';
import absalomBackground from '../../images/absalom-background.png';
import eraseArrow from '../../images/eraseArrow__icon.png';

function DiceThrower({ navigation, userItem, dispatch }) {
  return (
    <ImageBackground source={absalomBackground} style={styles.imageBackground}>
      <Header
        navigation={navigation}
        userId={userItem._id}
        dispatch={dispatch}
      />
      <View style={styles.container}>
        <View style={styles.diceThrower__title}>
          <View style={styles.title__bar} />
          <Text style={styles.diceThrower__title__text}>Dice Thrower</Text>
          <View style={styles.title__bar} />
        </View>
        <View style={styles.diceThrower__container}>
          <View style={styles.diceThrower__resultScreen}>
            <View style={{ marginRight: 30 }}>
              <Text style={styles.diceThrower__resultScreen__text}>1d20 + 5</Text>
            </View>
            <TouchableOpacity style={styles.eraseArrow__container}>
              <Image source={eraseArrow} style={styles.eraseArrow__icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <NavigationBar
        navigation={navigation}
        userId={userItem._id}
        dispatch={dispatch}
      />
    </ImageBackground>
  );
}

function mapStateToProps({ usersReducer }) {
  return {
    userItem: usersReducer.userItem,
  };
}

export default connect(mapStateToProps)(DiceThrower);
