import {useState} from "react";
import {Button, TextInput, View} from "react-native";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {addTask} from "../redux/taskSlice.tsx";

export default function AddTasks() {
    const [task, setTask] = useState<string>("");
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const onclickAddTask = () => {
        dispatch(addTask({id: 1, name: task}))
    }

    return (
        <View>
            <TextInput
                placeholder={t('addTask.enter_task')}
                value={task}
                onChangeText={setTask}
            />
            <Button
                title={t('addTask.add')}
                onPress={onclickAddTask}
            />

        </View>
    );

}