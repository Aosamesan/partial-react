import path from 'path'

export const webpackConfig = (name, mode) => ({
    entry: `./src/${name}/index.js`,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${name}.js`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    mode
})