This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Notes - 
How to Change the App name - 
1. Android - Change the Name in the App.Json, Settings.gradle, Strings.xml and MainActivity.kt files
2. IOS - Trying to figure it out.

# App Registry - 
AppRegistry is the JS entry point to running all React Native apps. App root components should register themselves with AppRegistry.registerComponent, then the native system can load the bundle for the app and then actually run the app when it's ready by invoking AppRegistry.runApplication. -

AppRegistry.registerComponent("project", () => App);

AppRegistry.runApplication - AppRegistry.runApplication("project", {
    rootTag: document.getElementById("root")
});

Consist of all the methods required to register and run the application on the device.

Consist of Multiple methods can be used to destroy(Kill) the app. - AppRegistry.unmountApplicationComponentAtRootTag and pass the rootElementTag

# MetroConfig.Js - 
This contains the configs for the compilation of the Javascript code into the native code modules(Android and IOS) and also update the configs for any changes during the compilation process.

# react-native.config.js - 
This file includes the configs which will override the compiler and will add the custom functionality to React Native CLI like custom fonts and Transformers(Study This).

# Babel.config.js - 
This file is responsible for converting the JS to ES6 Version of code. 

# Notes and Topics To Read About - 

<!-- Navigation -->
1. Navigation file in the navigation folder consists of the Navigation.tsx and all the NavigationContainer and Root Navigator is in that and Navigation Stack is in the RootNavigator.
2. Not Using the useNavigation Hook and implementing own custom hook for the same -  Inside the NavigationUtil.tsx.
3. Root navigator - Consists of all the Screen Stack Wrapped with the Stack.Navigator with the initialRouteName - BottomTabBar.

<!-- ColorScheme -->
1. Theme.tsx file consist of the all the colors in a Object for light and dark theme and the file has a useColorScheme hook used from the React Native.
2. Color.tsx in the constants folder consist of all the colors in a object with color code and the name.