export async function fetchPosts(start, limit) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
        return response.ok ? await response.json() : [];
    } catch (e) {
        return [];
    }
}
