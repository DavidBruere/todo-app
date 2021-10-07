import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const TodoInput = props => {
    const [getTask, setTask] = useState('');
    return (
        <View style={styles.viewContainer}>
            <TextInput placeholder={'  your Tasks today'}
                       onChangeText={setTask}
                       value={getTask}
                       onSubmitEditing={() => {
                           props.addTodo(getTask), setTask('');
                       }}
                       style={styles.inputContainer}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputContainer: {
        textAlign: 'center',
        borderColor: '#006994',
        borderWidth: 2,
        borderRadius: 10,
        width: '80%',
        marginTop: 40,
        marginBottom: 20,
    },
});

export default TodoInput;
