module.exports = (breakpoints) =>
  Object.entries(breakpoints).reduce(
    (str, pair) => `${str} ${pair[0]}: ${pair[1]},`,
    ''
  );
