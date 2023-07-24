import React, {memo, ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";

type Props = {
    children: ReactNode;
    isScrollView?: boolean;
};


const Layout: React.FC<Props> = ({ children, isScrollView = false}) => {
    return (
        <View style={styles.container}>
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}
        </View>
    );
};

export default memo(Layout);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 16,
    }
})
