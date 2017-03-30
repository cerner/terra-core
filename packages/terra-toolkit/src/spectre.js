import http from 'http';
import request from 'request';
import fs from 'fs';

exports.createSpectreRun = (spectreRunMap, suiteName) => () => new Promise((resolve, reject) => {
  const returnedSpectreRunMap = spectreRunMap;

  function responseCallback(res) {
    res.setEncoding('utf8');
    res.on('data', (responseData) => {
      returnedSpectreRunMap[suiteName] = JSON.parse(responseData).id;
    });
    res.on('end', () => {
      resolve(returnedSpectreRunMap);
    });
  }

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    const data = JSON.stringify({
      project: 'terra-ui',
      suite: suiteName,
    });

    try {
      const req = http.request({
        hostname: 'monstrous-screen-grabber.herokuapp.com',
        path: '/runs',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
        },
      }, responseCallback);

      req.write(data);
      req.end();
    } catch (error) {
      reject(Error(error));
    }
  } else {
    resolve();
  }
});

exports.createSpectreTest = (browser, imagePath, suiteName, callback) => {
  function responseCallback(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('upload failed:', err);
    }
    callback();
  }

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    const version = browser.options.desiredCapabilities.version ? browser.options.desiredCapabilities.version : 'latest';
    const browserName = `${browser.options.desiredCapabilities.browserName}-${version}`;

    const formData = {};
    formData['test[run_id]'] = JSON.parse(process.env.spectreRunMap)[suiteName];
    formData['test[name]'] = `${browser.currentTest.name}`;
    formData['test[platform]'] = browser.options.desiredCapabilities.platform ? browser.options.desiredCapabilities.platform : 'default';
    formData['test[browser]'] = browserName;
    formData['test[size]'] = browser.globals.windowSizeKey;
    formData['test[screenshot]'] = fs.createReadStream(imagePath);

    request.post({
      url: 'http://monstrous-screen-grabber.herokuapp.com/tests',
      formData,
    }, responseCallback);
  } else {
    callback();
  }
};
