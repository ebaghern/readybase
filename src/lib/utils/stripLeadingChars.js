export default (str = '', chars = '') => {
  try {
    const re = new RegExp(`[^${chars}]`);
    const trimmed = str.trim();
    const strStart = trimmed.search(re);
    return trimmed.indexOf(chars) !== 0 || strStart <= 0
      ? { leading: '', string: trimmed }
      : {
          leading: trimmed.substr(0, trimmed.lastIndexOf(trimmed.substr(strStart))),
          string: trimmed.substr(strStart),
        };
  } catch {
    throw new Error('Invalid parameters passed to stripLeadingChars');
  }
};
