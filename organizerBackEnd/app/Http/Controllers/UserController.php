<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request) {


        //check if email already exists
        $user = User::where('email', $request['email'])->first();

        if($user){
            $response['status'] = 1;
            $response['message'] = 'Email Already Exists';
            $response['code'] = 409;
        }else{
            //adds user to database
        $user = User::create([
            'name'      => $request -> name,
            'email'     => $request -> email,
            'password'  => bcrypt($request->password)
        ]);
        $response['status'] = 1;
        $response['message'] = 'User Registered Successful';
        $response['code'] = 200;
        }

        
        return response()->json($response);
    }

    public function login(Request $request){
        //APAGAR ESTE COMENTARIO DPS
        //MIN 24:38 https://www.youtube.com/watch?v=c2bk_Ytqhmg
    }
}
