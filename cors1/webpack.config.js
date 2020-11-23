const path = require('path');

mpdule.exports = {
    entry: './src/scripts/index.js', // точка входа
    output: {
        filename: 'bundle.js', // название собранного файла со скриптами
        path: path.join(__dirname, 'built'), // папка для собранных файлов
    },
    watch: false // вкл. / выкл. отслеживания изменений
};