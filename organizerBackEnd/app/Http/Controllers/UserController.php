<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Response;


class UserController extends Controller
{

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

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

        //$token = $user->createToken('organizetoken')->plainTextToken;

        $response['status'] = 1;
        $response['message'] = 'User Registered Successful';
        $response['code'] = 200;
        //$response['token'] =  $token;
        }

        
        return response()->json($response); 
    }


    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required|string|min:6',
        ]);
        if (!Auth::attempt($data)) {
            $response['status'] = 0;
            $response['code'] = 401;
            $response['data'] = null;
            $response['message'] = 'Email or Password is incorrect';
            

            return response()->json($response);

        }else{

            $token = auth()->user()->createToken('organizeToken')->plainTextToken;

            $response['status'] = 1; //login successfull
            $response['code'] = 200;
            $response['message'] = 'Login Successfully';
            $response['token'] = $token;


            return response()->json($response);
        } 

        

       // $user = User::where('email', $data['email'])->first();
/* 

        if(!$user || !Hash::check($data['password'], $user->password)){
           
        } */

        
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Successfully logged out']);
    }


    
}
