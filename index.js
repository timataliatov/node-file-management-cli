import { createFileWithMessage } from './createFileWithMessage.js';
import { deleteFileByName } from './deleteFileByName.js';

const action = process.argv[2];

async function main() {
  switch (action) {
    case 'create':
      if (!process.argv[3]?.length) {
        throw new Error('Message cannot be empty');
      }
      return await createFileWithMessage(process.argv[3], process.argv[4]);
    case 'delete':
      if (!process.argv[3]?.length) {
        throw new Error('File path cannot be empty');
      }
      return await deleteFileByName(process.argv[3]);
    default:
      console.error(`Action '${action}' was not recognized. Available actions: 'create' and 'delete'\n`);
      console.log('Usage:');
      console.log('\tnode index.js create <message> [filename]');
      console.log('\tnode index.js delete <filename>');
      process.exit(1);
  }
}

main().then(console.log).catch(console.error);
