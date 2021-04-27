<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthCreateRequest;
use App\Http\Requests\AuthLoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
  public function create(AuthCreateRequest $request)
  {
    $userData = $request->only('name', 'email');
    $userData['password'] = Hash::make($request->input('password'));
    $userData['token'] = '';
    User::create($userData);
    return response(['errors' => ''], 201);
  }

  public function login(AuthLoginRequest $request)
  {
    $credentials = $request->only('email', 'password');
    if (!Auth::attempt($credentials)) return response(['errors' => 'Email e/ou senha incorretos']);

    $user = User::where('email', $credentials['email'])->first();
    $tokenName = $request->input('device');
    $token = $user->createToken($tokenName)->plainTextToken;

    return response(['token' => $token, 'errors' => '']);
  }

  public function logout(Request $request)
  {
    $request->user()->currentAccessToken()->delete();
  }
}
