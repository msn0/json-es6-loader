function sanitize(value) {
    if (['private', 'class'].includes(value)) {
        value = '_' + value;
    }

    return value
        .replace(/@/g, '_')
        .replace(/\//g, '_')
        .replace(/\./g, '_')
        .replace(/-/g, '_')
        .replace(/,/g, '_')
        .replace(/^[0-9]/, '_');
}

module.exports = function (source) {
  if (this.cacheable) this.cacheable();

  const value = JSON.parse(source);

  return Object.keys(value).reduce((acc, next) => {
      const type = typeof value[next];
      const name = sanitize(next);

      if (type === 'object') {
          acc.push(`export const ${name} = ${JSON.stringify(value[next])}`);
      } else if (['number', 'boolean', 'undefined'].includes(type)) {
          acc.push(`export const ${name} = ${value[next]}`);
      } else if (type === 'string') {
          acc.push(`export const ${name} = ${JSON.stringify(value[next])}`);
      }

      return acc;
  }, []).join(';');
}
