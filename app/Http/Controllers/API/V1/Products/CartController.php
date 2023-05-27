<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Http\Resources\Api\V1\Buyer\CartResource as UserCart;
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

        return session()->get('cart');
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

    public function addToCart2($productId)
    {
        $user = auth()->user();

        $cartItem = Cart::where('user_id', $user->id)
            ->where('product_id', $productId)
            ->first();

        if ($cartItem) {
            $cartItem->increment('quantity');
        } else {
            $cartItem = new Cart([
                'user_id' => $user->id,
                'product_id' => $productId,
                'quantity' => 1,
            ]);
            $cartItem->save();
        }

        return $this->success();
    }

    public function showCart()
    {
        $user_id = auth()->id();

        $cart = Cart::where('user_id', $user_id)->with('product')->get();

        return UserCart::collection($cart);
    }
}
