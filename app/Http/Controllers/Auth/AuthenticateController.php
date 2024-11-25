<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthenticateController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'status' => session('status')
        ]);
    }

    public function store(Request $request)
    {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'Veuillez entrer votre adresse email.',
            'email.email' => 'L\'adresse email doit être valide.',
            'password.required' => 'Veuillez entrer votre mot de passe.',
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }
        return back()->withErrors([
            'email' => 'Les identifiants fournis sont incorrects.'
        ])->onlyInput('email');
    }

    public function destroy(Request $request) {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('dashboard');
    }
}
