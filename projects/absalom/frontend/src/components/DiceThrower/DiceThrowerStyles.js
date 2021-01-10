import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  diceThrower__title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '10%',
    marginBottom: '5%',
  },
  title__bar: {
    width: '75%',
    height: 4,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },
  diceThrower__title__text: {
    width: '100%',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
  },
  diceThrower__container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  diceThrower__resultScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '90%',
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#224864',
    borderRadius: 18,
  },
  diceThrower__resultScreen__text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  eraseArrow__container: {

  },
  eraseArrow__icon: {
    width: 50,
    height: 50,
  },
});

export default styles;
