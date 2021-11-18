<template>

    <div class="container-xxl">


        <div class="g-5 gx-xxl-8">

            <div class="card-header">
                <!--<h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder text-dark">My Calendar</span>
                    <span class="text-muted mt-1 fw-bold fs-7">Preview monthly events</span>
                </h3>
                <div class="card-toolbar">
                    <a href="../../demo1/dist/apps/calendar.html" class="btn btn-primary">Manage
                        Calendar</a>
                </div>-->

                <v-data-table
                    :page="page"
                    :pageCount="numberOfPages"
                    :headers="headers"
                    :items="passengers"
                    :options.sync="options"
                    :server-items-length="totalPassengers"
                    :loading="loading"
                    class="elevation-1"
                    :footer-props="{'items-per-page-options': [options.itemsPerPage]}"
                    @click:row="pushOtherPage"

                >
                    <template v-slot:item.monto="{ item }">
                        <td>{{ formatCurrency(item.monto)}}</td>
                    </template>


                </v-data-table>
            </div>

        </div>
        <!--end::Row-->
    </div>
</template>

<script>
import {host} from '../utils'

export default {
    name: "List",
    data() {
        return {
            // Our data object that holds the Laravel paginator data
            apiData: {},
            page: 0,
            totalPassengers: 0,
            numberOfPages: 0,
            passengers: [],
            loading: true,
            options: {
                itemsPerPage: 10,
                page: 1
            },
            headers: [
                {text: "Id", value: "id",sortable: false},
                {text: "Articulos", value: "articulos",sortable: false},
                {text: "Cliente", value: "cliente",sortable: false},
                {text: "Dirección", value: "direccion",sortable: false},
                {text: "Teléfono 1", value: "telefono1",sortable: false},
                {text: "Fecha de entrega", value: "fecha_entrega",sortable: false},
                {text: "Monto", value: "monto",sortable: false},
            ],
        }
    },
    watch: {
        options: {
            handler() {
                this.readDataFromAPI();
            },
        },
        deep: true,
    },
    mounted() {
        // Fetch initial results
        this.readDataFromAPI();
    },

    methods: {

        formatCurrency (value) {
            return '$' + value.toFixed(2)
        },
        readDataFromAPI() {
            this.loading = true;
            const {page, itemsPerPage} = this.options;
            let pageNumber = page - 1;

            var url = `${host}/entregas?limit=`+itemsPerPage+`&page=`+page+`&token=`+localStorage.getItem('token')

            console.log("url",url)

            axios.get(url).then((response) => {

                this.passengers = response.data.objeto;
                this.totalPassengers = response.data.paginacion.registros;
                this.numberOfPages = response.data.paginacion.paginas;

            }).catch(error => {
                if(error.response.status == 403){
                    localStorage.removeItem('token')
                    window.location.href='/';
                }

                console.log('error ',error.response.status);
            });

        },
        pushOtherPage(item) {
            window.location.href='/details/'+item.id
        },
    }
}
</script>

<style scoped>

</style>
