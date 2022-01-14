import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import appStyle from '../AppTheme';
import WhiteLabelConfig from '../whitelabel/WhiteLabelConfig';
import SplashScreen from 'react-native-splash-screen';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { pdfBase64 } from './source';

function Home({ navigation }: NativeStackScreenProps<ParamListBase>) {
  const [title, setTitle] = React.useState<string>('');
  const [styles, setStyles] = React.useState<{
    screen: ViewStyle;
    title: TextStyle;
    subTitle: TextStyle;
    container: ViewStyle;
    button: ViewStyle;
    buttonLabel: TextStyle;
  } | null>(null);

  React.useEffect(() => {
    (async () => {
      const config = await WhiteLabelConfig.getConfig();
      const newStyles = appStyle(config);
      setStyles(newStyles);
      setTitle(config.appName);
    })();
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles?.screen}>
      <Text style={styles?.title}>{title}</Text>
      <View style={styles?.container}>
        <Text style={styles?.subTitle}>
          WebView options with react-native-webview
        </Text>
        <TouchableOpacity
          style={styles?.button}
          onPress={() =>
            navigation.navigate('Doc Viewer', {
              source: `data:application/pdf;base64,${pdfBase64}`,
            })
          }>
          <Text style={styles?.buttonLabel}>PDF base64</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles?.button}
          onPress={() =>
            navigation.navigate('Doc Viewer', {
              source:
                'https://www.mtsac.edu/webdesign/accessible-docs/word/example03.docx',
            })
          }>
          <Text style={styles?.buttonLabel}>Doc file</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles?.button}
          onPress={() =>
            navigation.navigate('Doc Viewer', {
              source:
                'https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls',
            })
          }>
          <Text style={styles?.buttonLabel}>Xls file</Text>
        </TouchableOpacity>
        <Text style={styles?.subTitle}>PDF Viewer with react-native-pdf</Text>
        <TouchableOpacity
          style={styles?.button}
          onPress={() =>
            navigation.navigate('PDF Viewer', {
              source: `data:application/pdf;base64,${pdfBase64}`,
            })
          }>
          <Text style={styles?.buttonLabel}>PDF base64</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Home;
