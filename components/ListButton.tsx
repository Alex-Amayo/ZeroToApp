import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import brand from '../brand/brandConfig';

// Rest of the code

type ListButtonProps = {
    text: string;
    icon: any;
    onPress?: () => void;
};

const ListButton = ({onPress, text, icon}: ListButtonProps) => {
    return (
        <TouchableOpacity style={styles.listButton} onPress={onPress? onPress : () => console.log('List Button pressed')}>
            <Text style={styles.text}>{text}</Text>
            <Feather name={icon} size={25} />
        </TouchableOpacity>
    );
};

export default ListButton;

const styles = StyleSheet.create({
    listButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
    },
    text: {
        fontSize: brand.fontSizes.medium,
        fontWeight: '500',
    }
});