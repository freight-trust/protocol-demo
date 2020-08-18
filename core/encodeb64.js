'use strict';

const Fs = require('fs');
const B64 = require('@hapi/b64');

const stream = Fs.createReadStream(`${__dirname}/package.json`);
const encoder = new B64.Encoder();

stream.pipe(encoder).pipe(process.stdout);
