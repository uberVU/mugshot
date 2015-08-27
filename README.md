# Mugshot

Mugshot is a library for visual regression testing. It helps you identify the
parts of your product that have unexpected visual changes.

The beauty of Mugshot comes from its independence of any browser,
test-runner, diffing tool etc. It achieves this through interfaces over
these dependencies and comes with some implementations of its own. You can
easily write your own over the tools you prefer.

Mugshot comes with the following implementations out of the box:

* [WebdriverIO](http://webdriver.io/) - Selenium 2.0 bindings for NodeJS
* [Looks-same](https://github.com/gemini-testing/looks-same) - Compare PNG
  images.
* [Node fs](http://devdocs.io/node/fs) - file system implementation using the
  native `fs` module.
* [PNGCrop](https://github.com/chenglou/png-crop) - crop PNG images.

There's also a [ChaiJS](http://chaijs.com/) plugin:
[chai-mugshot](https://github.com/uberVU/chai-mugshot).


## Installation

```sh
npm install --save-dev mugshot
```

## Usage

```js
var expect = require('chai').expect;
var Mugshot = require('mugshot');
var WebdriverIOAdapter = Mugshot.adapters.WebdriverIO;
var webdriverio = require('webdriverio');

describe('Suite', function() {
  var mugshot, webdriverioInstance;

  before(function(done) {
    var options = {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    };

    // 1. Prepare the browser instance.
    webdriverioInstance = webdriverio.remote(options).init()
      .url('http://example.com')
      .then(function() {
        // 2. Create an adapter over it.
        var browser = new WebdriverIOAdaptor(webdriverioInstance);

        // 3. Hand it over to Mugshot.
        mugshot = new Mugshot(browser);

        done();
      });
  });

  it('should something', function(done) {
    var captureItem = {
      name: 'myComponent',
      selector: '#myComponent'
    };

    // 4. Do the testing.
    mugshot.test(captureItem, function(error, result) {
      expect(error).to.be.null;

      expect(result).to.be.true;

      done();
    });
  });

  after(function() {
    return webdriverio.end();
  });
});
```


## API

### Constructor

Mugshot takes 2 arguments in its constructor: a browser instance and an
options object.

The first one is mandatory and must be an implementation of the [browser
interface](lib/interfaces/browser.js).

The options object is optional and has the following keys:

- **fs** - an implementation of the [file system
  interface](lib/interfaces/fs.js),
- **differ** - an implementation of the [differ
  interface](lib/interfaces/differ.js),
- **pngProcessor** - an implementation of the [PNG processor
  interface](lib/interfaces/png-processor.js),
- **rootDirectory** - the path where the screenshots and diffs will be saved;
  defaults to `visual-tests`.

If any of the implementations are not provided, Mugshot's defaults are used.


### Methods

Mugshot exposes only one method - `test` - that receives a `captureItem`
object and a `callback`.

The `captureItem` object can contain the following:

- **name** - a name for the screenshot that will be saved to the file system
- **selector** - An HTML/CSS selector.

If no selector is provided, then the **whole page** will be tested.

Mugshot will use the provided name to create the following files:

- **<name>.png** - the baseline screenshot,
- **<name>.new.png** - the new screenshot and
- **<name>.diff.png** - the diff between the above two.

If testing a selector for the first time, the baseline screenshot will be saved
and the test will pass. If the baseline is found on the file system, a new
screenshot will be taken and compared with it. If and **only if** there are
differences, the other 2 files will be saved to the file sysem. If there are no
differences, the files will be cleaned up from the file system so that you're
only left with the baseline screenshot.

The `callback` will be invoked after the files have been saved to the file
system and will receive 2 arguments:

- **error** - `null` in case there's no error, otherwise holds an `Error`
  instance
- **result** - Boolean indicating whether the test passed or not; if it's
  `false` then you can find the `.diff.png` and `.new.png` files on the file
  system.