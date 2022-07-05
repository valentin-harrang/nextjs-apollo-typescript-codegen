module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        "@babel/preset-typescript",
        [
          "next/babel",
          {
            "preset-env": {
              modules: "commonjs",
            },
          },
        ],
      ],
      plugins: [
        [
          "babel-plugin-root-import",
          {
            rootPathPrefix: "~",
            rootPathSuffix: "./",
          },
        ],
      ],
    };
  };
  