import { promisify } from 'node:util';
import { readdir, writeFile } from 'node:fs';
import { join, relative } from 'node:path';

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const lokiDir = join(__dirname, '..', '.loki');
const actualDir = join(lokiDir, 'current');
const expectedDir = join(lokiDir, 'reference');
const diffDir = join(lokiDir, 'difference');

async function main() {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(
    join(lokiDir, 'report.json'),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lokiDir, actualDir),
      expectedDir: relative(lokiDir, expectedDir),
      diffDir: relative(lokiDir, diffDir),
    })
  );
}

void main();
