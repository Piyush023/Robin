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
Dependencies - react-navigation/native, react-native-screens, react-native-safe-area-context
1. Navigation file in the navigation folder consists of the Navigation.tsx and all the NavigationContainer and Root Navigator is in that and Navigation Stack is in the RootNavigator.
2. Not Using the useNavigation Hook and implementing own custom hook for the same -  Inside the NavigationUtil.tsx.
3. Root navigator - Consists of all the Screen Stack Wrapped with the Stack.Navigator with the initialRouteName - BottomTabBar - This we can change to any screen which we want to show when the app is opened for the first time.

After install @react-navigation/native you have to install two dependency - npm install react-native-screens react-native-safe-area-context


<!-- ColorScheme -->
useColorScheme Hook React Native.
1. Theme.tsx file consist of the all the colors in a Object for light and dark theme and the file has a useColorScheme hook used from the React Native.
2. Color.tsx in the constants folder consist of all the colors in a object with color code and the name.


<!-- Assets -->
How to Add assets - 
1. Fonts - Fonts are the files added into the assets folder and then we need to link them into the IOS and Android build folder for that we have to add them into the below explained files. **Todo - Go Through it once**

2. Images - Just Add them in the Image folder in the assets and use them from there.

3. Svg - Here in this project we have used a Svg Transformer in the react-native.config and metro.config file from the react-native.config file it will pick the path of the svg and the metro.config will help in the rendering of the Svg during the execution phase. **Todo - Go Through it once**

4. Icons - using the `@types/react-native-vector-icons` library - This gives us access to the different 3rd party icons.

<!-- Imp Commands and Library-->
1. Lib - react-native-asset and Command - `npx react-native-assets` - This will link all the assets(Fonts) to the android and ios app build. and all the fonts path is being served from the react-native.config.js file.
**Imp Files - For the Fonts Configs**
For Android - This is the list of the Vector Icons being used in the Android build and for this we need to add them into the build.gradle file inside the Android -> App -> build.gradle, For IOS - This is the list of the Vector Icons being used in the IOS build and for this we need to add them into the Info.plist file inside the IOS -> APP_NAME -> Info.plist
and `npx react-native-asset` - To Link the Assets to the IOS and Android build.

2. Lib - `import { useTheme } from '@react-navigation/native'` - **This will access to current Theme of the device Dark or Light**
and Also this -  
/* Imp - Apart from telling about the Theme this also tells about the color -  
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
*/
`import { RFValue } from 'react-native-responsive-fontsize'` -  This is about Scaling and Responsiveness of the App. - Explore this more.

# Social Logins - 
<!-- Google Login --> 
**Important Need to Learn About this**
Lib - `react-native-google-signin/google-signin` and Docs - `https://www.npmjs.com/package/@react-native-google-signin/google-signin/v/10.1.2`
Google Login using the Google Cloud - Create a new Project and Check the credential OAuth under the API and Service Menu. After this create a OAuth Client Id for the Web Application and in the Authorized JavaScript Origin - use the localhost for now (This is the URL whitelisting process this will whitelist the localhost url for the Google Auth to start working on the local server.)

Create the OAuth for the Android and IOS Separate.

`Android` - 
1st create the OAuth using the Google Cloud - In this process there is a need of the package name of the android app build - Package Name - android -> app -> src -> main -> MainActivity.kt -> Package name line.
// This is all for the Debug, Have to do this again for the Release.
Also we need to get a Digital SHA signature key from this command inside the Android Folder. - Using the cmd - `keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android` - This will give the SHA sign required for the Google OAuth Client Setup for Android. Copy the SHA1 key value and paste it in the Google OAuth SHA1 Certificate fingerprint. This will give us a client id and other id needed for the Google Signin.
Also we need to add this dep in the file Android -> build.gradle - classpath('com.google.gms:google-services:4.3.3') // This will add the dependency of the Google Service in the Android build.

`IOS` - 
For IOS First get the bundle Identifier from the General Tab in the Xcode and create the OAuth Id.

After setting this up - Add deps in the info.plist file - 
ios -> Thor -> Info.plist
These Changes will add the schema of the Google Sign in configs in the IOS Build, In key-value pair form. Check the Info.plist file for the google config.

Once all this done we need to set the Google Signin Config on the root - and Set the WebClientId and IOSClientId in the configs.
```GoogleSignin.configure({
    webClientId:'944347476169-d90f7vhdqhvjkn1b31h332r8epqe5rqq.apps.googleusercontent.com',
    forceCodeForRefreshToken: true, 
    iosClientId:'944347476169-1c1ikrh9krvkeeo6n5it55ggtoq2tp9v.apps.googleusercontent.com',
  })
```

<!-- Token Redux State Management -->
The Token and isLoggedIn Check and the state is managed by the Redux in the SocialLogin File under redux Folder under that file we are doing this - *Important - Now this will check the if the Google Services are there or not only if they are we will call the GoogleSignin.signIn() - Which will give the access Token(idToken) and other user detail or perform the signIn functionality.*

<!--Apple Login -->
