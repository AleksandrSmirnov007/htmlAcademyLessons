

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


const htmlmin = require("gulp-htmlmin");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
//  при подключении squoosh возникает ошибка (версия node 20.11.0)


const webp = require('gulp-webp'); // поставилась gulp-webp 5.0.0 с этой версией не работает, поставил 4.0.1 заработало(Иcправил версию в package.json и в консоли написал npm i, пакет откатился до версии указанной посмотреть пакеты и их версии можно командой npm list --depth=0  )
const svgstore = require('gulp-svgstore'); // поставилась gulp-webp версия 7.*.*  с этой версией не работает, поставил 6.0.0 заработало(Иcправил версию в package.json и в консоли написал npm i, пакет откатился до версии указанной посмотреть пакеты и их версии можно командой npm list --depth=0  )
const del = require('del');


const sync = require('browser-sync').create();
// Styles

const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(sync.stream());
}

exports.styles = styles;

// html

const html = () => {
    return gulp.src('source/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('build'));
}

exports.html = html;

//scripts

const scripts = () => {
  return gulp.src("source/js/script.js")
    .pipe(terser())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"));
}

exports.scripts = scripts;

// images (squoosh  закоментрован и при функция optimazeImages() не сработает Закоментирую строчку .pipe(squoosh()) изображения на прямую копируются в папку build/image)
const optimizeImages = () => {
  return gulp.src("source/image/**/*.{jpg,png,svg}")
  // .pipe(squoosh())
  .pipe(gulp.dest("build/image"));
}

exports.optimizeImages = optimizeImages;

const copyImages = () => {
  return gulp.src("source/image/**/*.{jpg,png,svg}")
  .pipe(gulp.dest("build/image"));
}

exports.copyImages = copyImages;

// Webp

const createWebp = () => {
  return gulp.src("source/image/**/*.{jpg,png}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("build/image"));
}

exports.createWebp = createWebp;

// Sprite

const sprite = () => {
  return gulp.src("source/image/icon/*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/image"));
}

exports.sprite = sprite;

// Copy other files

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
    "source/image/**/*.svg",
    "!source/image/icon/*.svg"
  ], {
    base: "source"})
    .pipe(gulp.dest("build"));
  done();
}

exports.copy = copy;

// clean

const clean = () => {
  return del("build");
}

exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;
// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/js/script.js', gulp.series(scripts));
  gulp.watch('source/*.html').on('change', sync.reload);
}


// Build можно обратить внимание: паралельные задачи стоят последовательным блоком в конце последавательных задач

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  )
);

exports.build = build;

exports.default = gulp.series(
  clean,
  copy,
  copyImages,

  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
  // далее можно не включать задачи в gulp.series() так как и так они находятся внутри поледовательных зачач идущих после пралельных
  gulp.series(
    server,
    watcher
  )
);

