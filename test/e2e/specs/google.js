// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'google search': function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .keys(browser.Keys.ENTER);
  },
  'has text': function (browser) {
    browser
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  },
};
