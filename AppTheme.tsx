import { StyleSheet } from 'react-native';

export default (config: { primaryColor: string; primaryTextColor: string }) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: config.primaryColor,
    },
    title: {
      paddingHorizontal: 16,
      color: '#657b83',
      fontSize: 20,
      fontWeight: 'bold',
    },
    container: {
      paddingTop: 60,
      alignItems: 'center',
    },
    greeting: {
      height: 100,
      width: 200,
      borderWidth: 1,
      borderColor: '#657b83',
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    greetingText: {
      color: config.primaryTextColor,
    },
  });
