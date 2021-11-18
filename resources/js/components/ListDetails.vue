<template>
    <div class="content d-flex flex-column flex-column-fluid py-3">
        <div class="container-xxl">


            <div class="row ">

                <div class="card col-lg-5 col-md-12 ">
                    <div class="card-header mt-3">
                        <h3 class="mb-3">Generales</h3>

                    </div>

                    <div class="row pl-3">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Cliente</label>
                                <p class="text-muted">{{details.cliente}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Dirrección </label>
                                <p class="text-muted">{{details.direccion}}</p>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Telefono 1</label>
                                <p class="text-muted">{{details.telefono1}}</p>

                            </div>
                        </div>
                    </div>

                    <div class="row pl-3">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Fecha de Entrega</label>
                                <p class="text-muted">{{details.fecha_entrega}}</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Monto</label>
                                <p class="text-muted">{{formatCurrency(details.monto)}}</p>
                            </div>
                        </div>


                    </div>


                </div>
            </div>

            <div class="row py-2">

                <div class="col-md-6 ">
                    <div class="card">
                        <div class="card-header mt-3">
                            <h3 class="mt-3">Adjunto</h3>

                        </div>
                        <div class="card-body d-flex align-items-center">

                            <div class="col-md-12">
                                <span class="text-muted m-5" v-show="attachFile==''">Nothing to show.</span>
                                <img :src="attachFile" alt="attach" v-show="attachFile!=''" height="250" width="250" class="img-thumbnail">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div class="card">
                        <div class="card-header mt-3">
                            <h3 class="mt-3">Firma</h3>

                        </div>

                        <div class="card-body d-flex align-items-center">

                            <div class="col-md-12 ">
                                <span class="text-muted m-5" v-show="signatureFile==''">Nothing to show.</span>
                                <img :src="signatureFile" alt="attach" v-show="signatureFile!=''" height="340" width="340" class="img-thumbnail">
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<script>
import {host} from "../utils";

export default {
    name: "ListDetails",
    props: [
        'id_entrega'
    ],
    data() {
        return {
            signatureFile: '',
            attachFile: '',
            details: []
        }
    },
    mounted() {
        // console.log('ok aqui')

    },
    created() {
        this.getDetails()

    },
    methods: {
        formatCurrency(value) {
            return '$' + Number(value).toFixed(2)
        },
        getDetails() {
            console.log(this.id_entrega)
            var url = `${host}/entregas/` + this.id_entrega + `?token=` + localStorage.getItem('token')
            axios.get(url).then((response) => {

                this.details = response.data.objeto[0]
                if(this.details.attach!=""){
                    this.getAttachFile(this.details.attach)
                }
                if(this.details.signature!=""){
                    this.getSignatureFile(this.details.signature)
                }


            }).catch(error => {

                if (error.response.status == 403) {
                    localStorage.removeItem('token')
                    window.location.href = '/';
                }

                console.log('error ', error.response.status);
            });

        },
        getAttachFile(filename) {
            //console.log(filename)
            //this.attachFile = 'http://104.37.186.27:5000/api/getdata/file/1/filename2.png'
            var url = `${host}/getdata/file/` + this.id_entrega + `/`+filename+`?token=` + localStorage.getItem('token')
            console.log(url)
            axios.get(url).then((response) => {

                if(response.status == 200){
                    this.attachFile = `${host}/getdata/file/` + this.id_entrega + `/`+filename+`?token=` + localStorage.getItem('token')
                }


            }).catch(error => {

                if (error.response.status == 403) {
                    localStorage.removeItem('token')
                    window.location.href = '/';
                }

                console.log('error ', error.response.status);
            });
        },
        getSignatureFile(filename){
            var url = `${host}/getdata/file/` + this.id_entrega + `/`+filename+`?token=` + localStorage.getItem('token')
            console.log(url)
            axios.get(url).then((response) => {

                if(response.status == 200){
                    this.signatureFile = `${host}/getdata/file/` + this.id_entrega + `/`+filename+`?token=` + localStorage.getItem('token')
                }


            }).catch(error => {

                if (error.response.status == 403) {
                    localStorage.removeItem('token')
                    window.location.href = '/';
                }

                console.log('error ', error.response.status);
            });
        }

    }
}
</script>


