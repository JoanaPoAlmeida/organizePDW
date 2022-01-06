<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

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
        $credentials = $request->only('email', 'password');
        try {
            if(!JWTAuth::attempt($credentials)){
                $response['status'] = 0;
                $response['code'] = 401;
                $response['data'] = null;
                $response['message'] = 'Email or Password is incorrect';
                return response()->json($response);
            }
        } catch (JWTException $e) {
            $response['data'] = null;
            $response['code'] = 500;
            $response['message'] = 'Could Not Create Token';
            return response()->json($response);
        }
        $user = auth()->user();
        $data['token'] = auth()->claims([
            'user_id' => $user->id,
            'email' =>$user->email
        ])->attempt($credentials);

        $response['data'] = $data;
        $response['status'] = 1; //login successfull
        $response['code'] = 200;
        $response['message'] = 'Login Successfully';
        return response()->json($response);
    }
}
