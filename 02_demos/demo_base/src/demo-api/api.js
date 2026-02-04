export const API_BASE = "https://jsonplaceholder.typicode.com";

export async function fetchPost(id) {
    const res = await fetch(`${API_BASE}/posts/${id}`);
    if(!res.ok) throw new Error (`HTTP ${res.status}`)
    return res.json();
}