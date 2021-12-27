import { NativeModules } from 'react-native';

export default {
  getConfig: NativeModules.WhiteLabelConfig.getConfig,
};
