import React, { useState, useEffect } from 'react';
import {
  ScrollView, ImageBackground,
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { SearchBar, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { setCharacterId, loadCharacterByKey } from '../../redux/actions/characterActions';
import { loadCharactersByField } from '../../redux/actions/charactersActions';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './SearchListStyles';
import absalomBackground from '../../images/absalom-background.png';
import addIcon from '../../images/add-icon-blue.png';

function SearchList({
  userItem, userId, charactersArray, dispatch, navigation,
}) {
  const [characterList, setCharacterList] = useState([]);
  const [addCharacterModalView, setAddCharacterModalView] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [nameCheck, setNameCheck] = useState(true);
  const [lvlCheck, setLvlCheck] = useState(false);
  const [gameCheck, setGameCheck] = useState(false);
  const [raceCheck, setRaceCheck] = useState(false);
  const [classCheck, setClassCheck] = useState(false);

  let typeCheck = 'name';

  useEffect(() => {
    setCharacterList(charactersArray || null);
  }, [userItem, userId, charactersArray]);
  return (
    <ImageBackground source={absalomBackground} style={styles.backgroundImage}>
      <Header navigation={navigation} userId={userItem._id} dispatch={dispatch} />
      <View style={styles.characterList__title__block}>
        <View style={styles.title__bar} />
        <Text style={styles.characterList__title}>Search</Text>
        <View style={styles.title__bar} />
      </View>
      <View style={styles.characterList__searchBar__block}>
        <SearchBar
          containerStyle={styles.searchList__searchBar}
          inputContainerStyle={styles.searchList__searchBar__input__container}
          inputStyle={styles.searchList__searchBar__input}
          value={searchValue}
          onChangeText={(text) => {
            setSearchValue(text);
            dispatch(loadCharactersByField(text, typeCheck));
          }}
        />
        <View style={styles.searchList__checkbox__container}>
          <CheckBox
            title="Name"
            containerStyle={styles.searchList__checkbox__box}
            checked={nameCheck}
            onPress={() => {
              setNameCheck(!nameCheck);
              setLvlCheck(false);
              setRaceCheck(false);
              setGameCheck(false);
              setClassCheck(false);
              typeCheck = 'name';
            }}
          />
          <CheckBox
            title="Lvl"
            containerStyle={styles.searchList__checkbox__box}
            checked={lvlCheck}
            onPress={() => {
              setNameCheck(false);
              setLvlCheck(!lvlCheck);
              setRaceCheck(false);
              setGameCheck(false);
              setClassCheck(false);
              typeCheck = 'lvl';
            }}
          />
          <CheckBox
            title="Game"
            containerStyle={styles.searchList__checkbox__box}
            checked={gameCheck}
            onPress={() => {
              setNameCheck(false);
              setLvlCheck(false);
              setRaceCheck(false);
              setGameCheck(!nameCheck);
              setClassCheck(false);
              typeCheck = 'game';
            }}
          />
          <CheckBox
            title="Race"
            containerStyle={styles.searchList__checkbox__box}
            checked={raceCheck}
            onPress={() => {
              setNameCheck(false);
              setLvlCheck(false);
              setRaceCheck(!nameCheck);
              setGameCheck(false);
              setClassCheck(false);
              typeCheck = 'race';
            }}
          />
          <CheckBox
            title="Class"
            containerStyle={styles.searchList__checkbox__box}
            checked={classCheck}
            onPress={() => {
              setNameCheck(false);
              setLvlCheck(false);
              setRaceCheck(false);
              setGameCheck(false);
              setClassCheck(!nameCheck);
              typeCheck = 'characterClass';
            }}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        {(characterList?.length && userItem?.userName) ? (
          <View style={styles.characterList}>
            <View style={styles.characterList__list}>
              {characterList.map((character) => (
                <TouchableOpacity
                  style={styles.characterList__list__block}
                  key={`${character._id}${Math.random()}`}
                  activeOpacity={0.8}
                  onPress={() => {
                    dispatch(setCharacterId(character._id));
                    dispatch(loadCharacterByKey(character.uniqueKey, userItem._id));
                    navigation.navigate('CharacterDetail');
                  }}
                >
                  <View style={styles.characterList__list__block__row}>
                    <View style={styles.characterList__character__firstRow__name__block}>
                      <Text style={styles.characterList__character__firstRow__name__text}>
                        {character.name}
                      </Text>
                    </View>
                    <Text
                      testID="LevelText"
                      style={styles.characterList__character__firstRow__text}
                    >
                      Level:
                      {' '}
                      {character.lvl}
                    </Text>
                  </View>
                  <View style={styles.characterList__list__block__row}>
                    <Text
                      id={Math.random()}
                      style={styles.characterList__character__secondRow__text}
                    >
                      {character.game}
                    </Text>
                    <Text
                      id={Math.random()}
                      style={styles.characterList__character__secondRow__text}
                    >
                      {character.race}
                    </Text>
                    <Text
                      id={Math.random()}
                      style={styles.characterList__character__secondRow__text}
                    >
                      {character.characterClass}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.characterList}>
            <LoadingSpinner />
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.addIcon__block}
        onPress={() => setAddCharacterModalView(!addCharacterModalView)}
      >
        <Image source={addIcon} style={styles.icon} />
      </TouchableOpacity>
      <NavigationBar navigation={navigation} userId={userItem._id} dispatch={dispatch} />
    </ImageBackground>
  );
}

function mapStateToProps({ usersReducer, charactersReducer }) {
  return {
    usersArray: usersReducer.usersArray,
    userItem: usersReducer.userItem,
    charactersArray: charactersReducer.charactersArray,
  };
}

export default connect(mapStateToProps)(SearchList);
