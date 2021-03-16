import { useState, useEffect } from 'react';
import { fetchPosts } from '../api';

const LIMIT = 20;

export function useFetchPosts() {
    const [isLoading, setLoading] = useState(true);
    const [isRefreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(0, LIMIT).then(newPosts => {
            setPosts(newPosts);
            setLoading(false);
        });
    }, []);

    async function onEndReached() {
        const newPosts = await fetchPosts(posts.length, LIMIT);
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
    }

    async function onRefresh() {
        setRefreshing(true);
        const newPosts = await fetchPosts(0, posts.length);
        setPosts(newPosts);
        setRefreshing(false);
    }

    return { isLoading, posts, onEndReached, isRefreshing, onRefresh };
}
