const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // работа с HTML
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // очищать содержимое папки dist при сборке проекта
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // работа с CSS

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: {
        about: [path.resolve(__dirname, "src", "index.js")],
        grapes: [path.resolve(__dirname, "src", "grapes.js")],
        products: [path.resolve(__dirname, "src", "products.js")],
        berries: [path.resolve(__dirname, "src", "berries.js")],
        recipies: [path.resolve(__dirname, "src", "recipies.js")],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        path: path.resolve(__dirname, "dist")
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        rules: [ // rules — это массив правил
            // добавим в него объект правил для бабеля
            {
                // регулярное выражение, которое ищет все js файлы
                test: /\.js$/,
                // при обработке этих файлов нужно использовать babel-loader
                use: 'babel-loader',
                // исключает папку node_modules, файлы в ней обрабатывать не нужно
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                // применять это правило только к CSS-файлам
                test: /\.css$/,
                // при обработке этих файлов нужно использовать
                // MiniCssExtractPlugin.loader и css-loader
                use: [
                    MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    // добавьте объект options
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
                ]
            },
        ]
    },
    plugins: [



        new HtmlWebpackPlugin({
            title: 'About',
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['about'],
        }),
        new HtmlWebpackPlugin({
            title: 'Products',
            filename: 'products.html',
            template: './src/products.html',
            chunks: ['products'],
        }),
        new HtmlWebpackPlugin({
            title: 'Grape',
            filename: 'grape.html',
            template: './src/grape.html',
            chunks: ['grapes'],
        }),
        new HtmlWebpackPlugin({
            title: 'Berries',
            filename: 'berries.html',
            template: './src/berries.html',
            chunks: ['berries'],
        }),
        new HtmlWebpackPlugin({
            title: 'Recipies',
            filename: 'recipies.html',
            template: './src/recipies.html',
            chunks: ['recipies'],
        }),

        new FaviconsWebpackPlugin('./src/images/favicon.svg'),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
}