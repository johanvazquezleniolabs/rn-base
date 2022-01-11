import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNPrint from 'react-native-print';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  spinnerContainer: {
    position: 'absolute',
    top: '50%',
  },
  printButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    backgroundColor: '#0000ff',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
  printButtonLabel: {
    color: 'white',
    fontWeight: '600',
  },
});

export default function WebviewScreen({
  route,
}: NativeStackScreenProps<ParamListBase>) {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [uri, setUri] = React.useState<string | null>(null);
  const [pdfFilePath, setPdfFilePath] = React.useState<string>('');

  async function print() {
    await RNPrint.print({ filePath: pdfFilePath });
  }

  React.useEffect(() => {
    // @ts-ignore
    const { source } = route.params;
    setUri(source);
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      {uri && (
        <Pdf
          source={{
            uri,
            cacheFileName: 'document',
          }}
          onLoadComplete={async (numberOfPages: number, filePath: string) => {
            console.log(`Number of pages: ${numberOfPages}`);
            console.log('filePath', filePath);
            setPdfFilePath(filePath);
            setLoaded(true);
          }}
          onPageChanged={(page: number, numberOfPages: number) => {
            console.log(`Current page: ${page}`);
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onError={(error: unknown) => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      )}
      {loaded && (
        <TouchableOpacity style={styles.printButton} onPress={print}>
          <Text style={styles.printButtonLabel}>Print / Save</Text>
        </TouchableOpacity>
      )}
      {(!loaded || !uri) && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </SafeAreaView>
  );
}
