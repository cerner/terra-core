import sauceConnectLauncher from 'sauce-connect-launcher';

exports.launchSauceConnect = () => new Promise((resolve, reject) => {
  if (process.env.REMOTE === 'true') {
    sauceConnectLauncher({
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      port: 4446,
    }, (error, sauceConnectProcess) => {
      if (!error) {
        module.sauceConnectProcess = sauceConnectProcess;
        resolve();
      } else {
        reject(Error(error));
      }
    });
  } else {
    resolve();
  }
});

exports.closeSauceConnect = () => new Promise((resolve) => {
  if (module.sauceConnectProcess) {
    module.sauceConnectProcess.close(resolve);
  } else {
    resolve();
  }
});
