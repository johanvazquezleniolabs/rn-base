# RN Base with White Label

This prototype is a base react native app to implement White Label and a PDF Viewer to show how it works on RN. This one was built similar to the explanation in [this post](https://medium.com/flawless-app-stories/react-native-white-label-101-163c1967c12a) and following the react native doc for [android](https://reactnative.dev/docs/native-modules-android) and [ios](https://reactnative.dev/docs/native-modules-ios).

## Installation

```
yarn
```

### - iOS
```
cd ios
pod install
cd ..
```
>NOTE: To review easier the native code, open the ios directory with Xcode and android directory with Android Studio

## Running on iOS
PurpleParrot app
```
npx react-native run-ios --scheme "PurpleParrots"
```
<img src="./assets/home-ios.png" width="128"/> <img src="./assets/purple-parrots-ios1.png" width="128"/> <img src="./assets/purple-parrots-ios2.png" width="128"/>

\
GreenMonkeys app
```
npx react-native run-ios --scheme "GreenMonkeys"
```
<img src="./assets/home-ios.png" width="128"/> <img src="./assets/green-monkeys-ios1.png" width="128"/> <img src="./assets/green-monkeys-ios2.png" width="128"/>

## Running on Android
PurpleParrot app
```
npx react-native run-android --variant "purpleParrotsDebug" --appIdSuffix "purpleparrots"
```
<img src="./assets/android-apps.png" width="128"/> <img src="./assets/purple-parrots-android1.png" width="128"/> <img src="./assets/purple-parrots-android2.png" width="128"/>

\
GreenMonkeys app
```
npx react-native run-android --variant "greenMonkeysDebug" --appIdSuffix "greenmonkeys"
```
<img src="./assets/android-apps.png" width="128"/> <img src="./assets/green-monkeys-android1.png" width="128"/> <img src="./assets/green-monkeys-android2.png" width="128"/>