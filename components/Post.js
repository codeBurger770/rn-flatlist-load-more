import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Post = React.memo(({ title, body }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
    </View>
));

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 20,
    },
    body: {
        fontSize: 16,
    },
});
