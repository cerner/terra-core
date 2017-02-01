import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import specReporter from 'jasmine-spec-reporter';
import TestResults from './test-results';

export default function (config) {
  jasmine.getEnv().clearReporters();
  jasmine.getEnv().addReporter(new specReporter.SpecReporter());
  jasmine.getEnv().addReporter({
    jasmineStarted: () => {
      if (process.env.SKIP_SCREENSHOTS !== 'true') {
        jasmine.terraToolkitTestResults = new TestResults();
      }
    },

    jasmineDone: () => {
      if (jasmine.terraToolkitTestResults !== undefined) {
        jasmine.terraToolkitTestResults.save();
      }
    },

    specStarted: (result) => {
      if (jasmine.terraToolkitTestResults !== undefined) {
        jasmine.terraToolkitTestResults.start(result);
      }
    },

    specDone: () => {
      if (jasmine.terraToolkitTestResults !== undefined) {
        jasmine.terraToolkitTestResults.finish();
      }
    },
  });

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

  let server;
  beforeAll(() => {
    server = new WebpackDevServer(webpack(config), {
      quiet: true,
    });
    server.listen(8080, '0.0.0.0');
  });

  afterAll(() => {
    server.close();
  });
}
