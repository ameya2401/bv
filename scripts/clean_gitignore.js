import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

try {
  const workspaceRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(workspaceRoot, 'public');
  const gitignorePath = path.join(workspaceRoot, '.gitignore');

  if (!fs.existsSync(gitignorePath)) {
    console.error('No .gitignore found at', gitignorePath);
    process.exit(1);
  }

  let gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');

  // Remove previous ignore settings to prevent duplicates
  const lines = gitignoreContent.split('\n');
  const cleanedLines = lines.filter(line => {
    const trimmed = line.trim();
    return !(
      trimmed.startsWith('public/pdf/') ||
      trimmed.startsWith('public/gifs/') ||
      trimmed.startsWith('public/images/') ||
      trimmed.startsWith('public/assets/images/') ||
      trimmed.startsWith('!public/') ||
      trimmed.includes('ignored large assets')
    );
  });

  const largeFiles = [];
  const allFiles = getFilesRecursively(publicDir);

  // 15 MB limit is safe (GitHub warning starts at 50MB, blocks at 100MB)
  const SIZE_LIMIT = 15 * 1024 * 1024; 

  allFiles.forEach((file) => {
    const stat = fs.statSync(file);
    if (stat.size > SIZE_LIMIT) {
      const relativePath = path.relative(workspaceRoot, file).replace(/\\/g, '/');
      largeFiles.push(relativePath);
    }
  });

  cleanedLines.push('\n# Automatically ignored large assets (>15MB)');
  largeFiles.forEach(file => {
    cleanedLines.push(file);
  });

  fs.writeFileSync(gitignorePath, cleanedLines.join('\n'), 'utf8');

  console.log(`Successfully updated .gitignore!`);
  console.log(`Ignored ${largeFiles.length} files that are larger than 15MB:`);
  largeFiles.forEach(f => console.log(` - ${f}`));
} catch (error) {
  console.error('Error running script:', error.message);
}
