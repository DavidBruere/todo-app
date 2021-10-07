import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const TodoListElement = props => {
    const [getPressChange, setPressChange] = useState(false);
    const [getStyle, setStyle] = useState({textDecorationLine: 'none', fontWeight: 'bold'});
    const changeStyle = () => {
        setPressChange(!getPressChange);
        getPressChange ? setStyle({
            textDecorationLine: 'none',
            fontWeight: 'bold',
        }) : setStyle({textDecorationLine: 'line-through', fontStyle: 'italic', fontWeight: 'normal'});
    };

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => changeStyle()}
                              style={styles.viewTodoText}
            >
                <Text style={[getStyle, styles.text]}>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete}
                              onPress={() => {
                                  props.onDelete(props.deleteKey);
                              }}
            >
                <Text style={{color: '#aa0011'}}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewTodoText: {
        marginLeft: 20,
        marginVertical: 5,
        alignItems: 'center',
        width: '83%',
    },
    text: {
        fontSize: 20,
    },
    buttonDelete: {
        //backgroundColor:'#aa0011',
        borderRadius: 100,
        borderWidth: 2,
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
});

export default TodoListElement;
