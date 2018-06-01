module.exports = {
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  testMatch: [
    `${process.cwd()}/**/jest/**/(*.)(spec|test).js?(x)`,
  ],
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '\\.(svg|jpg|png|md)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
