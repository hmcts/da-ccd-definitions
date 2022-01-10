exports.config = {
  tests: './smoke_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      waitForNavigation: ['domcontentloaded'],
      chrome: { ignoreHTTPSErrors: true }
    }
  },
  include: { I: './steps_file.js' },
  bootstrap: null,
  mocha: {},
  name: 'da-ccd-definitions'
};
