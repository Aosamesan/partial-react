import '@babel/polyfill'
import gulp from 'gulp'
import uglify from 'gulp-uglify'
import webpackStream from 'webpack-stream'
import {
    webpackConfig
} from './webpack.config'
import yargs from 'yargs'

const args = yargs.argv


gulp.task('validate-parameter', async function () {
    const {
        name
    } = args
    if (typeof name !== 'string') {
        throw Error(`Invalid Parameter : ${name}`)
    }
})

gulp.task('loader', function () {
    return gulp.src('./src/loader.js').pipe(gulp.dest('dist'))
})
gulp.task('requirejs', function () {
    return gulp.src('./node_modules/requirejs/require.js').pipe(gulp.dest('dist'))
})
gulp.task('bootstrap', function () {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('dist'))
})
gulp.task('static-resources', gulp.parallel('loader', 'requirejs', 'bootstrap'))

const build = function (mode) {
    return function () {
        return gulp.src(`./src/${args.name}/index.js`)
            .pipe(webpackStream(webpackConfig(args.name, mode)))
            .pipe(uglify())
            .pipe(gulp.dest('./dist'))
    }
}

gulp.task('build-dev', gulp.series('validate-parameter', 'static-resources', build('development')))
gulp.task('build', gulp.series('validate-parameter', 'static-resources', build('production')))