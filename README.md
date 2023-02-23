# Boilerplater

This is a Node.js command-line tool for creating a new project with a pre-defined directory structure. It reads a JSON file that specifies the desired directory structure, creates the directories and files as needed, and optionally initializes a new Git repository for the project.

## Features:

1. Customizable directory structure: define your own directory structure in a JSON file and the tool will create the directories and files accordingly.
2. Flexible configuration: the tool can be easily customized to support different types of projects and directory structures.

## Get Started

-   define your directory structure in structure.json file
-   `npm start {optional_output_directory_name}`

## Examples

```json
{
    "src": {
        "app": ["app.js", "bootstrap.js"],
        "components": ["index.jsx", "layout.jsx"],
        "utils": "index.js"
    },
    ".": ["index.js"]
}
```
