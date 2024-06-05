import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


type ButtonProps = {
    title: string;
    secondary?: boolean;
};

const Button = ({title, secondary}: ButtonProps) => {
    return (
        <Pressable onPress={() => console.log('Button pressed')} style={secondary ? styles.secondary : styles.primary} >
            <View>
                <Text style={styles.text} >{title}</Text>
            </View>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    primary: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#1877f2',
    },
    secondary: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#42b72a',
    },
    text: {
        color: '#ffffff',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});