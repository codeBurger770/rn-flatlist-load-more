import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Separator = () => (
    <View style={styles.separator} />
);

const styles = StyleSheet.create({
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#000',
        marginHorizontal: 20,
    },
});
