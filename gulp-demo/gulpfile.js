const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');

const htmlMin = require('gulp-htmlmin')
const livereload = require('gulp-livereload');

const connect = require('gulp-connect');
const open = require('open');

const selfPlugin = require('./plugin/selfPlugin');
const cp = require('child_process');
const openBrowser = function(url,browserName){
    cp.exec('start ' + browserName + ' ' + url, function(err, stdout, stderr) {});
}


// 注册压缩js的任务
gulp.task('js', function() {
    return gulp.src('src/js/**/*.js') // 获取所有js文件
        .pipe(concat('build.js')) // 合并文件
        .pipe(selfPlugin())
        .pipe(gulp.dest('dist/js/')) // 输出文件
        .pipe(uglify()) // 压缩js文件
        .pipe(rename({suffix: '.min'})) // 重命名文件
        .pipe(gulp.dest('dist/js/')) // 输出文件
        .pipe(livereload())
        .pipe(connect.reload())
}); 

// 注册压缩less的任务
gulp.task('less', function() {
    return gulp.src('src/less/*.less') // 获取所有less文件
        .pipe(less()) // 文件转换为css
        .pipe(gulp.dest('src/css/')) // 输出文件
        .pipe(livereload())
        .pipe(connect.reload())
}); 

gulp.task('css', function() {
    return gulp.src('src/css/*.css') // 获取所有css文件
        .pipe(concat('build.css')) // 压缩css文件
        .pipe(rename({suffix: '.min'})) // 重命名文件
        .pipe(cleanCss({compatibility: 'ie8'}))// 输出文件
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload())
        .pipe(connect.reload())
})

// 注册压缩html文件
gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(htmlMin({callapseWhile: true}))
        .pipe(gulp.dest('dist/'))
        .pipe(livereload())
        .pipe(connect.reload())
})

gulp.task('watchTask', function() {
    livereload.listen()
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/less/*.less', gulp.series('less'));
    gulp.watch('src/css/*.css', gulp.series('css'));
    gulp.watch('index.html', gulp.series('html'));
})

// 注册监听任务（全自动）
gulp.task('server', function() {
    connect.server({
        root: 'dist/',
        livereload: true,// 实时刷新
        port: 3000
    });

    // open('http://localhost:3000/');
    openBrowser('http://localhost:3000/', 'chrome')

    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/less/*.less', gulp.series('less'));
    gulp.watch('src/css/*.css', gulp.series('css'));
})

exports.default = gulp.series('js', 'less', 'css', 'html');