<?php

use App\Http\Controllers\ContactsContoller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post("/manage_contact/{id?}",[ContactsContoller::class,"createEditContact"]);
Route::get("/all_contacts",[ContactsContoller::class,"getContacts"]);
Route::delete("/delete_contact/{id?}",[ContactsContoller::class,"deleteContact"]);
Route::get("/get_contact/{id?}",[ContactsContoller::class,"getContactData"]);


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
