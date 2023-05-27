<?php

namespace App\Models\Traits;

use App\Models\Cart;
use App\Models\Product;

trait storeCart {
    public function storeCart() {
        $cart = session('cart');

        if(!blank($cart)) {
            $user_id = auth()->id();
            foreach ($cart as $product_id => $quantity) {
                $product = Product::where('custom_id', $product_id)->first();
                $cart = new Cart([
                    'user_id' => $user_id,
                    'product_id' => $product->id,
                    'quantity' => $quantity,
                ]);
                $cart->save();
            }
            session()->forget('cart');
        }
    }

}