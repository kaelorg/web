const { resolve } = require('path');
const { promisify } = require('util');
const { exec: defaultExec } = require('child_process');

const execPromise = promisify(defaultExec);

const sitePath = resolve('.', 'packages', 'site');

async function run() {
  const PROJECT_NAME = process.env.PROJECT_NAME;

  console.log({
    project: PROJECT_NAME,
  });

  if (PROJECT_NAME !== 'site') {
    return;
  }

  await execPromise('yarn next build', {
    cwd: sitePath,
  });

  await execPromise('yarn next export', {
    cwd: sitePath,
  });
}

run();
