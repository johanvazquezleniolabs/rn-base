import React from 'react';
import { SafeAreaView, Text, View, ViewStyle, TextStyle } from 'react-native';

import appStyle from './AppTheme';
import WhiteLabelConfig from './whitelabel/WhiteLabelConfig';
import SplashScreen from 'react-native-splash-screen';
import PdfViewer from './src/PdfViewer';

function App() {
  const [title, setTitle] = React.useState<string>('');
  const [subTitle, setSubTitle] = React.useState<string>('');
  const [styles, setStyles] = React.useState<
    | {}
    | {
        screen: ViewStyle;
        title: TextStyle;
        container: ViewStyle;
        greeting: ViewStyle;
        greetingText: TextStyle;
      }
  >({});

  React.useEffect(() => {
    (async () => {
      const config = await WhiteLabelConfig.getConfig();
      const newStyles = appStyle(config);
      setStyles(newStyles);
      setTitle(config.appName);
      setSubTitle(config.greetingText);
    })();
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    // // @ts-ignore
    // <SafeAreaView style={styles.screen}>
    //   {/* @ts-ignore */}
    //   <Text style={styles.title}>{title} App</Text>
    //   {/* @ts-ignore */}
    //   <View style={styles.container}>
    //     {/* @ts-ignore */}
    //     <View style={styles.greeting}>
    //       {/* @ts-ignore */}
    //       <Text style={styles.greetingText}>{subTitle}</Text>
    //     </View>
    //   </View>
    // </SafeAreaView>
    <PdfViewer />
  );
}

export default App;
