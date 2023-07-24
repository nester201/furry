import React, {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text} from "react-native";
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Matcher 📬",
            body: 'New notification',
            data: { data: 'goes here' },
        },
        trigger: { seconds: 3 },
    });
}

const TestButton = () => {
    const [token, setToken] = useState('');

    const registerForPushNotificationsAsync = async () => {

        if (Constants.deviceName) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
            setToken(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            await Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    }

    const handlePress = async () => {
        if (!token) {
            await registerForPushNotificationsAsync();
        } else {
           await schedulePushNotification();
        }
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <Text>Test</Text>
        </Pressable>
    );
};

export default TestButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        width: '50%',
        height: 30,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
