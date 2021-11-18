<template>
    <div id="kt_header" style="" class="header align-items-stretch">
        <!--begin::Container-->
        <div class="container-xxl d-flex align-items-stretch justify-content-between">
            <!--begin::Aside mobile toggle-->
            <!--end::Aside mobile toggle-->
            <!--begin::Logo-->
            <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">


                <span v-show="hideDiv">
                    <div class="d-flex align-items-center m-5 ms-lg-5" @click="returnList">

                    <div class="cursor-pointer symbol symbol-30px symbol-md-40px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>

                    </div>

                </div>
                </span>
            </div>
            <!--end::Logo-->
            <!--begin::Wrapper-->
            <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                <!--begin::Navbar-->
                <div class="d-flex align-items-stretch" id="kt_header_nav">
                    <!--begin::Menu wrapper-->
                    <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu"
                         data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
                         data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end"
                         data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true"
                         data-kt-swapper-mode="prepend"
                         data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                        <!--begin::Menu-->

                        <!--end::Menu-->
                    </div>
                    <!--end::Menu wrapper-->
                </div>
                <!--end::Navbar-->
                <!--begin::Topbar-->
                <div class="d-flex align-items-stretch flex-shrink-0">

                    <span v-show="hideDiv">
                        <div class="d-flex align-items-center m-5 ms-lg-5 pt-1" @click="AddImage">
                            <div class="cursor-pointer symbol symbol-30px symbol-md-40px">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                     class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                                    <path
                                        d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                </svg>
                            </div>
                        </div>
                    </span>

                    <span v-show="hideDiv">
                        <div class="d-flex align-items-center m-5 ms-lg-5 pt-1" @click="AddSignature">

                        <div class="cursor-pointer symbol symbol-30px symbol-md-40px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 class="bi bi-pencil" viewBox="0 0 16 16">
                                <path
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </div>

                    </div>
                    </span>

                    <div class="d-flex align-items-center m-5 ms-lg-5" id="kt_header_user_menu_toggle">

                        <div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click"
                             data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                <path fill-rule="evenodd"
                                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                        </div>

                        <div
                            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                            data-kt-menu="true">
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                                <div class="menu-content d-flex align-items-center px-3">

                                    <div class="d-flex flex-column">
                                        <div class="fw-bolder d-flex align-items-center fs-5">Usuario
                                            <span class="badge badge-light-success
                                             fw-bolder fs-8 px-2 py-1 ms-2">{{ username }}</span>
                                        </div>
                                    </div>
                                    <!--end::Username-->
                                </div>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator my-2"></div>


                            <div class="menu-item px-5">
                                <a href="#" @click="logout"
                                   class="menu-link px-5 sing-out">Salir</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator my-2"></div>
                            <!--end::Menu separator-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-5">
                                <div class="menu-content px-5">

                                </div>
                            </div>
                            <!--end::Menu item-->
                        </div>


                    </div>
                    <!--end::User -->

                </div>
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Container-->

        <div>

            <modal name="signature" :height="419">

                <div class="modal-header">
                    <h5 class="modal-title">Firma Digital</h5>
                    <button type="button" class="close" data-dismiss="modal" @click="CloseModalSignature">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <vue-signature-pat :id_entrega="id_entrega"></vue-signature-pat>
                </div>


            </modal>

            <input type="file" ref="file" style="display: none" @change="handleFileUpload( $event )"
                   accept="image/png, image/jpeg">
        </div>
    </div>


</template>

<script>
import {host} from '../utils'

export default {
    name: "HeaderNav",
    props: [
        'id_entrega',
        'section_main'
    ],
    data() {
        return {
            file: '',
            hideDiv: '',
            username: localStorage.getItem('username')
        }
    },
    created() {
        this.hideDiv = this.section_main == "true"
        console.log('hideDiv ', this.hideDiv)
    },
    methods: {
        AddImage() {
            this.$refs.file.click()
            console.log('addimagenn')
        },
        AddSignature() {
            this.$modal.show('signature')
        },
        handleFileUpload(event) {
            this.file = event.target.files[0];

            let formData = new FormData();
            formData.append('file', this.file);

            var url = `${host}/files/` + this.id_entrega + `/filename1.png?token=` + localStorage.getItem('token')


            axios.post(url, formData, {headers: {'Content-Type': 'application/json'}}
            ).then((response) => {

                if (response.data.upload) {

                    alert('Image saved.')
                    location.reload()
                }

            }).catch(error => {
                if (error.response.status == 403) {
                    localStorage.removeItem('token')
                    window.location.href = '/';
                }

                console.log('error ', error.response.status);

            });

        },
        CloseModalSignature() {
            this.$modal.hide('signature')
        },
        logout() {
            console.log('logout')
            localStorage.removeItem('username')
            localStorage.removeItem('token')
            window.location.href = "/";
        },
        returnList() {
            window.location.href = "/list";
        }


    }
}
</script>

