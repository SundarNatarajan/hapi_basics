const gulp = require('gulp')
var exec = require('child_process').exec;
gulp.task('hello', ()=>{
    console.log('Hello World')
    exec('node index.js')
})

gulp.task('envtask', ()=>{
    console.log(`Env values : ${JSON.stringify(process.env)}`)
})

gulp.task('debug_index', ()=>{
    // exec('node --debug index.js')
    console.log('Sundar')
    exec('node --debug index.js', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('index', ()=>{
    // exec('node --debug index.js')
    console.log('Sundar')
    exec('node index.js', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})