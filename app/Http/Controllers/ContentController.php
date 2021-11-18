<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContentController extends Controller
{
    //

    public function list(){
        return view('pages.list');
    }
    public function details($id){
        return view('pages.details',['id'=>$id]);
    }
}
