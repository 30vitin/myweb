<template>

    <div class="row d-flex justify-content-center">
        <div class="d-flex justify-content-center">


            <vueSignature ref="signature"
                          :sigOption="option"
                          :w="'370px'"
                          :h="'280px'"
                          :defaultUrl="dataUrl"></vueSignature>

        </div>
        <div class=" pt-3">
            <div class="d-flex justify-content-center ">
                <button type="button" class="btn btn-primary " @click="save">Guardar</button>
                <button type="button" class="btn btn-secondary ml-2" @click="clear">Limpiar</button>

            </div>

        </div>

    </div>
</template>

<script>
import vueSignature from "vue-signature"
import {host} from "../utils";
export default {
    name: "app",
    props: [
        'id_entrega'
    ],
    components:{
        vueSignature
    },
    data() {
        return {
            option:{
                penColor:"rgb(0, 0, 0)",
                backgroundColor:"rgb(255,255,255)"
            },
            disabled:false,
            dataUrl: ""
        };
    },
    methods:{
        save(){
            if(!this.$refs.signature.isEmpty()){

                var _this = this;
                var png = _this.$refs.signature.save()
                var img_data = png.replace(/^data:image\/[a-z]+;base64,/, "")

                var data = {
                    "image":img_data,
                };

                var url = `${host}/files/signature/`+this.id_entrega+`/signature1.png?token=`+localStorage.getItem('token')

                console.log(url)
                axios.post(url, data).then((response) => {

                    console.log(response)
                    if(response.data.upload){

                        alert('Signature saved.')
                        location.reload()
                    }

                }).catch(error => {

                    //console.log(error)
                    console.log("error code : ",error.response.status);
                });
            }else{

                alert('No signature.')
            }


        },
        clear(){
            var _this = this;
            _this.$refs.signature.clear();
        },
        undo(){
            var _this = this;
            _this.$refs.signature.undo();
        },
        addWaterMark(){
            var _this = this;
            _this.$refs.signature.addWaterMark({
                text:"mark text",          // watermark text, > default ''
                font:"20px Arial",         // mark font, > default '20px sans-serif'
                style:'all',               // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill
                fillStyle:"red",           // fillcolor, > default '#333'
                strokeStyle:"blue",	   // strokecolor, > default '#333'
                x:100,                     // fill positionX, > default 20
                y:200,                     // fill positionY, > default 20
                sx:100,                    // stroke positionX, > default 40
                sy:200                     // stroke positionY, > default 40
            });
        },

        fromDataURL(url){
            var _this = this;
           // _this.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...");
        },
        handleDisabled(){
            var _this = this;
            _this.disabled  = !_this.disabled
        }
    }
};
</script>
