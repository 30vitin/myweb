/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
/*
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}*/


/*$.ajax({
    url:url+'&token='+localStorage.getItem('token'),
    type:'get',
    contentType: "application/json; charset=UTF-8",
    success:function(response){
        console.log(response)
        this.passengers = response.objeto;
        this.totalPassengers = response.paginacion.registros;
        this.numberOfPages = response.paginacion.paginas;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest.responseText)
    }
});*/



/*console.log("https://api.instantwebtools.net/v1/passenger?size=" +
    itemsPerPage +
    "&page=" +
    pageNumber)*/
/*axios.get(
        "https://api.instantwebtools.net/v1/passenger?size=" +
        itemsPerPage +
        "&page=" +
        pageNumber
    ).then((response) => {
        //Then injecting the result to datatable parameters.
        this.loading = false;
        this.passengers = response.data.data;
        this.totalPassengers = response.data.totalPassengers;
        this.numberOfPages = response.data.totalPages;
    });*/
require('./bootstrap');

require('./custom')


window.Vue = require('vue').default;

import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VModal from "vue-js-modal";
Vue.use(vuetify)

Vue.use(VModal)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('list',require('./components/List.vue').default);
Vue.component('list-details',require('./components/ListDetails').default);
Vue.component('header-nav',require('./components/HeaderNav').default);
Vue.component('vue-signature-pat',require('./components/VueSignaturePat').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify: new vuetify({
        icons: {
            iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
        },
    }),

});

