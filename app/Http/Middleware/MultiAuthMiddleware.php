<?php

namespace App\Http\Middleware;

use App\Models\Slave;
use App\Models\Slaver;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MultiAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $codename = $request->input('codename');

        $slave = Slave::where('codename', $codename)->first();
        $slaver = Slaver::where('codename', $codename)->first();
    
        if ($slave) {
            Auth::shouldUse('slaves');
        } else if ($slaver) {
            Auth::shouldUse('slavers');
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    
        return $next($request);
    }
}
