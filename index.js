'use strict';
const alfy = require('alfy');
const util = require('util');
const exec = require('child_process').exec;

const capture = '/usr/sbin/screencapture -i temp_capture.png';
const zbar = 'zbarimg --raw -q temp_capture.png';
const clean = 'rm temp_capture.png';

exec(capture, function (error, stdout, stderr) {
  if (!error && !stderr)
    exec(zbar + ' && ' + clean, function (error, stdout, stderr) {
      if (!error && !stderr) {
        alfy.output([{
          title: 'result',
          subtitle: stdout.replace('\n', ''),
          arg: stdout.replace('\n', '')
        }]);
      }
    })
});
