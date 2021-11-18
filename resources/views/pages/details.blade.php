@extends('layouts.app-content')

@section('content')

    <div id="app" >
        <header-nav id_entrega="{{$id}}" section_main="true"></header-nav>

        <list-details id_entrega="{{$id}}"></list-details>

    </div>


@endsection

@section('scripts')
    <!--begin::Page Custom Javascript(used by this page)-->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
@endsection
