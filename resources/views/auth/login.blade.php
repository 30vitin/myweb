@extends('layouts.app')

@section('content')

    <div class="d-flex flex-column flex-root">
        <!--begin::Authentication - Sign-in -->
        <div
            class="d-flex flex-column flex-column-fluid position-x-center py-15">
            <!--begin::Content-->
            <div class="/*d-flex flex-center */ flex-column flex-column-fluid p-5 pb-lg-10">


                <!--begin::Wrapper-->
                <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    <div class="d-flex flex-center">
                        <a href="#" class="mb-12">
                            <img alt="Logo" src="assets/media/logos/logo.svg" class="h-70px "/>
                        </a>
                    </div>


                    <div class="alert alert-success d-none" role="alert" id="alert-success">
                    </div>
                    <div class="alert alert-danger d-none" role="alert" id="alert-danger">
                    </div>

                    <form class="form w-100" id="kt_sign_in_form"
                    >
                        <!--begin::Heading-->

                        <!--begin::Heading-->
                        <!--begin::Input group-->
                        <div class="fv-row mb-10">
                            <!--begin::Label-->
                            <label class="form-label fs-6 fw-bolder text-dark">Usuario</label>
                            <!--end::Label-->
                            <!--begin::Input-->
                            <input class="form-control form-control-lg form-control-solid" type="text"
                                   name="username"
                                   id="username"
                                   placeholder="Usuario"
                                   autocomplete="off"/>
                            <!--end::Input-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="fv-row mb-10">
                            <!--begin::Wrapper-->
                            <div class="d-flex flex-stack mb-2">
                                <!--begin::Label-->
                                <label class="form-label fw-bolder text-dark fs-6 mb-0">Contraseña</label>
                                <!--end::Label-->
                                <!--end::Link-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Input-->
                            <input class="form-control form-control-lg form-control-solid"
                                   type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Contraseña"
                                   autocomplete="off"/>
                            <!--end::Input-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Actions-->
                        <div class="text-center">
                            <!--begin::Submit button-->
                            <button id="kt_sign_in_submit"
                                    class="btn btn-lg btn-primary w-100 mb-5"
                            >
                                <span class="indicator-label">Acceder</span>

                                <span class="indicator-progress">Por favor espere...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                            </button>
                            <!--end::Submit button-->

                        </div>
                        <!--end::Actions-->
                    </form>

                    <!--end::Form-->
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Content-->
            <!--begin::Footer-->
            <div class="d-flex flex-center flex-column-auto p-10">

            </div>
            <!--end::Footer-->
        </div>
        <!--end::Authentication - Sign-in-->
    </div>

@endsection

@section('scripts')
    <!--begin::Page Custom Javascript(used by this page)-->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
@endsection
