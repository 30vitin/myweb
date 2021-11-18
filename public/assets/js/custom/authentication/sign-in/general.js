
import * as util from '../../utils';

"use strict";


var KTSigninGeneral = function () {
    var t, e, i;
    return {
        init: function () {
            t = document.querySelector("#kt_sign_in_form"),
                e = document.querySelector("#kt_sign_in_submit"),
                i = FormValidation.formValidation(t, {
                    fields: {
                        username: {
                            validators: {
                                notEmpty: {message: "Username es obligatorio."},
                            }
                        }, password: {validators: {notEmpty: {message: "Contraseña es obligatorio."}}}
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger,
                        bootstrap: new FormValidation.plugins.Bootstrap5({rowSelector: ".fv-row"})
                    }
                }),

                e.addEventListener("click", (function (n) {

                    n.preventDefault(),

                        i.validate().then((function (i) {
                                KTSigninGeneral.ajaxSendLogin()

                                /*"Valid" == i ? (

                                    e.setAttribute("data-kt-indicator", "on"),
                                        e.disabled = !0,


                                    setTimeout((function () {
                                         console.log('redirect')
                                        }
                                    ), 2e3)

                                ) : Swal.fire({
                                    text: "Favor validar formulario.",
                                    icon: "error",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok!",
                                    customClass: {confirmButton: "btn btn-primary"}
                                })*/
                            }
                        ))
                }))
        },
        ajaxSendLogin: function () {


            var username = "user1";
            var password = "123456"
            var csrftoken = $('meta[name=csrf-token]').attr('content')

            var url = "http://104.37.186.27:5000/api/login";

            var credentials = btoa(username + ':' + password);

            axios.post('http://104.37.186.27:5000/api/login', {}, {
                    headers: {
                        'Authorization': 'Basic ' + credentials,
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                        'X-CSRF-TOKEN': "{{csrf_token()}}"
                    },
                    type: 'POST',
                    dataType: 'json'
                }
            )
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

        }
    }
}();

var gettersMethods = function () {
    return {
        getListaEntregas: function () {
            console.log('dentro')
        }
    }
}();

KTUtil.onDOMContentLoaded((function () {
    KTSigninGeneral.init()
}));
