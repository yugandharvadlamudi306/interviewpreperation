import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteNavigationScreens} from "../navigation/navigationType.ts";


type Props = NativeStackScreenProps<RouteNavigationScreens, 'Login'>;
const LoginScreen = ({navigation}: Props) => {
    const {t} = useTranslation();
    const [email, setEmail] = useState<string>("");
    const loginCilck = () => {
        navigation.navigate("MainScreen");
    }
    return (

        <View style={loginStyles.container}>
            <TextInput style={loginStyles.input}
                       placeholder={t('login.enter_email')}
                       value={email}
                       onChangeText={setEmail}
            />
            <Button
                title={t('login.login')}
                onPress={loginCilck}/>
        </View>

    );
}
const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    input: {
        borderWidth: 1,
        marginBlock: 20,
        padding: 10,
    }
});
export default LoginScreen;