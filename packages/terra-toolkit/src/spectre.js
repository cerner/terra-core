import http from 'http';
import request from 'request';
import fs from 'fs';

exports.createSpectreRun = () => new Promise((resolve, reject) => {
  function responseCallback(res) {
    let spectreRunId = 0;
    res.setEncoding('utf8');
    res.on('data', (responseData) => {
      spectreRunId = JSON.parse(responseData).id;
    });
    res.on('end', () => {
      resolve(spectreRunId);
    });
  }

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    const data = JSON.stringify({
      project: 'terra-ui',
      suite: 'Full Suite',
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
    resolve(0);
  }
});

exports.createSpectreTest = (browser, imagePath, callback) => {
  function responseCallback(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('upload failed:', err);
    }
    callback();
  }

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    const formData = {};
    formData['test[run_id]'] = process.env.spectreRunId;
    formData['test[name]'] = `${browser.currentTest.module} - ${browser.currentTest.name}`;
    formData['test[platform]'] = browser.options.desiredCapabilities.platform ? browser.options.desiredCapabilities.platform : 'default';
    formData['test[browser]'] = browser.options.desiredCapabilities.browserName;
    formData['test[size]'] = browser.globals.width;
    formData['test[screenshot]'] = fs.createReadStream(imagePath);

    request.post({
      url: 'http://monstrous-screen-grabber.herokuapp.com/tests',
      formData,
    }, responseCallback);
  } else {
    callback();
  }
};
