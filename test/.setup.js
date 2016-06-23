const jsdom = require('jsdom').jsdom;
const hook = require('css-modules-require-hook')
const exposedProperties = ['window', 'navigator', 'document'];

hook({
  extensions: [ '.css' ],
  generateScopedName: '[local]___[hash:base64:5]',
})

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

const documentRef = document;
