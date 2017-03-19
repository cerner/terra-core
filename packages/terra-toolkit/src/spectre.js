import http from 'http';
import request from 'request';
import fs from 'fs';

exports.createSpectreRun = (browser, callback) => {
  const data = JSON.stringify({
    project: 'terra-ui',
    suite: `${browser.currentTest.module}-${browser.options.desiredCapabilities.browserName}-${browser.globals.windowSizeKey}`,
  });

  function responseCallback(res) {
    res.setEncoding('utf8');
    res.on('data', (responseData) => {
      const updatedBrowserGlobals = browser.globals;
      updatedBrowserGlobals.spectreRunId = JSON.parse(responseData).id;
    });
    res.on('end', callback);
  }

  try {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
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
    callback();
  }
};

exports.createSpectreTest = (browser, imagePath, callback) => {
  function responseCallback(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('upload failed:', err);
    }
    callback();
  }

  const formData = {};
  formData['test[run_id]'] = browser.globals.spectreRunId;
  formData['test[name]'] = browser.currentTest.name;
  formData['test[platform]'] = browser.options.desiredCapabilities.platform ? browser.options.desiredCapabilities.platform : 'default';
  formData['test[browser]'] = browser.options.desiredCapabilities.browserName;
  formData['test[size]'] = browser.globals.width;
  formData['test[screenshot]'] = fs.createReadStream(imagePath);

  request.post({
    url: 'http://localhost:3000/tests',
    formData,
  }, responseCallback);
};
