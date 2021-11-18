import {host, username, password} from './utils'

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


                                "Valid" == i ? (

                                    e.setAttribute("data-kt-indicator", "on"),
                                        e.disabled = !0,


                                        setTimeout((function () {

                                                KTSigninGeneral.ajaxSendLogin(e,i)
                                            }
                                        ), 2e3)

                                ) : Swal.fire({
                                    text: "Favor validar formulario.",
                                    icon: "error",
                                    buttonsStyling: !1,
                                    confirmButtonText: "Ok!",
                                    customClass: {confirmButton: "btn btn-primary"}
                                })
                            }
                        ))
                }))
        },
        ajaxSendLogin: function (e,i) {


            var data = {
                "username":$("#username").val(),
                "password":$("#password").val()
              };

            $.ajax({
                url:`${host}/login`,
                type:'post',
                data:JSON.stringify(data),
                contentType: "application/json; charset=UTF-8",
                success:function(response){
                    console.log(response)

                    if(response.login){

                        localStorage.setItem('token', response.token);
                        localStorage.setItem('username', $("#username").val());
                        window.location.href='/list';

                    }else{
                        e.disabled = 0
                        e.setAttribute("data-kt-indicator", "off")
                        $("#alert-danger").removeClass('d-none');
                        $("#alert-danger").html("Error en login "+response)
                    }

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    e.disabled = 0
                    e.setAttribute("data-kt-indicator", "off")
                    console.log(XMLHttpRequest.responseText)
                }
            });
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
    console.log('ok', host)

    //login
    if ($("#kt_sign_in_submit").length > 0 && $("#kt_sign_in_form").length > 0) {

        KTSigninGeneral.init()
    }


}));
