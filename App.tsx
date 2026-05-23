/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NewAppScreen} from '@react-native/new-app-screen';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen.tsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import './localization/i18n';
import HomeScreen from "./screens/HomeScreen.tsx";
import {RouteNavigationScreens} from "./navigation/navigationType.ts";

const Stack = createNativeStackNavigator<RouteNavigationScreens>();

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="MainScreen" component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <NewAppScreen
                templateFileName="App.tsx"
                safeAreaInsets={safeAreaInsets}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
