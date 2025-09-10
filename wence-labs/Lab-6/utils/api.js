import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Base URL for JSONPlaceholder API
});

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const createPost = async (newPost) => {
  try {
    const response = await api.post('/posts', newPost);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
};

export const updatePost = async (postId, updatedPost) => {
  try {
    const response = await api.put(`/posts/${postId}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
};

export const patchPost = async (postId, partialUpdate) => {
  try {
    const response = await api.patch(`/posts/${postId}`, partialUpdate);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.status === 200;
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
};
