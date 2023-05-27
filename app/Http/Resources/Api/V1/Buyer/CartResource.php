<?php

namespace App\Http\Resources\Api\V1\Buyer;

use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'product_image' => isset($this->product->productImages[0]) ? $this->product->productImages[0]->getImageUrl() : null,
            'name' => $this->product->name,
            'race' => $this->product->race,
            'price' => $this->product->price,
            'quantity' => $this->quantity,
            'total' => $this->product->price * $this->quantity,
        ];
    }
}
