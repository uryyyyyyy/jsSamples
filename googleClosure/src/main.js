goog.provide('app.main');

goog.require('goog.dom');
goog.require('uryyyyyyy.Hello');

app.main.start = function() {
  var newDiv = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
    'Hello world!');
  goog.dom.appendChild(document.body, newDiv);
  var hello = new uryyyyyyy.Hello('Taro Yamada');
  hello.greet();
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('app.main.start', app.main.start);
