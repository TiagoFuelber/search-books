require('@babel/register')();

const { JSDOM } = require('jsdom');

const { document } = new JSDOM('').window;
global.document = document;
