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

Route::get('/','IndexController@Index');
Route::get('/about','IndexController@About');
Route::get('/projects','IndexController@Projects');
Route::get('/case-studies','IndexController@CaseStudies');
Route::get('/blog','IndexController@Blog');
Route::get('/dashboard','AdminController@Dashboard');

// Route::view('/{path?}', 'main');

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
