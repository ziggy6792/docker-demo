module.exports = {
  ci: {
    collect: {
      // staticDistDir: "./build",
      url: 'http://google.com/',
      settings: {
        'chrome-flags': '--no-sandbox --headless',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
