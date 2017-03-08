import https from 'https';

module.exports = (browser, callback) => {
  const currentTest = browser.currentTest;
  const username = browser.options.username;
  const sessionId = browser.capabilities['webdriver.remote.sessionid'];
  const accessKey = browser.options.accessKey;
  const passed = currentTest.results.passed === currentTest.results.tests;

  const data = JSON.stringify({
    passed,
  });

  const requestPath = `/rest/v1/${username}/jobs/${sessionId}`;

  try {
    const req = https.request({
      hostname: 'saucelabs.com',
      path: requestPath,
      method: 'PUT',
      auth: `${username}:${accessKey}`,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    });

    req.write(data);
    req.end();
  } catch (error) {
    callback();
  }
};
