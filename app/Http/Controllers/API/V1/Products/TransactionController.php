<?php

namespace App\Http\Controllers\Api\V1\Products;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\EWallet;
use App\Models\Retail;
use App\Models\Transaction;
use App\Models\VirtualAccount;
use Illuminate\Http\Request;
use Xendit\EWallets;
use Xendit\Invoice;
use Xendit\Retail as Retails;
use Xendit\VirtualAccounts;
use Xendit\Xendit;

Xendit::setApiKey(env('XENDIT_SECRET_KEY'));

class TransactionController extends Controller
{
    public function createTransaction() //Test XENDIT using Invoice
    {
        $externalId = (string) rand();
        $amount = 100000;
        $payment = \Xendit\Invoice::create([
            'external_id' => $externalId,
            'payer_email' => 'customer@domain.com',
            'description' => 'Payment for order #123',
            'amount' => $amount,
            'should_send_email' => true,
            'invoice_duration' => 24,
        ]);

        return $payment;
    }

    public function createVirtualAccount($bank_code)
    {
        $params = [ 
        "external_id" => "VA-" . (string)rand(100000, 999999),
        "bank_code" => $bank_code,
        "name" => auth()->user()->name,
        "is_closed" => true,
        "expected_amount" => $this->calculateTotalAmount(),
        "expiration_date"=> now()->addMinutes(20)
        ];

        $virtualAccount = VirtualAccounts::create($params);
        
        $va = VirtualAccount::create([
            'external_id' => $params['external_id'],
            'name' => $params['name'],
            'amount'=>$params['expected_amount'],
            'bank_code' => $params['bank_code'],
            'virtual_account_number' => 'test',
            'expiration_date' => $params['expiration_date']
        ]);

        $productItems = $this->getCartItems();

        $transactions = [];
        foreach ($productItems as $item) {
            $transactions[] = [
                'user_id' => auth()->user()->id,
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'status' => 'pending'
            ];
        }

        $va->transactions()->createMany($transactions);

        return $virtualAccount;
    }

    public function createEWalletCharge($channel_code)
    {

        $params = [  
        'reference_id' => "EW-" . (string)rand(100000, 999999),
        'currency' => 'IDR',
        'amount' => $this->calculateTotalAmount(),
        'checkout_method' => 'ONE_TIME_PAYMENT',
        'channel_code' => $channel_code,
        'channel_properties' => [
            'success_redirect_url' => 'https://dashboard.xendit.co/register/1',
        ],
        'metadata' => [
            'branch_code' => 'tree_branch'
        ]];

        $ewalletCharge = EWallets::createEWalletCharge($params);

        $ewallet = EWallet::create([
            'reference_id' => $params['reference_id'],
            'name' => auth()->user()->name,
            'amount' => $params['amount'],
            'channel_code' => $params['channel_code'],
            'checkout_url' => 'test',
        ]);

        $productItems = $this->getCartItems();

        $transactions = [];
        foreach ($productItems as $item) {
            $transactions[] = [
                'user_id' => auth()->user()->id,
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'status' => 'pending'
            ];
        }

        $ewallet->transactions()->createMany($transactions);

        return $ewalletCharge;
    }

    public function createRetailPayment($retail_name)
    {
        Xendit::setApiKey(env('XENDIT_SECRET_KEY'));
        
        $params = [ 
        'external_id' => "RE-" . (string)rand(100000, 999999),
        'retail_outlet_name' => $retail_name,
        'name' => auth()->user()->name,
        'expected_amount' => $this->calculateTotalAmount() 
        ];
        
        $createFPC = Retails::create($params);

        $retail = Retail::create([
            'external_id' => $params['external_id'],
            'name' => $params['name'],
            'retail_outlet' => $params['retail_outlet_name'],
            'amount'=>$params['expected_amount'],
            'payment_code' => 'test',
            'expiration_date' => now()->addHours(5)
        ]);

        $productItems = $this->getCartItems();

        $transactions = [];
        foreach ($productItems as $item) {
            $transactions[] = [
                'user_id' => auth()->user()->id,
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'status' => 'pending'
            ];
        }

        $retail->transactions()->createMany($transactions);

        return $createFPC;
    }


// Helpers
    public function calculateTotalAmount()
    {
        $userId = auth()->user()->id;
        // Retrieve the cart data for the user
        $cartItems = Cart::where('user_id', $userId)->get();
        $totalAmount = 0;
        $shipping = 4;

        foreach ($cartItems as $cartItem) {
            $productPrice = $cartItem->product->price;
            $quantity = $cartItem->quantity;

            // Multiply the product price by the quantity for each item
            $itemAmount = $productPrice * $quantity;

            // Add the item amount to the total amount
            $totalAmount += $itemAmount;
        }

        return $totalAmount += $shipping;
    }

    public function getCartItems()
    {
        $userId = '1';
        $cartItems = Cart::where('user_id', $userId)->get();

        foreach ($cartItems as $cartItem) 
        {
            $productId = $cartItem->product->id;
            $quantity = $cartItem->quantity;
    
            $items[] = [
                'product_id' => $productId,
                'quantity' => $quantity,
            ];
        }

        return $items;
    }
}
