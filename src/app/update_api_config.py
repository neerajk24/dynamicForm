import requests
import json

# URL to fetch the Swagger JSON
swagger_url = 'https://petstore.swagger.io/v2/swagger.json'

# Path and method to extract schema for
path = '/pet'
method = 'post'

# Fetch the Swagger documentation
response = requests.get(swagger_url)
swagger_json = response.json()

# Function to extract schema for a given path and method
def extract_schema(swagger_json, path, method):
    try:
        parameters = swagger_json['paths'][path][method]['parameters']
        for param in parameters:
            if param['in'] == 'body':
                return param['schema']
        return None
    except KeyError as e:
        print(f"KeyError: {e} - Path or method might not be correct.")
        return None

# Function to convert Swagger schema to apiConfig schema format
def convert_schema(swagger_schema):
    properties = swagger_schema.get('properties', {})
    required = swagger_schema.get('required', [])
    api_schema = []
    for key, value in properties.items():
        field_type = value.get('type', 'string')
        if field_type == 'integer':
            field_type = 'number'
        elif field_type == 'string' and 'format' in value and value['format'] == 'email':
            field_type = 'email'
        elif field_type == 'array':
            field_type = 'array'
        elif field_type == 'object':
            field_type = 'object'
        api_schema.append({
            'key': key,
            'type': field_type,
            'label': key.capitalize(),
            'required': key in required
        })
    return api_schema

# Extract the schema
swagger_schema = extract_schema(swagger_json, path, method)

# Convert to apiConfig format
if swagger_schema:
    api_schema = convert_schema(swagger_schema)
else:
    print("Schema not found.")
    api_schema = []

# Path to the JavaScript file (update this path to the correct one)
js_file = 'D:/Repo/DynamicForm/dynamic-form-app/src/app/api-config.ts'

# Read the JavaScript file
with open(js_file, 'r') as file:
    js_content = file.readlines()

# Update the apiConfig with new schema
new_form_config = f"""{{
        formName: 'Form from Swagger',
        url: 'https://petstore.swagger.io/v2/pet',
        schema: {json.dumps(api_schema, indent=2)}
    }}"""

# Find the position to insert the new config (before the last closing bracket)
insert_position = len(js_content) - 1
while not js_content[insert_position].strip().endswith('];'):
    insert_position -= 1

# Insert the new config
js_content.insert(insert_position, f"    {new_form_config},\n")

# Write back the updated content
with open(js_file, 'w') as file:
    file.writelines(js_content)

print("apiConfig updated successfully.")
