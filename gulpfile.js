'use strict';//严格模式

//nodejs引用模块的方式
//commonjs规范(同步)
var gulp = require('gulp');


// 创建任务
// 编译sass
var sass = require('gulp-sass');
gulp.task('compileSass',()=>{
	// 匹配（查找）sass文件
	// 文档流：
	console.log(666);
	gulp.src('./src/sass/*.scss')

		// 编译
		.pipe(sass({
			outputStyle:'expanded'//compact,expanded,compressed
		}).on('error', sass.logError))

		// 输出
		.pipe(gulp.dest('./src/css/'))
});


// 监听文件修改并自动编译
// *：表示文件名
// **：表示目录
gulp.task('jtSass',()=>{
	gulp.watch('./src/**/*.scss',['compileSass']);
});


// // 压缩js
// // 合并
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
gulp.task('compressJs',()=>{
// 	// 查找js
	gulp.src('./src/js/*.js')
// 		// 合并文件
		.pipe(concat({ path: 'all.js',newLine: ';'}))

// 		// 输出合并文件
		.pipe(gulp.dest('./dist/js/'))

// 		// 压缩
		.pipe(uglify({mangle:false}))

// 		// 重命名
		.pipe(rename({
			suffix: ".min",//添加后缀名
		}))

		// 输出压缩后的文件
		.pipe(gulp.dest('./dist/js/'))
});


// // * 浏览器同步
// // * 自动刷新
// browser-sync
var browserSync = require('browser-sync');
gulp.task('myserver',()=>{
	// 开启服务器
	browserSync({
		// server:'./src/',
		// files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
		// 代理服务器
		proxy:'http://localhost:10086',

		// 端口
		port:10087,

		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
	});

// 	// 监听sass文件修改
	gulp.watch('./src/**/*.scss',['compileSass']);
});