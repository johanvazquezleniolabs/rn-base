import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export default (config?: {
  primaryColor: string;
  primaryTextColor: string;
}): {
  screen: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  container: ViewStyle;
  button: ViewStyle;
  buttonLabel: TextStyle;
} =>
  StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      paddingHorizontal: 16,
      color: '#657b83',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subTitle: {
      paddingHorizontal: 16,
      color: '#657b83',
      fontSize: 18,
      marginTop: 15,
      marginBottom: 15,
    },
    container: {
      paddingTop: 20,
      alignItems: 'center',
    },
    button: {
      backgroundColor: config?.primaryColor,
      color: 'white',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    buttonLabel: {
      color: 'white',
      fontWeight: '600',
    },
  });
