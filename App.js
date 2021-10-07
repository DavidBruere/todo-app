import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import TodoInput from './components/TodoInput';
import TodoListElement from './components/TodoListElement';

export default function App() {
    const [arrayTodoTask, setTodoTask] = useState([]);
    const addTodo = getTask => {
        setTodoTask(randomShit =>
            [...randomShit, {key: Math.random().toString(), value: getTask}]
        );
    };
    const removeTodo = removeKey => {
        setTodoTask(todoArray => {
            return todoArray.filter(x => x.key !== removeKey);
        });
    };
    return (
        <View>
            <StatusBar style="auto"/>
            <TodoInput addTodo={addTodo}/>
            <FlatList keyExtractor={(item, index) => item.key}
                      data={arrayTodoTask}
                      renderItem={itemData =>
                          <TodoListElement deleteKey={itemData.item.key} onDelete={removeTodo}
                                           title={itemData.item.value}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});

