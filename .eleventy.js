module.exports = function (eleventyConfig) {
  // Copia le cartelle statiche così come sono, senza elaborarle
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
