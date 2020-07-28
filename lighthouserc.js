module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      settings: {
        onlyCategories: ['performance'],
        useThrottling: true,
        recordTrace: true,
        // Skip the h2 audit so it doesn't lie to us. See https://github.com/GoogleChrome/lighthouse/issues/6539
        skipAudits: ['uses-http2'],
      },
      startServerCommand: 'npm start -p',
    },
    assert: {
      preset: 'lighthouse:recommended',
      includePassedAssertions: true,
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
