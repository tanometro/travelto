import React from "react";

function PaymentSelector() {
  return (
    <div className="my-5">
      <div className="flex items-center mb-4">
        <input
          id="mercadoPagoRadio"
          type="radio"
          value="mercadopago"
          name="metodoPago"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="mercadopago"
          className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
        >
          Mercado Pago
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="payPalRadio"
          type="radio"
          value="paypal"
          name="metodoPago"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="paypal"
          className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
        >
          Pay Pal
        </label>
      </div>
    </div>
  );
}

export default PaymentSelector;
