'use strict';

import template from './books.tpl.html';
import controller from './books.controller.js'

export default function route($stateProvider) {
    'ngInject';
    $stateProvider.state('books', {
            url: '/books',
            template: template,
            controller: controller,
            controllerAs: 'bookCtrl'
        });
}