<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailVerificationController extends Controller
{
    public function notice()
    {
        return Inertia::render('Auth/VerifyEmail', [
            'status' => session('status')
        ]);
    }

    public function handler(EmailVerificationRequest $request)
    {
        $request->fulfill();
        return redirect()->route('home');
    }


    public function resend(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        return back()->with('status', 'Un email de vérification a été envoyé à nouveau!');
    }
}