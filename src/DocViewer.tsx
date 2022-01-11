import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import RNPrint from 'react-native-print';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ReactNativeBlobUtil from 'react-native-blob-util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default function DocViewer({
  route,
}: NativeStackScreenProps<ParamListBase>) {
  const [uri, setUri] = React.useState<string | null>(null);
  async function print() {
    await RNPrint.print({
      filePath:
        'https://ars.els-cdn.com/content/image/1-s2.0-S009286741401174X-mmc1.pdf',
    });
  }

  async function prepareFile(source: string) {
    const isNetwork = !!(source && source.match(/^https?:\/\//));
    const isBase64 = !!(
      source && source.match(/^data:application\/pdf;base64/)
    );

    if (isNetwork) {
      setUri(source);
    } else if (isBase64) {
      try {
        const filename = 'document.pdf';
        const cacheFile = `${ReactNativeBlobUtil.fs.dirs.CacheDir}/${filename}`;
        console.log('cacheFile', cacheFile);

        await ReactNativeBlobUtil.fs.unlink(cacheFile);

        let data = source.replace(/data:application\/pdf;base64,/i, '');
        await ReactNativeBlobUtil.fs.writeFile(cacheFile, data, 'base64');
        setUri(`file://${cacheFile}`);
      } catch (e) {
        console.log('ERROR =>', e);
      }
    }
  }

  React.useEffect(() => {
    // @ts-ignore
    const { source } = route.params;
    prepareFile(source);
  }, [route]);

  return (
    <>
      <WebView
        originWhitelist={['file://']}
        // @ts-ignore
        source={{
          uri,
        }}
      />
      {uri && uri.startsWith('file://') && (
        <TouchableOpacity style={styles.printButton} onPress={print}>
          <Text style={styles.printButtonLabel}>Print / Save</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
