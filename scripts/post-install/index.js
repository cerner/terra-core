console.log(process.cwd());
// When npm install is run in monorepo
// /Users/bj031910/repos/terra-core

// When installed in theme repo
// /Users/bj031910/repos/cerner-consumer-theme/node_modules/terra-core

console.log(__dirname);

// When npm install is run in monorepo
// /Users/bj031910/repos/terra-core/scripts/post-install

// When installed in theme repo
// /Users/bj031910/repos/cerner-consumer-theme/node_modules/terra-core/scripts/post-install


// link-parent-bin && npm run compile && npm run bootstrap


const string = __dirname;
const substring = 'node_modules';

const isInstalled = string.indexOf(substring) !== -1;

console.log(isInstalled);
