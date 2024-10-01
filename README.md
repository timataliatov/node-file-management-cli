# 📁 File Management CLI

A simple command-line interface (CLI) for creating and deleting files with timestamps.

## 📚 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Creating a File](#creating-a-file)
  - [Deleting a File](#deleting-a-file)
- [Project Structure](#project-structure)
- [Function Documentation](#function-documentation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- Create files with custom messages and optional filenames
- Automatically organize files into date-based directories
- Delete files and remove empty directories
- Simple command-line interface

## 🚀 Installation

1. Clone this repository:
   ```
   git clone https://github.com/timataliatov/node-file-management-cli.git
   ```
2. Navigate to the project directory:
   ```
   cd file-management-cli
   ```
3. Install dependencies:
   ```
   npm install
   ```

## 💻 Usage

The CLI supports two main actions: `create` and `delete`.

### Creating a File

To create a file with a message:

```
node index.js create <message> [filename]
```

- `<message>`: The content to be written to the file (required)
- `[filename]`: Optional custom filename (default: timestamp-based filename)

Example:
```
node index.js create "Hello, world!"
```

### Deleting a File

To delete a file:

```
node index.js delete <filepath>
```

- `<filepath>`: The path to the file you want to delete (required)

Example:
```
node index.js delete ./files/2024-10-01/12-30-45.txt
```

## 📂 Project Structure

```
.
├── createFileWithMessage.js
├── deleteFileByName.js
├── index.js
└── README.md
```

- `createFileWithMessage.js`: Contains the logic for creating files
- `deleteFileByName.js`: Contains the logic for deleting files
- `index.js`: The main CLI entry point

## 📖 Function Documentation

### `createFileWithMessage(message, filename = null)`

Creates a file with the given message.

- `message` (string): The content to be written to the file
- `filename` (string, optional): Custom filename. If not provided, a timestamp-based filename is used

Returns: A promise that resolves with a success message

### `deleteFileByName(filePath)`

Deletes the specified file and removes the parent directory if it becomes empty.

- `filePath` (string): The path to the file to be deleted

Returns: A promise that resolves with a success or failure message

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

For more information on using Node.js for file system operations, check out the [Node.js fs module documentation](https://nodejs.org/api/fs.html).
