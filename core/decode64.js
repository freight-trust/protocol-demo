'use strict';

const Fs = require('fs');
const B64 = require('@hapi/b64');

const stream = Fs.createReadStream(`${__dirname}/encodedfile.b64`);
const decoder = new B64.Decoder();

stream.pipe(decoder).pipe(process.stdout);
