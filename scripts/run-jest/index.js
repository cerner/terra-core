const spawn = require('child_process').spawn;
const os = require('os');

let regex = '';
let jestcmd = '';
if (os.type() === 'Linux') {
  regex = `${process.env.npm_package_name}/tests`;
  jestcmd = 'jest';
} else if (os.type() === 'Darwin') {
  regex = `${process.env.npm_package_name}/tests`;
  jestcmd = 'jest';
} else if (os.type() === 'Windows_NT') {
  regex = `${process.env.npm_package_name}\\\\tests`;
  jestcmd = 'jest.cmd';
} else {
  throw new Error(`Unsupported OS found: ${os.type()}`);
}

spawn(jestcmd, [regex, '--config', '../../jestconfig.json'], { stdio: 'inherit' });
