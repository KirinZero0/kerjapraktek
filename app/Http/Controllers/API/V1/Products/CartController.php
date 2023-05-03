<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function addToCart(Request $request, $customId)
    {
        $quantity = $request->input('quantity', 1);

        $cart = session()->get('cart');

        if (!$cart) {
            $cart = [
                $customId => $quantity
            ];
        } else {
            if (isset($cart[$customId])) {
                $cart[$customId] += $quantity;
            } else {
                $cart[$customId] = $quantity;
            }
        }

        session()->put('cart', $cart);

        return 'Product added to cart';
    }

    public function sessionGet()
    {
        $cartData = session()->get('cart');
        return response()->json($cartData);
    }

    public function showPublicCart()
    {   
        $cart = session()->get('cart');
        $cartProductIds = array_keys($cart);
        $products = Product::whereIn('custom_id', $cartProductIds)->get();

        return CartResource::collection($products);
    }

    public function storeCart(Request $request)
    {
        $user_id = auth()->id();
        

        $cart = session('cart');
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

        return $this->success();
    }
}
