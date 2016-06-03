'use strict';

import template from './authors.tpl.html';
import controller from './authors.controller'

export default function config($stateProvider) {
    'ngInject';
    $stateProvider.state('authors', {
        url: '/authors',
        template: template,
        controller: controller,
        controllerAs: 'authorCtrl'
    });
}