# errc

[![npm install][install-img]][npm-url]

[npm-url]: https://www.npmjs.com/package/errc
[github-url]: https://github.com/rsp/node-errc
[readme-url]: https://github.com/rsp/node-errc#readme
[issues-url]: https://github.com/rsp/node-errc/issues
[license-url]: https://github.com/rsp/node-errc/blob/master/LICENSE.md
[travis-url]: https://travis-ci.org/rsp/node-errc
[travis-img]: https://travis-ci.org/rsp/node-errc.svg?branch=master
[snyk-url]: https://snyk.io/test/github/rsp/node-errc
[snyk-img]: https://snyk.io/test/github/rsp/node-errc/badge.svg
[david-url]: https://david-dm.org/rsp/node-errc
[david-img]: https://david-dm.org/rsp/node-errc/status.svg
[install-img]: https://nodei.co/npm/errc.png?compact=true
[downloads-img]: https://img.shields.io/npm/dt/errc.svg
[license-img]: https://img.shields.io/npm/l/errc.svg
[stats-url]: http://npm-stat.com/charts.html?package=errc
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png

A different style of callbacks experiment written for an answer on Stack Overflow:

* [Why does node prefer error-first callback?](https://stackoverflow.com/questions/40511513/why-does-node-prefer-error-first-callback/40512067#40512067)

It allows you to register callbacks to standard Node functions that expect error-fist callback style, but use a different convention inside of your callback - the first argument to your callback will either be an instance of `Error` on failure (with its `message` field set to the original error) or the first non-error argument on success.

Installation
------------
Install to use in your Node project, updating the dependencies in package.json:
```sh
npm install errc --save
```

Usage
-----
```js
var errc = require('errc');
var fs = require('fs');

fs.readFile('example2.txt', errc(function (data) {
  // here data is either an instance of Error on failure
  // or a real data on success
});
```

Issues
------
For any bug reports or feature requests
please [post an issue on GitHub][issues-url].

Author
------
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-------
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.
