import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RouteNavigationScreens} from "./navigationType.ts";
import HomeScreen from "../screens/HomeScreen.tsx";
import AddTasks from "../screens/AddTasks.tsx";

const Tabs = createBottomTabNavigator<RouteNavigationScreens>()
export default function BottomNavigation() {
    return (
        <Tabs.Navigator initialRouteName={"MainScreen"}>
            <Tabs.Screen name="MainScreen" component={HomeScreen}/>
            <Tabs.Screen name="AddTasksScreen" component={AddTasks}/>
        </Tabs.Navigator>
    );
}
