<?php

namespace App\Http\Resources\Api\V1\Products;

use Illuminate\Http\Resources\Json\JsonResource;

class GeneratorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return ['id' => $this->resource];
    }
}
