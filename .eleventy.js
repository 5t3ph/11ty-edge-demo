const { EleventyEdgePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyEdgePlugin);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
