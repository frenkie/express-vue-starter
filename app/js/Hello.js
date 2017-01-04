import Vue from 'vue';

var Hello = Vue.extend({

    template: '<h1>Hello {{ name }}!</h1>',

    beforeMount: function () {
        if ( typeof this.name === 'undefined' || this.name === '' ) {
            this.name = 'World';
        }
    }
});

export default Hello;