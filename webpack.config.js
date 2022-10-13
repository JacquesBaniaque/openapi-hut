import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const outputPath = path.resolve(path.resolve(), 'dist');

const config = {
    entry: './src/index',
    output: {
        filename: '[name].bundle.js',
        path: outputPath,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    module: {
        rules: [
            {
            test: /\.yaml$/,
                use: [
                    { loader: 'yaml-loader' }
                ]
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
};

export default () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
}
