import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      extensions: [ '.js', '.coffee' ],
      ignoreGlobal: true,
      sourceMap: false
    })
  ],
}; 