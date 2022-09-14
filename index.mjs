export function newURL(string) {
  let url;
  try {
    url = new URL(string);

    if (!url.hostname) {
      // cases where the hostname was not identified
      // ex: user:password@www.example.com, example.com:8000
      url = new URL("https://" + string);
    }
  } catch (error) {
    url = new URL("https://" + string);
  }

  return url;
}
