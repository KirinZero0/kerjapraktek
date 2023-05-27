<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Session;

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
        $quantity = Session::get('cart.' . $this->custom_id, 0);
        return [
            'product_image' => isset($this->productImages[0]) ? $this->productImages[0]->getImageUrl() : null,
            'name' => $this->name,
            'race' => $this->race,
            'price' => $this->price,
            'quantity' => $quantity,
            'total' => $this->price * $quantity,
        ];
    }
}
