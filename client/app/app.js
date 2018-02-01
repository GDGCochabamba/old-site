/**
 * Core imports
 */
require('./app.routes.js');

/**
 * Layout
 */
require('./layout/header.directive.js');

/**
 * Components
 */
require('./components/components.module.js');
require('./components/video.directive.js');
require('./components/card.directive.js');

(function(){
  angular
    .module('gdg', [
      'gdg.routes',
      'gdg.layout',
      'gdg.components'
    ]);
})();
