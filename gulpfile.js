'use strict';

const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat'),
  del = require('del'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify');

const paths = {
  template: {
    src: 'app/pages/index.pug',
    watch: 'app/**/*.pug',
    dest: 'public',
  },
  styles: {
    src: 'app/styles/main.scss',
    watch: 'app/**/*.scss',
    dest: 'public/styles'
  },
  scripts: {
    src: 'app/scripts/modules/**/*.js',
    vendor: 'app/scripts/vendor/**/*.js',
    watch: 'app/scripts/**/*.js',
    dest: 'public/scripts'
  },
  images: {
    src: 'app/images/**/*.{jpeg,jpg,png,svg,gif,ico,webp}',
    dest: 'public/images'
  },
  babelPolyfill: {
    src: 'node_modules/babel-polyfill/dist/polyfill.js'
  }
};

const template = () =>
  gulp.src(paths.template.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.template.dest))
    .pipe(browserSync.stream());

const styles = () =>
  gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .on("error", sass.logError)
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());

const scriptsVendor = () =>
  gulp.src([paths.scripts.vendor], { sourcemaps: true })
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));

const scripts = () =>
  gulp.src([paths.babelPolyfill.src, paths.scripts.src], { sourcemaps: true })
    .pipe(babel({
      "plugins": [
        "@babel/transform-object-assign",
        "@babel/proposal-object-rest-spread"
      ],
      "presets": [
        [
          "@babel/env",
          {
            "targets": {
              "browsers": ["last 2 versions"]
            }
          }
        ]
      ]
    }))
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));

const images = () =>
  gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));

const clean = () => del(paths.template.dest);

const serve = () => {
  browserSync.init({
    notify: false,
    port: 3000,
    server: {
      baseDir: './public'
    },
  });

  gulp.watch(paths.template.watch, template);
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.scripts.watch, scripts);
};

const watchTasks = gulp.parallel(serve);
const buildTasks = gulp.series(clean, template, styles, scriptsVendor, scripts, images);

gulp.task('default', watchTasks);
gulp.task('build', buildTasks);
