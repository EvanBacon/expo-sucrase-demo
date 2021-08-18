const esbuild = require("esbuild");

function minify({ code, map, reserved, config }) {
  //    const options = {
  //      ...config,
  //      mangle: {
  //        ...config.mangle,
  //        reserved,
  //      },
  //      sourceMap: {
  //        ...config.sourceMap,
  //        content: map,
  //      },
  //    };

  console.time("esbuild");
  const minified = esbuild.transformSync(code, {
    minify: true,
    sourcemap: false,
    legalComments: "none",
  });

  console.timeEnd("esbuild");
  return minified;
}

module.exports = minify;
