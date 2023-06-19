const terser = require('@rollup/plugin-terser')
const typescript = require('@rollup/plugin-typescript')
module.exports = {
  input: 'src/scripts/index.ts',
  output: {
    dir: '_build',
    format: 'iife',
  },
  plugins: [typescript(), terser()],
}
