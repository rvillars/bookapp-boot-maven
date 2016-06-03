'use strict';

export default function config($urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/books');
}