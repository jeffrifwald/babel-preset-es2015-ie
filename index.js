module.exports = function (context, opts = {}) {
  const moduleTypes = ["commonjs", "amd", "umd", "systemjs"];
  let modules = "commonjs";

  if (opts !== undefined && opts.modules !== undefined) 
    modules = opts.modules;

  if (modules !== false && moduleTypes.indexOf(modules) === -1)
    throw new Error("Preset es2015-ie 'modules' option must be 'false' to indicate no modules\n" +
      "or a module type which can be one of: 'commonjs' (default), 'amd', 'umd', 'systemjs'");

  return {
    plugins: [
      require('babel-plugin-transform-es2015-template-literals'),
      require('babel-plugin-transform-es2015-literals'),
      require('babel-plugin-transform-es2015-function-name'),
      require('babel-plugin-transform-es2015-arrow-functions'),
      require('babel-plugin-transform-es2015-block-scoped-functions'),
      [require('babel-plugin-transform-es2015-classes'), {loose: true}],
      require('babel-plugin-transform-es2015-object-super'),
      require('babel-plugin-transform-object-assign'),
      require('babel-plugin-transform-es2015-shorthand-properties'),
      require('babel-plugin-transform-es2015-duplicate-keys'),
      require('babel-plugin-transform-es2015-computed-properties'),
      require('babel-plugin-transform-es2015-for-of'),
      require('babel-plugin-transform-es2015-sticky-regex'),
      require('babel-plugin-transform-es2015-unicode-regex'),
      require('babel-plugin-check-es2015-constants'),
      require('babel-plugin-transform-es2015-spread'),
      require('babel-plugin-transform-es2015-parameters'),
      require('babel-plugin-transform-es2015-destructuring'),
      require('babel-plugin-transform-es2015-block-scoping'),
      require('babel-plugin-transform-es2015-typeof-symbol'),
      modules === "commonjs" && require('babel-plugin-transform-es2015-modules-commonjs'),
      modules === "systemjs" && require('babel-plugin-transform-es2015-modules-systemjs'),
      modules === "amd" && require('babel-plugin-transform-es2015-modules-amd'),
      modules === "umd" && require('babel-plugin-transform-es2015-modules-umd'),
      require('babel-plugin-transform-proto-to-assign'),
      [require('babel-plugin-transform-regenerator'), {async: false, asyncGenerators: false}],
    ].filter(Boolean)
  };
}
