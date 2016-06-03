'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/books.png';

import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import config from './app.config';
import bookConfig from './books/books.config'
import authorConfig from './authors/authors.config';

import bookResource from './books/books.resource';
import authorResource from './authors/authors.resource';

const bookapp = angular.module('bookapp', [
        ngResource,
        uiRouter,
        uiBootstrap
    ]);

bookResource(bookapp);
authorResource(bookapp);

bookapp.config(config);
bookapp.config(bookConfig);
bookapp.config(authorConfig);