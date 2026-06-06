import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RouteNavigationScreens} from "./navigationType.ts";
import HomeScreen from "../screens/HomeScreen.tsx";
import AddTasks from "../screens/AddTasks.tsx";
import Ionicons from "@react-native-vector-icons/ionicons";

const Tabs = createBottomTabNavigator<RouteNavigationScreens>()
export default function BottomNavigation() {
    return (
        <Tabs.Navigator
            initialRouteName={"MainScreen"}
            screenOptions={({route})=>({
                tabBarIcon: ({color,size})=>{
                    let iconName: "home" | "person" = "home";
                    if(route.name=="MainScreen"){
                        iconName="home";
                    }
                    else if(route.name=="AddTasksScreen"){
                        iconName="person";
                    }
                    return(
                        <Ionicons name={iconName} size={size} color={color}/>
                    )
                }
            })}
        >
            <Tabs.Screen name="MainScreen" component={HomeScreen}/>
            <Tabs.Screen name="AddTasksScreen" component={AddTasks}/>
        </Tabs.Navigator>
    );
}
