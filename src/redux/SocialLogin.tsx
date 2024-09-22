import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

export const signWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices(); // * Important - Now this will check the if the Google Services are there or not only if they are we will call the GoogleSignin.signIn() - Which will give the access Token(idToken) and other user detail or perform the signIn functionality.*
    await GoogleSignin.signOut(); // This is for signOut if user clicks on the Google Sign again(After being signed already).
    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken, 'idToken');
    Alert.alert('Token');
  } catch (e) {
    console.log('Error', e);
  }
};

export default {
  signWithGoogle,
};
