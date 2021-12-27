import React from 'react';
import { SafeAreaView, Text, View, ViewStyle } from 'react-native';

import appStyle from './AppTheme';
import WhiteLabelConfig from './whitelabel/WhiteLabelConfig';

function App() {
  const [title, setTitle] = React.useState('');
  const [subTitle, setSubTitle] = React.useState('');
  const [styles, setStyles] = React.useState<{ screen: ViewStyle } | {}>({});

  React.useEffect(() => {
    (async () => {
      const config = await WhiteLabelConfig.getConfig();
      const newStyles = appStyle(config);
      setStyles(newStyles);
      setTitle(config.appName);
      setSubTitle(config.greetingText);
    })();
  }, []);

  return (
    <SafeAreaView style={styles?.screen}>
      <Text style={styles.title}>{title} App</Text>
      <View style={styles.container}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>{subTitle}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
