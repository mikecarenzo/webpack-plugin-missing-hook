const path = require('path');
const WebpackPlugin = require("./WebpackPlugin")

module.exports = {
    mode: "production",
    entry: './src/Person.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Person.js',
        library: 'Person',
    },
    resolve: {
        //root: path.resolve('./src'),
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new WebpackPlugin()
    ]
};