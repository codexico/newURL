import { test } from "./test-utils.mjs";
import { newURL } from "../index.mjs";

const tests = [
  ["simple", "example", "https://example/"],
  ["hostname", "example.com", "https://example.com/"],
  ["www hostname", "www.example.com", "https://www.example.com/"],
  ["intrinsic protocol", "//example.com", "https://example.com/"],
  ["pathname", "//example.com/path/name", "https://example.com/path/name"],
  [
    "protocol and pathname",
    "example.com/path/name",
    "https://example.com/path/name",
  ],
  ["hash", "example.com#hash", "https://example.com/#hash"],
  [
    "search",
    "example.com?foo=bar&bar=foo#hash",
    "https://example.com/?foo=bar&bar=foo#hash",
  ],
  [
    "search and hash",
    "example.com?foo=bar&bar=foo#hash",
    "https://example.com/?foo=bar&bar=foo#hash",
  ],
  ["http", "http://www.example.com", "http://www.example.com/"],
  ["https", "https://www.example.com", "https://www.example.com/"],
  ["ftp", "ftp://www.example.com", "ftp://www.example.com/"],
  [
    "full ftp",
    "ftp://user:password@www.example.com:8000/path/name?foo=bar&bar=foo#hash",
    "ftp://user:password@www.example.com:8000/path/name?foo=bar&bar=foo#hash",
  ],
  [
    "username and password",
    "user:password@www.example.com",
    "https://user:password@www.example.com/",
  ],
  [
    "full",
    "http://user:password@www.example.com/path/name?foo=bar&bar=foo#hash",
    "http://user:password@www.example.com/path/name?foo=bar&bar=foo#hash",
  ],
  ["port", "example.com:8000", "https://example.com:8000/"],
  [
    "all",
    "user:password@www.example.com:8000/path/name?foo=bar&bar=foo#hash",
    "https://user:password@www.example.com:8000/path/name?foo=bar&bar=foo#hash",
  ],
];

tests.forEach(function name(item) {
  test(item[0], () => newURL(item[1]).href, item[2]);
});
