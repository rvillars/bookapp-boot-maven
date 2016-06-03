'use strict';

import utils from '../app.utils';

export default class AuthorController {

    /*@ngInject;*/
    constructor($http, Author) {
        this.$http = $http;
        this.Author = Author;

        // properties
        this.authors = this.Author.query();
        this.currentAuthor = new this.Author();
        this.showId = false;
    }

    cancel() {
        this.currentAuthor = new this.Author();
    };

    save() {
        var isNew = this.currentAuthor.id == null;
        if (isNew) {
            let savedAuthor = this.Author.save(this.currentAuthor);
            savedAuthor.$promise.then(() => {
                this.authors.push(savedAuthor);
                this.cancel();
            });
        } else {
            let updatedAuthor = this.Author.update(this.currentAuthor);
            updatedAuthor.$promise.then(() => {
                utils.replaceById(this.authors, updatedAuthor);
                this.cancel();
            });
        }
    };

    edit(author) {
        this.currentAuthor = angular.copy(author);
    };

    remove(index, id) {
        this.authors.splice(index, 1);
        this.Author.remove({authorId: id});
    };
}