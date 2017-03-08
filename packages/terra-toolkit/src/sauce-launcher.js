import sauceConnectLauncher from 'sauce-connect-launcher';

exports.launchSauceConnect = (done) => {
  if (process.env.REMOTE === 'true') {
    sauceConnectLauncher({
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      port: 4446,
    }, (_, sauceConnectProcess) => {
      module.sauceConnectProcess = sauceConnectProcess;
      done();
    });
  } else {
    done();
  }
};

exports.closeSauceConnect = (done) => {
  if (process.env.REMOTE === 'true') {
    module.sauceConnectProcess.close(done);
  } else {
    done();
  }
};
