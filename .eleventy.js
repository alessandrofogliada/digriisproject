module.exports = function (eleventyConfig) {
  // Copia le cartelle statiche così come sono
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes", // Specifica la cartella dei layout
      data: "_data"          // Specifica la cartella dei dati
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk", // Usa Nunjucks per processare l'HTML
    markdownTemplateEngine: "njk"
  };
};