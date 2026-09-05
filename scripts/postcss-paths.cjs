module.exports = (options = {}) => ({
  postcssPlugin: 'portfolio-asset-paths',
  Declaration(decl) {
    if (!options.basePath || !decl.value.includes('url(')) return;
    decl.value = decl.value.replace(/url\((['"]?)\/(?!\/)([^)'"\s]+)\1\)/g, (match, quote, asset) =>
      asset.startsWith(options.basePath.slice(1) + '/') ? match : 'url(' + quote + options.basePath + '/' + asset + quote + ')');
  },
});
module.exports.postcss = true;
