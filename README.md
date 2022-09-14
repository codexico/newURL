# newURL

Simple function to convert strings to urls.

Given a string returns a valid [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL).

Mostly used to fix urls without protocol, like "example.com".

No need for regexes, using only the native [URL constructor](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL).

## Install

```sh
npm install new-url
```

## Usage

```js
import { newURL } from "new-url";
```

- Turn `"example.com"` into `"https://example.com/"`:

```js
const url = newURL("example.com").href; // "https://example.com/"
```

- Works with any string:

```js
const url = newURL("example").href; // "https://example/"
```

```js
const url = newURL(
  "ftp://user:password@www.example.com:8000/path/name?foo=bar&bar=foo#hash"
);
url.href; // "https://example.com/"
url.hash; // "#hash"
url.host; // "www.example.com:8000"
url.hostname; // "www.example.com"
url.href; // "ftp://user:password@www.example.com:8000/path/name?foo=bar&bar=foo#hash"
url.origin; // "ftp://www.example.com:8000"
url.password; // "password"
url.pathname; // "/path/name"
url.port; // "8000"
url.protocol; // "ftp:"
url.search; // "?foo=bar&bar=foo"
url.username; // "user"
```

> See the [test file](test/test.mjs) for more examples.

## Ideas

- [ ] Add protocol as parameter, ex: `newURL("example.com", "ftp").href; // "ftp://example.com/"`
