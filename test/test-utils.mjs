function logError(description, result, expectation) {
  console.error("✖ ", description);
  console.log("expected: ", expectation);
  console.log("got: ", result);
}

export function test(description, assertion, expectation) {
  const result = assertion();
  result === expectation
    ? console.log("✔ ", description)
    : (() => {
        logError(description, result, expectation);
        console.trace();
      })();
}
