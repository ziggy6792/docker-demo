module.exports = {
  ci: {
    collect: {
      // staticDistDir: "./build",
      url: 'http://google.com/',
      settings: {
        'chrome-flags': '--no-sandbox --headless',
      },
      numberOfRuns: 1,
    },
    upload: {
      target: 'filesystem',
      // reportFilenamePattern: 'report.%%EXTENSION%%"',
    },
  },
};
