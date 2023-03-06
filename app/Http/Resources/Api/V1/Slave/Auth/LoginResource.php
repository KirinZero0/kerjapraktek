<?php

namespace App\Http\Resources\Api\V1\Slave\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class LoginResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public $token;
    public $guard;

    public function __construct($resource, $guard = 'api')
    {
        parent::__construct($resource, $guard);
        $this->token = $resource->createToken('authToken', [$guard])->plainTextToken;
        $this->guard = $guard;
    }

    public function toArray($request)
    {   
        return [
            'token' => $this->token,
            'guard' => $this->guard,  
        ];
    }
}
