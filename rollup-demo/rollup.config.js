
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: './index.js',
    output: {
        /* dange 文件 */
        // file: './dist/bundle.js',
        // format: 'iife',
        dir: './dist',
        format: 'amd',
    },
    plugins:[
        json(),
        resolve(),
        commonjs()
    ]
}