import {FlatList, ListRenderItem, StyleSheet, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
type User = {
    id:number,
    name:string
}

const items:User[] = [{id: 1, name: "yugandhar"}, {id: 2, name: "vadlamudi"}];

const getRenderItem:ListRenderItem<User>=({item})=> {
             return (<Text>{item.name}</Text>)

}
const HomeScreen = () => {


    return (
        <SafeAreaView >
            <Ionicons
                name="home"
                size={40}
                color="red"
            />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={getRenderItem}
            />
        </SafeAreaView>
    )
}
const homeScreenStyles = StyleSheet.create({
    safeArea:{
        flex:1
    }
})
export default HomeScreen;