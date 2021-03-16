import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Empty = () => (
    <Text style={styles.empty}>Постов нет...</Text>
);

const styles = StyleSheet.create({
    empty: {
        padding: 20,
        textAlign: 'center',
    },
});
