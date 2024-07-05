export const apiConfig = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    schema: [
      { key: 'userId', type: 'number', label: 'User ID', required: true },
      { key: 'id', type: 'number', label: 'ID', required: true },
      { key: 'title', type: 'text', label: 'Title', required: true },
      { key: 'body', type: 'textarea', label: 'Body', required: true }
    ]
  };
  