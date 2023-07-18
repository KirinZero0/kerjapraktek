<?php

namespace App\Http\Resources\Api\V1\Buyer;

use Illuminate\Http\Resources\Json\JsonResource;

class BuyerTransactionResource extends JsonResource
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
            'reference_id' => $this->payments->payable->reference_id,
            'payment_method' => match($this->payments->payable_type)
            {
                'App\Models\EWallet' => 'EWallet',
                'App\Models\VirtualAccount' => 'Virtual Account',
                'App\Models\Retail' => 'Retail',
            },
            'product_image' => isset($this->product->productImages[0]) ? $this->product->productImages[0]->getImageUrl() : null,
            'name' => $this->product->name,
            'unit_price'=> $this->unit_price,
            'quantity' => $this->quantity,
            'subtotal' => $this->subtotal,
            'status' => $this->payments->status
        ];
    }
}
