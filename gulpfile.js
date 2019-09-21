var gulp       = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: "./src/" // Директория для сервера - app
        },
        port: 3000,
        notify: false // Отключаем уведомления
    });
});



gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('./src/sass/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(concat("main.css"))
        .pipe(gulp.dest('./src/css/')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});



gulp.task('code-html', function() {
    return gulp.src('./src/*.html')
    .pipe(browserSync.reload({ stream: true }));
});





// gulp.task('css', function () {
//     return gulp.src('src/css/*.css')
//         .pipe(browserify())
//         .pipe(uglify());
//         // .pipe(gulp.dest('dist/js'));
// });

// // create a task that ensures the `js` task is complete before
// // reloading browsers
// gulp.task('css-watch', ['css'], function (done) {
//     browserSync.reload();
//     done();
// });

// // use default task to launch Browsersync and watch JS files
// gulp.task('default', ['css'], function () {

//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });

//     // add browserSync.reload to the tasks array to make
//     // all browsers reload after tasks are complete.
//     gulp.watch("src/css/*.css", ['css-watch']);
// });















gulp.task('code-css', function(non) {
    return gulp.src('./src/*/*.css');
    browserSync.reload();
    non();
});

gulp.task('css-libs', function() {
    return gulp.src('./src/sass/style.sass') // Выбираем файл для минификации
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('./src/css')) // Выгружаем в папку app/css
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('clean', async function() {
    return del.sync('./dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('./src/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({ // С кешированием
        // .pipe(imagemin({ // Сжимаем изображения без кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))/**/)
        .pipe(gulp.dest('./dist/img')); // Выгружаем на продакшен
});

gulp.task('prebuild', async function() {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        './src/css/*.css',
        // './src/css/style.min.css',
        // './src/bootstrap-grid.min.css'
        ])
    .pipe(gulp.dest('./dist/css'))

    var buildFonts = gulp.src('./src/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('./dist/fonts'))

    var buildJs = gulp.src('./src/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('./dist/js'))

    var buildHtml = gulp.src('./src/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('./dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('src/*.html', gulp.parallel('code-html')); // Наблюдение за HTML файлами в корне проекта
    // gulp.watch('src/*/*.css', gulp.parallel('code-css')); // Наблюдение за css файлами в корне проекта
    gulp.watch("src/css/*.css").on('change', browserSync.reload);
    // gulp.watch(['src/js/common.js', 'src/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});


// var purify = require('gulp-purifycss');

// gulp.task('css', function() {
//   return gulp.src('./src/css/style.css')
//     .pipe(purify(['./src/js/*.js', './src/*.html']))
//     .pipe(gulp.dest('./dist/'));
// });



gulp.task('default', gulp.parallel('css-libs', 'sass', 'browser-sync', 'watch', 'code-css', 'code-html'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass'));




