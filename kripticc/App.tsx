import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Input} from '@rneui/base'
import {SignIn} from "./components/sign-in";
import {AmaticSC_400Regular, AmaticSC_700Bold, useFonts} from "@expo-google-fonts/amatic-sc";

export default function App() {
    let [fontsLoaded] = useFonts({
        AmaticSC_400Regular,
        AmaticSC_700Bold
    });
  return (
    <View style={styles.container}>
        <Text style={styles.websiteTitle}> KRIPTI.CC</Text>
        <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0b0f13',
      alignItems: 'center',
      justifyContent: 'center',
    },
    websiteTitle:{
        fontSize: 168,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        fontFamily: 'AmaticSC_700Bold'
    },
  input:{
      backgroundColor: '#2d303c',
      width: 50
  }
});
