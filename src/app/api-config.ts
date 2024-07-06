export const apiConfig = [
    {
      formName: 'Form 1',
      url: 'https://jsonplaceholder.typicode.com/posts',
      schema: [
        { key: 'userId', type: 'number', label: 'User ID', required: true },
        { key: 'id', type: 'number', label: 'ID', required: true },
        { key: 'title', type: 'text', label: 'Title', required: true },
        { key: 'body', type: 'textarea', label: 'Body', required: true }
      ]
    },
    {
      formName: 'Form 2',
      url: 'https://reqres.in/api/users',
      schema: [
        { key: 'id', type: 'number', label: 'ID', required: true },
        { key: 'email', type: 'email', label: 'Email', required: true },
        { key: 'first_name', type: 'text', label: 'First Name', required: true },
        { key: 'last_name', type: 'text', label: 'Last Name', required: true },
        { key: 'avatar', type: 'text', label: 'Avatar URL', required: false }
      ]
    },
    {
        formName: 'Form from Swagger',
        url: 'https://petstore.swagger.io/v2/pet',
        schema: [
  {
    "key": "id",
    "type": "number",
    "label": "Id",
    "required": false
  },
  {
    "key": "category",
    "type": "object",
    "label": "Category",
    "required": false,
    "properties": [
      {
        "key": "id",
        "type": "number",
        "label": "Id",
        "required": false
      },
      {
        "key": "name",
        "type": "string",
        "label": "Name",
        "required": false
      }
    ]
  },
  {
    "key": "name",
    "type": "string",
    "label": "Name",
    "required": true
  },
  {
    "key": "photoUrls",
    "type": "array",
    "label": "Photourls",
    "required": true
  },
  {
    "key": "tags",
    "type": "array",
    "label": "Tags",
    "required": false
  },
  {
    "key": "status",
    "type": "string",
    "label": "Status",
    "required": false
  }
]
    },
    {
        formName: 'Form from Swagger',
        url: 'https://petstore.swagger.io/v2/pet',
        schema: [
  {
    "key": "id",
    "type": "number",
    "label": "Id",
    "required": false
  },
  {
    "key": "category",
    "type": "object",
    "label": "Category",
    "required": false,
    "properties": [
      {
        "key": "id",
        "type": "number",
        "label": "Id",
        "required": false
      },
      {
        "key": "name",
        "type": "string",
        "label": "Name",
        "required": false
      }
    ]
  },
  {
    "key": "name",
    "type": "string",
    "label": "Name",
    "required": true
  },
  {
    "key": "photoUrls",
    "type": "array",
    "label": "Photourls",
    "required": true
  },
  {
    "key": "tags",
    "type": "array",
    "label": "Tags",
    "required": false
  },
  {
    "key": "status",
    "type": "string",
    "label": "Status",
    "required": false
  }
]
    },
  ];
  