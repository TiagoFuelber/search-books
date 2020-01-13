require('@babel/register')();

var { JSDOM } = require('jsdom');

const { document } = new JSDOM('').window;
global.document = document;
