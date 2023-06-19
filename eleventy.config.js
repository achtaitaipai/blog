const yaml = require('js-yaml')

/** @param {import("@11ty/eleventy").UserConfig} config */
module.exports = config => {
  config.addPassthroughCopy({ '_build/*': '/' })

  config.addWatchTarget('src/_build')

  config.addDataExtension('yaml', contents => {
    return yaml.load(contents)
  })
  config.setDataFileBaseName('data')

  return {
    markdownTemplateEngine: 'njk',

    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src/content',
      includes: '../includes',
      data: '../data',
      layouts: '../layouts',
      output: 'dist',
    },
  }
}
