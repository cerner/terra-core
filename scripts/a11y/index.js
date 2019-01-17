const fs = require('fs');
const util = require('util');
const puppeteer = require('puppeteer');
const axe = require('axe-core');

const fileContents = fs.readFileSync('./dev-site-config/build/routeConfig.js').toString().split('export default');

const paths = [
  'https://engineering.cerner.com/terra-ui/#/home/terra-ui/index',
  'https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/what-is-terra',
];

const urls = [];
const prefixURL = 'https://engineering.cerner.com/terra-ui/#'

var stringContents = fileContents[1];

var words = stringContents.split(/'path': '/);

// add all the URLs from routeConfig.js to an array
for(i = 0; i < words.length; i++) {
  var url = words[i]
  var n = url.indexOf(/'/);
  url = url.substring(0, url.indexOf("'"));
  if(url.startsWith("/evidence")){    // remove Evidence urls as they pertain to terra-core, not ui
    break
  }
  else {
    url = prefixURL + url;
    urls.push(url)
  }
};

urls.shift(); //remove faulty firsty entry '{\n   }'

urls.push(paths[0]);  // add 2 urls not included in routeConfig.js
urls.push(paths[1]);

//console.log(urls);  testing purposes for importing routeConfig.js urls

const results = [];
let axeResults;
puppeteer.launch().then(async (browser) => {
  const promises = [];
  console.log("Running...");
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    promises.push(browser.newPage().then(async (page) => {
      await page.goto(`${url}`, {
                waitUntil: 'networkidle2',
                timeout: 0
            });

      // add axe-core to the pages
      await page.addScriptTag({
        path: require.resolve('axe-core')
      });

      // run axe on the page
      axeResults = await page.evaluate(async () => {
        return await axe.run();
      });

      // remove result data we don't need
      delete axeResults.passes;
      delete axeResults.inapplicable;
      delete axeResults.incomplete;

      // add results to the collection of axe results
      results.push(axeResults);

    }))
  }
  await Promise.all(promises)
  browser.close();

  // write output to file scripts/a11y/a11y-output.txt
  fs.writeFile("scripts/a11y/a11y-output.txt", util.inspect(results, false, null, true), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Successfully outputted to: terra-core/scripts/a11y/a11y-output.txt");
  });
});
