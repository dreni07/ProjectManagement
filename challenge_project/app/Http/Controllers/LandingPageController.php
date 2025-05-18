<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class LandingPageController extends Controller
{
    //

    public function is_user_logged_in() {
        $is_user_authenticated = Auth::check();

        $the_response = $is_user_authenticated ? ['success'=>true] : ['success'=>false];

        return response()->json($the_response);
    }

    public function home() {
        return Inertia::render("LandingPage/Home");
    }
}
