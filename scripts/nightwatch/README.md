#nightwatch

The nightwatch script will run tests at all resolutions given a passed in argument to represent the driver in parallel.  If no argument is passed in the default driver will be used, namely phantomjs.

```
node scripts/nightwatch/nightwatch.js chrome
```

#nightwatch_non_parallel

The nightwatch non parallel script will run tests at all resolutions given a passed in argument to represent the driver.  If no argument is passed in the default driver will be used, namely phantomjs.

```
node scripts/nightwatch/nightwatch-non-parallel.js safari
```
