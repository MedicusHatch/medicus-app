module.exports = function(api) {
  api.cache(true);
  return {
    "presets": ["babel-preset-expo"],
    "plugins": [
      ["babel-plugin-module-resolver", {
        "root": ["./src"]
      }]
    ],
    "env": {
      "development": {
        "plugins": ["transform-react-jsx-source"]
      }
    }
  }
}

