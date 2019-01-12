const { loadPage } = require('axe-puppeteer');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const axeBuilder = await loadPage(
    browser,
    'https://engineering.cerner.com/terra-core/#/home',
  );
  const results = await axeBuilder.withTags(['section508', 'wcag2aa']).analyze();
  console.log(results);
})();
