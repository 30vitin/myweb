@extends('layouts.app-content')

@section('content')


    <!--begin::Content-->
    <div id="app" >

        <header-nav id_entrega="" section_main="false"></header-nav>

        <div class="content d-flex flex-column flex-column-fluid py-3" >
            <list></list>
        </div>



        <!--end::Post-->
    </div>
    <!--end::Content-->




@endsection

@section('scripts')
    <!--begin::Page Custom Javascript(used by this page)-->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
@endsection
