import {StyleSheet, View} from "react-native";
import {Button, Input, Text} from "@rneui/base"

export const SignIn = () => {

    return(
        <View style={styles.container}>

            <Text style={styles.titleText}>Sign Up</Text>
            <Input placeholder={'username'}/>
            <Input placeholder={'email'}/>
            <Button title="Sign Up" style={styles.signInBtn} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0b0f13',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius: 10,
    },
    input:{
        backgroundColor: '#2d303c',
        width: 50,
        flexShrink: 10
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    signInBtn: {
        marginTop: 10,
    }
})
