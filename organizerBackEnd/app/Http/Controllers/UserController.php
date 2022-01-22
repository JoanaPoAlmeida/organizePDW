<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;
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
        $response['status'] = 1;
        $response['message'] = 'User Registered Successful';
        $response['code'] = 200;
        }

        
        return response()->json($response); 
    }

    public function login(Request $request){

         /* $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
  */

        //APAGAR ESTE COMENTARIO DPS
        //MIN 24:38 https://www.youtube.com/watch?v=c2bk_Ytqhmg
        $credentials = $request->only(['email', 'password']);
        try {
            //$token = JWTAuth::attempt($credentials);
            if(!JWTAuth::attempt($credentials)){
                $response['status'] = 0;
                $response['code'] = 401;
                $response['data'] = null;
                $response['message'] = 'Email or Password is incorrect';
                
                $response['data'] = $credentials;

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
            'id' => $user->id,
            'email' =>$user->email
        ])->attempt($credentials);

        $response['data'] = $data;
        $response['status'] = 1; //login successfull
        $response['code'] = 200;
        $response['message'] = 'Login Successfully';
        return response()->json($response); 
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

     /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }

    
}
