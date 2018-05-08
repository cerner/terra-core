const replace = require('replace-in-file');

const ml = `Unreleased
----------

2.9.0 - (May 8, 2018)
------------------
### Changed
* Minor dependency version bump`;


const options = {
  files: 'packages/**/CHANGELOG.md',
  from: /Unreleased\n----------/g,
  to: ml,
};

replace(options)
  .then((changes) => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
