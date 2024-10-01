import { createFileWithMessage } from './createFileWithMessage.js';
import { deleteFileByName } from './deleteFileByName.js';

const action = process.argv[2];


async function main() {
  switch (action) {
    // create file with message
    case 'create':
      if (!process.argv[3]?.length) {
        throw new Error('Message cannot be empty');
      }
      return await createFileWithMessage(process.argv[3], process.argv[4]);
    // delete file by name
    case 'delete':
      if (!process.argv[3]?.length) {
        throw new Error('File path cannot be empty');
      }
      return await deleteFileByName(process.argv[3]);
    default:
      console.error(`Action '${action}' was not recognized. Available actions: 'create' and 'delete'\n`);
      console.log('Usage:');
      // create file with message
      console.log('\tnode index.js create <message> [filename]');
      // delete file by name
      console.log('\tnode index.js delete <filename>');
      process.exit(1);
  }
}

main().then(console.log).catch(console.error);
