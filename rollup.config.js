import path from 'path'
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

const resolveFile = source => path.resolve(__dirname, source)
export default {
    input: "src/index.jsx",
    output: [
        {
            file: resolveFile('lib/index.js'),
            format: 'es'
        }
    ],
    plugins: [
        postcss({
            extract: true
        }),
        babel({
            babelHelpers: 'runtime',
            "presets": [["taro", {
                framework: 'react'
            }]],
            "plugins": ["@babel/plugin-transform-runtime"]
        })]
};