<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\DashboardController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::controller(DashboardController::class)->middleware(["auth"])->group(function(){
    Route::get("/dashboard","dashboard")->name("dashboard.route");
});

Route::controller(LandingPageController::class)->group(function(){
    Route::get("/isAuthenticated","is_user_logged_in");
    Route::get("/home","home");

});

Route::controller(AuthenticationController::class)->group(function(){
    Route::get("/signUp","signUp");
    Route::get("/logOut","logOut")->name("logOut.route");

    Route::get("/google_oauth","google_oauth");
    Route::get("/google_login","google_login")->name("google_login.route");

    Route::post("/logIn","logIn")->name("logIn.route");
    Route::post("/register","register")->name("register.route");
});

// Observers in laravel are some kind of events which fire immediatly when an eloquent model
// does something to that particular model
// for example when i create something or delete something we can compare those observers
// with SQL triggers


require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
