<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');

Auth::routes();
Route::get('/list', [App\Http\Controllers\ContentController::class, 'list'])->name('list');
Route::get('/details/{id}', [App\Http\Controllers\ContentController::class, 'details'])->name('details');

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
