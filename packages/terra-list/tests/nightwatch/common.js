function checkSingleElementState(browser, selector, className, isPresent) {
  if (isPresent) {
    browser.expect.element(selector).to.have.attribute('class').which.contains(className);
  } else {
    browser.expect.element(selector).to.have.attribute('class').which.not.contains(className);
  }
}

function checkElementsClass(browser, selectors = [], classes = [], states = []) {
  selectors.forEach((selector, index) => {
    checkSingleElementState(browser, selector, classes[index], states[index]);
  });
}

module.exports = {
  '@disable': true,
  checkElementsClass,
};
