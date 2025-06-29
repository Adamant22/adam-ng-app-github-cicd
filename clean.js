// Clean script for Angular/TypeScript projects
// Removes dist, out-tsc, coverage, and cache folders
const fs = require('fs');
const path = require('path');

const foldersToDelete = [
  'dist',
  'out-tsc',
  'coverage',
  '.angular',
  '.eslintcache',
  '.cache',
];

foldersToDelete.forEach((folder) => {
  const fullPath = path.join(__dirname, folder);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`Deleted: ${folder}`);
  }
});
console.log('Clean complete.');
