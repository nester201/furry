import React from 'react';
import { StyleSheet, Text, View} from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
             <Text>HomeScreen</Text>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 40
    },
    wrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        marginBottom: 50
    }
})
