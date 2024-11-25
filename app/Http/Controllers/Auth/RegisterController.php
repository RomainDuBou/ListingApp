<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    
    public function create() {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request) 
    {

       $credentials = $request-> validate([
        'name' => 'required|max:255',
        'email' => 'required|lowercase|email|max:255',
        'password' => 'required|confirmed|min:8'
       ],
       [
        'name.required' => 'Veuillez entrer votre nom',
        'email.required' => 'Veuillez fournir une adresse email.',
        'email.email' => 'L\'adresse email doit être valide.',
        'password.required' => 'Veuillez entrer un mot de passe.',
        'password.confirmed' => 'Les deux mots de passe ne correspondent pas.',
        'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
    ]);

    $user = User::create($credentials);

    event(new Registered($user));

    Auth::login($user);

    return redirect()->route('dashboard');
    }

}

