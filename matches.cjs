const matches = (val, expectation) => {
  return val === expectation
    ? "✅"
    : "❌";
}
module.exports = {
  matches
}