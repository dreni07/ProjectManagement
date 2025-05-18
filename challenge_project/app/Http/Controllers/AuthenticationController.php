<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class AuthenticationController extends Controller
{
    //

    public function signUp() {
        return Inertia::render("Authentication/SignUp");
    }

    public function logIn(Request $request) {
        $validated_data = Validator::make($request->all(),[
            'email' => 'required',
            'password' => 'required'
        ]);

        if($validated_data->fails()) {
            return response()->json(['success'=>false,'details'=>$validated_data->errors()]);
        }

        try{
            $the_credentials = $request->only("email","password");
            if(Auth::attempt($the_credentials)) {
                return response()->json(['success'=>true,'details'=>'Logged In']);
            }

            return response()->json(['success'=>false,'details'=>"Wrong Credentials"]);
        } catch(\Exception $e) {
            return response()->json(['success'=>false,'details'=>$e->getMessage()]);
        }
    }

    public function checkIsEmailFree(string $email) {
        try{
            $the_user_with_this_email = User::where("email",$email)->get();

            if($the_user_with_this_email->isNotEmpty()) {
                return false;
            }

            return true;
        } catch(\Exception $e) {
            return response()->json(['success'=>false,'details'=>$e->getMessage()]);
        }
    }

    public function register(Request $request) {
        $validated_request = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

        if($validated_request->fails()) {
            return response()->json(['success'=>false,'details'=>$validated_request->errors()]);
        }

        try{
            if($this->checkIsEmailFree($request->email)) {
                $the_user_instance = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password)
                ]);

                Auth::login($the_user_instance);

                return response()->json(['success'=>true]);
            }

            return response()->json(['success'=>false,'details'=>'Email Exists!']);
        } catch(\Exception $e) {
            return response()->json(['success'=>false,'details'=>$e->getMessage()]);
        }
    }

    public function logOut(Request $request) {
        Auth::logout();
    }

    public function google_login(Request $request) {
        return Socialite::driver("google")->redirect();
    }

    public function google_oauth() {
        $google_user = Socialite::driver('google')->user();

        $email = $google_user->getEmail();

        $the_user = User::where("email",$email)->first();

        // if the user exists
        if($the_user) {
            $the_user->google_id = $google_user->id;

            if($the_user->save()) {
                Auth::login($the_user);
                return redirect()->intended("/dashboard");
            }

        } else {
            $user = User::create([
                'name' => $google_user->getName(),
                'email' => $email,
                'password' => Hash::make(Str::random(32)),
                'google_id' => $google_user->id
            ]);

            if($user) {
                Auth::login($user);
                return redirect()->intended("/dashboard");
            }
        }


    }
}
