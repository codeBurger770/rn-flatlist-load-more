import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useFetchPosts } from './hooks';
import { Post, Separator, Empty } from './components';

export default function App() {
  const { isLoading, posts, onEndReached, isRefreshing, onRefresh } = useFetchPosts();

  const keyExtractor = useCallback(post => post.id.toString());

  const renderItem = useCallback(({ item }) => (
    <Post {...item} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={Empty}
          onEndReachedThreshold={0.25}
          onEndReached={onEndReached}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
