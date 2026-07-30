module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/charity_icons_svg");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/php");
    eleventyConfig.addPassthroughCopy("src/vendors");
    // eleventyConfig.addPassthroughCopy("src/robots.txt");
    // eleventyConfig.addPassthroughCopy("src/sitemap.xml");

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        }
    };

};