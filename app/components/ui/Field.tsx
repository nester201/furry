import React, {memo} from 'react';
import {StyleSheet, TextInput} from "react-native";

type Props = {
    onChange: (value: string) => void;
    value: string;
    placeholder: string;
    isSecure?: boolean;
};

const Field: React.FC<Props> = ({onChange, isSecure, value, placeholder}) => {
    return (
        <TextInput placeholder={placeholder} onChangeText={onChange} value={value} secureTextEntry={isSecure} style={styles.container}/>
    );
};

export default memo(Field);

const styles = StyleSheet.create({
    container: {
        width: '75%',
        backgroundColor: '#F7F7F7',
        marginBottom: 16,
        paddingHorizontal: 22,
        paddingVertical: 20,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
    }
});
