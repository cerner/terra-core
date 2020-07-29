module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        onlyCategories: ['performance'],
        useThrottling: true,
        recordTrace: true,
        // Skip the h2 audit so it doesn't lie to us. See https://github.com/GoogleChrome/lighthouse/issues/6539
        skipAudits: ['uses-http2'],
      },
      startServerCommand: 'npm start',
      url: [
        'http://localhost:8080/raw/tests/terra-action-header/action-header/back-action-header',
        'http://localhost:8080/raw/tests/terra-button/button/active-variant-buttons',
        'http://localhost:8080/raw/tests/terra-form-select/form-select/select-inside-iframe',
      ],
    },
    assert: {
      preset: 'lighthouse:recommended',
      includePassedAssertions: true,
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '../lhci',
    },
  },
};
