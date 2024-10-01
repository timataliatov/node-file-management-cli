import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


// Convert module URL to file path
const __filename = fileURLToPath(import.meta.url);
 // Get directory name
const __dirname = dirname(__filename);


export async function deleteFileByName(filePath) {
  console.log('Trying to delete:', filePath); // Debug log to verify the path

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);

    // Check if directory is empty and delete if so
    const dirPath = path.dirname(filePath);
    const files = await fs.readdir(dirPath);
    if (files.length === 0) {
      await fs.rmdir(dirPath);
      return `File ${filePath} has been deleted. Empty directory ${dirPath} has been removed.`;
    }

    return `File ${filePath} has been deleted.`;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return `File ${filePath} does not exist.`;
    } else {
      throw new Error(`Error deleting file: ${error.message}`);
    }
  }
}


// Handle command line execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  deleteFileByName(process.argv[2])
    .then(console.log)
    .catch(console.error);
}
