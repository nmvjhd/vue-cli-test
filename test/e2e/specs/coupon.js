/**
 * Created by matengfei on 2017/9/25.
 */
// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'forward and back': function (browser) {
    browser
      .url('localhost:8080/account/coupon.html')
      .waitForElementVisible('body', 1000)
      .back()
      .pause(1000)
      .forward()
      // .keys([browser.Keys.ALT, browser.Keys.LEFT_ARROW])
      // .waitForElementVisible('#mv-tiles',5000)
      // .keys([browser.Keys.ALT, browser.Keys.RIGHT_ARROW])
      // .waitForElementVisible('.core-wrap')
      .pause(1000)
      .keys(browser.Keys.LEFT_ARROW)
      .pause(1000)
      .keys(browser.Keys.DOWN_ARROW)
      .pause(1000)
      .end();
  },
  'qrcode': function (browser) {
    browser
      .url('localhost:8080/account/coupon.html')
      .waitForElementVisible('body', 1000)
      .keys(browser.Keys.ENTER)
      .waitForElementVisible('.core-wrap', Infinity)
      .pause(1000)
      .end();
  },
};
