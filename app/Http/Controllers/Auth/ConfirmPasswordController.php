<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class ConfirmPasswordController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/ConfirmPassword');
    }

    public function store(Request $request)
    {
        if (! Hash::check($request->password, $request->user()->password)) {
            return back()->withErrors([
                'password' => ['Le mot de passe que vous avez entré est incorrect.']
            ]);
        }

        $request->session()->passwordConfirmed();

        return redirect()->intended();
    }
}
