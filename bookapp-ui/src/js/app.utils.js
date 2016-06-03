'use strict';

var utils = {
    filterById(array, id) {
        return array.filter(object => {
            return object.id == id;
        })[0];
    },

    replaceById(array, replacement) {
        array[array.indexOf(this.filterById(array,replacement.id))]=replacement;
    }
};

export default utils;