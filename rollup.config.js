import commonjs from "rollup-plugin-commonjs"; // Convert CommonJS modules to ES6
import buble from "rollup-plugin-buble"; // Transpile/polyfill with reasonable browser support
export default {
  input: "index.js", // Path relative to package.json
  output: {
    name: "tryDynamicImport"
  },
  plugins: [
    commonjs(),
    buble({
      target: { edge: 14 }
    })
  ]
};
