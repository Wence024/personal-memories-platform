import React, { useState, useEffect } from 'react';
import { getUsers, createPost, updatePost, patchPost, deletePost } from '../utils/api.js';

function App() {
  const [users, setUsers] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '', userId: 1 });
  const [updatedPost, setUpdatedPost] = useState({ title: '', body: '' });
  // eslint-disable-next-line no-unused-vars
  const [postToUpdate, setPostToUpdate] = useState(1);  // Assume post with ID 1 for PUT/PATCH
  // eslint-disable-next-line no-unused-vars
  const [postToDelete, setPostToDelete] = useState(1);  // Assume post with ID 1 for DELETE
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    // Fetch list of users when the component mounts
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleCreatePost = async () => {
    const result = await createPost(newPost);
    if (result) {
      setResponseMessage('Post created successfully!');
    }
  };

  const handleUpdatePost = async () => {
    const result = await updatePost(postToUpdate, updatedPost);
    if (result) {
      setResponseMessage('Post updated successfully!');
    }
  };

  const handlePatchPost = async () => {
    const result = await patchPost(postToUpdate, updatedPost);
    if (result) {
      setResponseMessage('Post partially updated!');
    }
  };

  const handleDeletePost = async () => {
    const success = await deletePost(postToDelete);
    if (success) {
      setResponseMessage('Post deleted successfully!');
    } else {
      setResponseMessage('Failed to delete post!');
    }
  };

  return (
    <div className="App">
      <h1>API Integration Example</h1>

      {/* Display Users */}
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Create Post */}
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={handleCreatePost}>Create Post</button>

      {/* Update Post */}
      <h2>Update Post (PUT)</h2>
      <input
        type="text"
        placeholder="Updated Title"
        value={updatedPost.title}
        onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
      />
      <textarea
        placeholder="Updated Body"
        value={updatedPost.body}
        onChange={(e) => setUpdatedPost({ ...updatedPost, body: e.target.value })}
      />
      <button onClick={handleUpdatePost}>Update Post</button>

      {/* Patch Post */}
      <h2>Patch Post (Partial Update)</h2>
      <input
        type="text"
        placeholder="Partial Title"
        value={updatedPost.title}
        onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
      />
      <textarea
        placeholder="Partial Body"
        value={updatedPost.body}
        onChange={(e) => setUpdatedPost({ ...updatedPost, body: e.target.value })}
      />
      <button onClick={handlePatchPost}>Patch Post</button>

      {/* Delete Post */}
      <h2>Delete Post</h2>
      <button onClick={handleDeletePost}>Delete Post</button>

      {/* Response Message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default App;
