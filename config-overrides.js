const StylexPlugin = require("@stylexjs/webpack-plugin");

module.exports = function override(config, env) {
  //   const isProd = config.mode === "production";

  const plugin = new StylexPlugin({
    // we are inlining styles in the have of the page, so it doesn't make sense to have a hash in the file name
    filename: "./static/css/stylex.css",
    dev: true,
    runtimeInjection: true,
    classNamePrefix: "x",
    useCSSLayers: false,
    unstable_moduleResolution: {
      type: "commonJS",
      rootDir: __dirname,
    },
  });

  config.plugins.push(plugin);

  return config;
};
