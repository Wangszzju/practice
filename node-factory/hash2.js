#!/usr/bin/env node --debug-brk

'use strict'

let md5 = require('md5');
let fs = require('fs');

function hashAlgorithm(alg){
  let hash;
<<<<<<< HEAD
  let file = '/Users/dachui/Documents/programming/cl-toolkit/build/yellow-pic-editor.js';
=======
  let file = '/Users/wangshuzhe/Documents/programming/cl-toolkit/build/yellow-pic-editor.js';
>>>>>>> 1077a27ab06c17d900ee7bf641e3f92979ca9b33
  let content = fs.createReadStream(file);
  let data = '';

  content.on('data',function(chunk){
    data = data + chunk;
  });

  content.on('end',function(){
    hash = md5(data);
    console.log(alg+' : '+ hash);
  });
};
hashAlgorithm('md5');