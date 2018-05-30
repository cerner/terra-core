const spawn = require('child_process').spawn;
const os = require('os');

let regex = '';
let jestcmd = '';
switch (os.type()) {
  case 'Linux':
  case 'Darwin':
    regex = `${process.env.npm_package_name}/tests`;
    jestcmd = 'jest';
    break;
  case 'Windows_NT':
    regex = `${process.env.npm_package_name}\\\\tests`;
    jestcmd = 'jest.cmd';
    break;
  default:
    throw new Error(`Unsupported OS found: ${os.type()}`);
}

spawn(jestcmd, [regex, '--config', '../../jestconfig.json'], { stdio: 'inherit' });
