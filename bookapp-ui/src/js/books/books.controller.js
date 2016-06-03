'use strict';

import utils from '../app.utils';

export default class BookController {

    /*@ngInject;*/
    constructor($http, Book, Author) {
        this.$http = $http;
        this.Book = Book;
        this.Author = Author;

        // properties
        this.books = this.Book.query();
        this.authors = this.Author.query();

        this.currentBook = new this.Book();
        this.currentBook.releasedate = new Date();
        this.showId = false;
    }

    cancel() {
        this.currentBook = new this.Book();
        this.currentBook.releasedate = new Date();
    };

    save() {
        var isNew = this.currentBook.id == null;
        if (isNew) {
            this.$http.get(this.currentBook.author).then(response => {
                let savedBook = this.Book.save(this.currentBook);
                savedBook.$promise.then(() => {
                    savedBook.author = response.data;
                    this.books.push(savedBook);
                    this.cancel();
                });
            });
        } else {
            this.$http.get(this.currentBook.author).then(response => {
                let updatedBook = this.Book.update(this.currentBook);
                updatedBook.$promise.then(() => {
                    updatedBook.author = response.data;
                    utils.replaceById(this.books, updatedBook);
                    this.cancel();
                });
            });
        }
    };

    edit(book) {
        this.currentBook = angular.copy(book);
        this.currentBook.releasedate = new Date(book.releasedate);
        this.currentBook.author = utils.filterById(this.authors, book.author.id)._links.self.href;
    };

    remove(index, id) {
        this.books.splice(index, 1);
        this.Book.remove({bookId: id});
    };

    openDatePicker($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.opened = true;
    };

}