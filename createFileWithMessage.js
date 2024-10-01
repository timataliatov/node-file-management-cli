import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'; // Add this import
import { dirname } from 'path'; // Add this for __dirname equivalent

const __filename = fileURLToPath(import.meta.url); // Convert module URL to file path
const __dirname = dirname(__filename); // Get directory name

export async function createFileWithMessage(message, filename = null) {
  const now = new Date();

  // create directory name in yyyy-mm-dd format
  const dirName = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

  // create filename in hh-mm-ss.txt format if not provided
  const fileName = filename || `${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}.txt`;

  const dirPath = path.join(process.cwd(), 'files', dirName);
  const filePath = path.join(dirPath, fileName);

  try {
    // create directory if it doesn't exist
    await fs.mkdir(dirPath, { recursive: true });

    // append message to file (creates file if it doesn't exist)
    await fs.appendFile(filePath, message + '\n');

    return `Message added to ${filePath}`;
  } catch (error) {
    throw new Error(`Error writing file: ${error.message}`);
  }
}

// Handle command line execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  createFileWithMessage(process.argv[2], process.argv[3])
    .then(console.log)
    .catch(console.error);
}
