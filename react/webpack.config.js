const path = require('path');

mpdule.exports = {
    module: {
        rules: [
            {
                test: /.js$/,
                use: ['babel-loader']
            },
            {
                test: /.css$/,
                use: ["syle-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpaclPlugin({
            template: "./src/index.html"
        })
    ]
};